---
name: Artisanal Threadwork
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#54433c'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#87736b'
  outline-variant: '#dac1b8'
  surface-tint: '#944925'
  primary: '#823b18'
  on-primary: '#ffffff'
  primary-container: '#a0522d'
  on-primary-container: '#ffe1d6'
  inverse-primary: '#ffb596'
  secondary: '#3b6934'
  on-secondary: '#ffffff'
  secondary-container: '#b9eeab'
  on-secondary-container: '#3f6d38'
  tertiary: '#514f4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#696762'
  on-tertiary-container: '#eae6df'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#76320f'
  secondary-fixed: '#bcf0ae'
  secondary-fixed-dim: '#a1d494'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#23501e'
  tertiary-fixed: '#e6e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#484742'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-sm:
    fontFamily: Playfair Display
    fontSize: 20px
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system centers on a **Minimalist** and **Bespoke** aesthetic, tailored for a high-end custom embroidery e-commerce experience. The design narrative prioritizes the "human touch" of artisanal craft while maintaining the digital precision of a modern storefront.

The visual language balances warmth and sophistication to evoke an inclusive, premium feeling. High-quality photography with natural lighting is the primary visual driver, supported by a UI that acts as a quiet, elegant frame. The interface uses generous white space to allow product textures and thread details to remain the focal point, ensuring the user feels the tactile nature of the embroidery even through a screen.

## Colors

The palette is derived from natural fibers and organic dyes. The foundation is built on **Warm Neutrals** to differentiate from the cold whites of standard e-commerce.

- **Surface (Primary):** #FDFBF7 (Cream) provides a soft, paper-like background that is easier on the eyes than pure white.
- **Surface (Secondary):** #F5F1EA (Soft Beige) is used for section grouping, hover states, and input backgrounds to provide subtle contrast.
- **Accent (Craft):** #A0522D (Deep Terracotta) represents the physical thread and is used for primary calls to action and highlighting craftsmanship.
- **Accent (Nature):** #2D5A27 (Forest Green) provides a grounded, organic contrast for secondary actions, success states, or sustainability messaging.
- **Ink:** Use a deep charcoal (#2A2A2A) rather than pure black for all text to maintain the soft, premium feel.

## Typography

The typographic hierarchy uses a "High-Low" pairing strategy. 

**Playfair Display** is reserved for headlines and editorial moments. Its high-contrast serifs reflect the elegance of fine needlework. For large display headings, use tighter letter spacing to create a more sophisticated, "magazine" feel.

**Inter** handles all functional and body text. It is chosen for its exceptional legibility at small sizes (essential for sizing charts and material descriptions) and its neutral character that doesn't compete with the expressive headlines. 

Use **Label-Caps** for category tags, overlines, and small navigational elements to add a structured, organized layer to the organic aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, "lookbook" feel. Content is centered with wide outer margins to focus the user’s attention on the product story.

- **Grid:** 12-column system for desktop, 4-column for mobile.
- **Rhythm:** Use an 8px base unit. Vertical rhythm should be intentionally loose; use `stack-lg` (80px) between major sections to create a sense of luxury through "breathability."
- **Photography:** Images should often bleed across multiple columns or use asymmetrical placement to avoid a rigid, corporate grid feel.
- **Mobile:** Transition to a single-column stack for product feeds, maintaining a minimum margin of 20px to ensure the UI doesn't feel cramped.

## Elevation & Depth

To maintain the minimalist aesthetic, this design system avoids heavy drop shadows and complex layering. Instead, depth is communicated through **Tonal Layers** and **Ambient Softness**.

- **Surfaces:** Use the Soft Beige (#F5F1EA) to lift elements like cards or navigation bars off the Cream (#FDFBF7) background without needing a shadow.
- **Shadows:** When necessary (e.g., for floating "Add to Cart" bars on mobile or modal overlays), use a "Fiber Shadow"—a very large blur (32px+) with extremely low opacity (4-6%) and a slight terracotta tint to maintain warmth.
- **Translucency:** Use backdrop blurs (10px) on navigation headers to suggest the lightness of fabric, allowing product colors to subtly bleed through as the user scrolls.

## Shapes

The shape language is **Soft** and intentional. We avoid harsh 90-degree corners to keep the brand feeling approachable and inclusive, yet we avoid pill-shapes to stay grounded in a "professional tailor" aesthetic.

- **Standard Elements:** Buttons and input fields use a 0.25rem (4px) radius.
- **Containers:** Product cards and image containers use a slightly more pronounced 0.5rem (8px) radius to soften the visual impact of large photography.
- **Iconography:** Use medium-stroke icons with rounded terminals to match the weight and feel of a thread line.

## Components

### Buttons
- **Primary:** Filled Deep Terracotta (#A0522D) with white text. No shadow, 4px corner radius.
- **Secondary:** Outlined Deep Terracotta with a 1px border. Background is transparent or Soft Beige on hover.
- **Tertiary:** Text-only with a 1px underline that expands on hover, resembling a single strand of thread.

### Input Fields
- Understated design: a bottom border only (1px) in a medium-beige tint. Upon focus, the border transitions to Deep Terracotta. Labels use `label-caps` for clarity.

### Product Cards
- No borders or heavy shadows. The image takes up 100% of the card width. Text (Product Name and Price) is left-aligned underneath with generous padding.

### Chips & Tags
- Used for "In Stock" or "Customizable" labels. Small, Soft Beige background with Forest Green text. Fully rounded corners (pill-shaped) to distinguish them from functional buttons.

### Customization Interface
- Special attention to "Thread Color Selectors." These should be large, circular swatches with a subtle inner shadow to look like a spool of thread. When selected, they receive a 2px Terracotta ring with a small offset.