const express = require('express')
const fs = require('fs')
const fsp = require('fs/promises')
const os = require('os')
const path = require('path')
const { spawn } = require('child_process')
const ffmpegPath = require('ffmpeg-static')

const app = express()
const port = Number(process.env.PORT || 3000)
const distDir = path.join(__dirname, 'dist')
const ffmpegDir = path.join(os.tmpdir(), 'klol120-ffmpeg')
const ffmpegBinary = path.join(ffmpegDir, process.platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg')
const ytDlpBinary = path.join(__dirname, 'node_modules', 'youtube-dl-exec', 'bin', process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp')

app.use(express.json({ limit: '1mb' }))

function sanitizeFileName(value) {
  return String(value || 'youtube-download')
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
    .replace(/\s+/g, '-')
    .trim()
    .slice(0, 120) || 'youtube-download'
}

function assertYoutubeUrl(url) {
  if (!url || typeof url !== 'string' || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(url)) {
    const error = new Error('Enter a valid YouTube video URL.')
    error.statusCode = 400
    throw error
  }
}

function runYtDlp(args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(ytDlpBinary, args, { windowsHide: true })
    let stdout = ''
    let stderr = ''
    const timeout = setTimeout(() => {
      child.kill('SIGKILL')
      reject(new Error('The download timed out. Try a shorter video or lower quality.'))
    }, options.timeout || 60000)

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString()
    })
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString()
    })
    child.on('error', (error) => {
      clearTimeout(timeout)
      reject(error)
    })
    child.on('close', (code) => {
      clearTimeout(timeout)
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(new Error((stderr || stdout || `yt-dlp exited with code ${code}`).trim()))
      }
    })
  })
}

function baseArgs(url) {
  return [
    '--no-playlist',
    '--no-warnings',
    '--no-check-certificates',
    '--add-header',
    'referer:youtube.com',
    '--add-header',
    'user-agent:Mozilla/5.0',
    url,
  ]
}

async function getVideoInfo(url) {
  const stdout = await runYtDlp([
    '--dump-single-json',
    '--skip-download',
    ...baseArgs(url),
  ], { timeout: 60000 })
  return JSON.parse(stdout)
}

function availableQualities(info) {
  return [
    ...new Set(
      (info.formats || [])
        .filter((format) => format.vcodec && format.vcodec !== 'none' && format.height)
        .map((format) => format.height)
        .filter((height) => height >= 144)
        .sort((a, b) => b - a),
    ),
  ]
}

async function findFirstFile(dir) {
  const entries = await fsp.readdir(dir)
  const file = entries.find((entry) => !entry.endsWith('.part'))
  return file ? path.join(dir, file) : null
}

async function cleanupDir(dir) {
  try {
    await fsp.rm(dir, { recursive: true, force: true })
  } catch {
    // Best-effort temp cleanup.
  }
}

async function ensureFfmpeg() {
  await fsp.mkdir(ffmpegDir, { recursive: true })
  try {
    await fsp.access(ffmpegBinary)
  } catch {
    await fsp.copyFile(ffmpegPath, ffmpegBinary)
  }
  return ffmpegDir
}

app.get('/api/youtube/info', async (req, res, next) => {
  try {
    const { url } = req.query
    assertYoutubeUrl(url)

    const info = await getVideoInfo(url)
    const thumbnail = Array.isArray(info.thumbnails) ? info.thumbnails.at(-1)?.url : info.thumbnail

    res.json({
      title: info.title,
      author: info.uploader || info.channel || 'Unknown channel',
      durationSeconds: Number(info.duration || 0),
      thumbnail: thumbnail || '',
      qualities: availableQualities(info),
    })
  } catch (error) {
    next(error)
  }
})

app.get('/api/youtube/download', async (req, res, next) => {
  let tempDir
  try {
    const { url, format = 'mp4', quality = '720' } = req.query
    assertYoutubeUrl(url)

    const info = await getVideoInfo(url)
    const safeTitle = sanitizeFileName(info.title)
    tempDir = await fsp.mkdtemp(path.join(os.tmpdir(), 'klol120-youtube-'))
    const outputTemplate = path.join(tempDir, `${safeTitle}.%(ext)s`)

    if (format === 'mp3') {
      const localFfmpegDir = await ensureFfmpeg()
      await runYtDlp([
        '--extract-audio',
        '--audio-format',
        'mp3',
        '--audio-quality',
        '0',
        '--ffmpeg-location',
        localFfmpegDir,
        '--output',
        outputTemplate,
        ...baseArgs(url),
      ], { timeout: 10 * 60 * 1000 })
    } else {
      const localFfmpegDir = await ensureFfmpeg()
      const requestedHeight = Math.max(144, Math.min(4320, Number(quality) || 720))
      await runYtDlp([
        '--format',
        `bv*[height<=${requestedHeight}][ext=mp4]+ba[ext=m4a]/b[height<=${requestedHeight}][ext=mp4]/best[height<=${requestedHeight}]`,
        '--merge-output-format',
        'mp4',
        '--ffmpeg-location',
        localFfmpegDir,
        '--output',
        outputTemplate,
        ...baseArgs(url),
      ], { timeout: 10 * 60 * 1000 })
    }

    const file = await findFirstFile(tempDir)
    if (!file) {
      const error = new Error('The download finished but no output file was produced.')
      error.statusCode = 500
      throw error
    }

    const extension = path.extname(file) || (format === 'mp3' ? '.mp3' : '.mp4')
    res.download(file, `${safeTitle}${extension}`, async (error) => {
      await cleanupDir(tempDir)
      if (error && !res.headersSent) next(error)
    })
  } catch (error) {
    if (tempDir) await cleanupDir(tempDir)
    next(error)
  }
})

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.use((error, _req, res, _next) => {
  if (res.headersSent) return
  res.status(error.statusCode || 500).json({
    error: error.message || 'Something went wrong while processing the video.',
  })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Klol120 Tools server running at http://127.0.0.1:${port}`)
})
