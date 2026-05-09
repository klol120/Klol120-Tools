## Brand & Style

The design system is engineered for a premium, high-performance utility platform. It evokes a sense of "digital precision" through a heavy emphasis on **Glassmorphism** and high-contrast luminosity. The aesthetic is sophisticated and technical, targeting power users who value speed and aesthetic excellence. 

The visual narrative is built on the contrast between "infinite space" (deep navy backgrounds) and "focused light" (vibrant electric accents). Surfaces feel like physical glass panes floating in a dark environment, utilizing background blurs and thin, glowing borders to create depth without visual clutter. 3D-inspired iconography adds a tactile, high-fidelity layer to the otherwise minimalist functional elements.

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