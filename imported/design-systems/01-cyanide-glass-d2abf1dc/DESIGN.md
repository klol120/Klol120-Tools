---
name: Cyanide Glass
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#b6c4ff'
  on-secondary: '#002780'
  secondary-container: '#0050ee'
  on-secondary-container: '#d4dbff'
  tertiary: '#e6edff'
  on-tertiary: '#233148'
  tertiary-container: '#c3d1ef'
  on-tertiary-container: '#4c5973'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#001550'
  on-secondary-fixed-variant: '#003ab3'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#b9c7e4'
  on-tertiary-fixed: '#0d1c32'
  on-tertiary-fixed-variant: '#39475f'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a premium, high-performance utility platform. It evokes a sense of "digital precision" through a heavy emphasis on **Glassmorphism** and high-contrast luminosity. The aesthetic is sophisticated and technical, targeting power users who value speed and aesthetic excellence. 

The visual narrative is built on the contrast between "infinite space" (deep navy backgrounds) and "focused light" (vibrant electric accents). Surfaces feel like physical glass panes floating in a dark environment, utilizing background blurs and thin, glowing borders to create depth without visual clutter. 3D-inspired iconography adds a tactile, high-fidelity layer to the otherwise minimalist functional elements.

## Colors

The palette is anchored in a deep, near-black navy (`#020617`) to maximize the luminescence of the accent colors. 

- **Primary:** Electric Cyan (`#00E5FF`) is used for primary calls-to-action, active states, and focus indicators.
- **Secondary:** Cobalt Blue (`#2962FF`) provides depth in gradients and secondary interactive elements.
- **Surface:** A semi-transparent navy (`#0A192F` at various opacities) is used for glass cards to maintain legibility against the dark background.
- **Status:** Functional colors (success, warning, error) should be desaturated to avoid clashing with the vibrant primary accents, using high-value tints for visibility.

## Typography

This design system utilizes **Plus Jakarta Sans** for headings to provide a modern, slightly geometric character that feels premium. **Inter** is utilized for body and UI labels to ensure maximum legibility and a systematic, technical feel.

Headings should use high contrast (Pure White) and tight letter-spacing for a bold, impactful look. Body text should use a slightly dimmed off-white or light gray to reduce eye strain in the dark environment. Key labels and category titles use all-caps with increased letter-spacing to create a distinctive UI hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for the main content area to maintain a premium, editorial feel, while the navigation and header elements scale to the screen width.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with a max-width of 1280px.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.

Spacing is based on an 8px base unit. Component internal padding is generous to maintain the "light and airy" feel of the glassmorphism style, even within a dark theme.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** The deepest navy background with a subtle radial gradient.
2.  **Surface Layer:** Tool cards and containers use a background blur (12px - 20px) and a semi-transparent fill (`rgba(10, 25, 47, 0.7)`).
3.  **Accent Layer:** Active elements and hover states utilize a subtle inner glow and a 1px border with a gradient stroke (from white at 20% opacity to white at 5% opacity).
4.  **Interactive Focus:** Elements "lift" on hover through a combination of increased blur and a faint outer glow using the primary cyan color at 10% opacity.

## Shapes

The shape language is consistently rounded to soften the technical aesthetic. 

- **Cards & Large Containers:** Use `rounded-xl` (24px) to emphasize the glass pane feel.
- **Buttons & Inputs:** Use `rounded-lg` (16px) for a modern, tactile appearance.
- **Category Pills:** Use the "Pill" shape (full radius) to differentiate them from functional action buttons.
- **Borders:** All glass containers must feature a 1px solid border with a low-opacity white or primary-tinted stroke to define the edges against the dark background.

## Components

### Tool Cards
Tool cards feature a glass background and a 1px border. On hover, the border color transitions to the primary cyan, and the 3D icon scales up by 5%. The "Open Tool" action button should appear as a high-contrast ghost button that fills on hover.

### Search-Centric Navigation
The primary navigation is a prominent, center-aligned search bar in the header. It utilizes a deep-field blur and a primary-colored cursor. Results should appear in a glass-morphed dropdown with subtle dividers.

### Category Pills
Small, rounded-pill filters. Inactive state: ghost border with white text at 60% opacity. Active state: gradient fill (Cyan to Blue) with pure black text for maximum legibility.

### Buttons
- **Primary:** Full gradient fill (Cyan to Blue) with bold navy text.
- **Secondary:** Semi-transparent glass fill with a 1px cyan border.
- **Ghost:** No fill, white text, 1px low-opacity border.

### Inputs
Fields should have a dark, semi-transparent background (`rgba(0,0,0,0.3)`) and a bottom-border-only focus state in primary Cyan to maintain a minimalist aesthetic.