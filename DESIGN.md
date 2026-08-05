# AidWorks Foundation Design System

## 1. Atmosphere & Identity

AidWorks should feel hopeful, credible, and youth-led: a clear blue sky that opens into a soft horizon, with real community photography rising through the haze. The signature is the landing composition from `referenceimage.png`: a compact white pill navigation, centered high-contrast serif message, restrained glass controls, quiet partner marks, and a wide photographic panel that dissolves into progressive blur.

## 2. Color

### Palette

| Role | Token | Value | Usage |
|---|---|---:|---|
| Hero/deep | `--aw-hero-0` | `#2856d7` | Top of hero sky |
| Hero/upper | `--aw-hero-1` | `#3363da` | Upper gradient |
| Hero/mid-1 | `--aw-hero-2` | `#4574df` | Title field |
| Hero/mid-2 | `--aw-hero-3` | `#5585e3` | CTA field |
| Hero/lower | `--aw-hero-4` | `#6494e4` | Partner and panel field |
| Hero/horizon | `--aw-hero-5` | `#86b4ef` | Lower hero |
| Hero/haze | `--aw-haze` | `#a9d2f6` | End of hero and blur tint |
| Brand/accent | `--aw-blue-600` | `#2c66ee` | Primary actions and links |
| Ink | `--aw-ink` | `#0a1330` | Primary text |
| Muted | `--aw-muted` | `#6a7591` | Secondary text |
| Line | `--aw-line` | `#e4e9f5` | Quiet borders |
| Surface | `--aw-surface` | `#ffffff` | Navigation, cards, forms |
| Page | `--aw-page` | `#f7f9fe` | Interior page background |

White alpha ramps (`--aw-white-*`) and navy shadow ramps (`--aw-shadow-ink-*`) are the only overlays on the hero. Accent color is reserved for actions, focus, and meaningful emphasis.

## 3. Typography

| Level | Size | Weight | Line Height | Tracking | Usage |
|---|---|---:|---:|---:|---|
| Hero display | `clamp(3.2rem, 5vw, 4.85rem)` | 500 / 400 italic | 1.02 | `-0.02em` | Landing statement |
| Display | `clamp(2.8rem, 7.2vw, 5.4rem)` | 500 | 1.03 | `-0.02em` | Interior mastheads |
| H2 | `clamp(2.1rem, 4.4vw, 3.4rem)` | 500 | 1.08 | `-0.02em` | Section titles |
| H3 | `clamp(1.4rem, 2.2vw, 1.9rem)` | 600 | 1.25 | `-0.01em` | Card titles |
| Lead | `clamp(1rem, 1.2vw, 1.08rem)` | 400 | 1.6 | `0` | Hero and section leads |
| Body | `1rem` | 400 | 1.65 | `0` | Default copy |
| Label | `0.75rem` | 600 | 1.3 | `0.12em` | Eyebrows and metadata |

- Display: Playfair Display, Iowan Old Style, Georgia, serif.
- UI/body: Inter, system UI, sans-serif.
- Two families maximum. Body text never below 14px.

## 4. Spacing & Layout

All spacing uses a 4px base. Core tokens are 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, and 96px.

- Content max width: 1180px.
- Reference hero panel max width: 1344px.
- Desktop navigation: 800px × 72px at the 1920 × 1369 reference size; on shorter desktop viewports it scales down to a 680px × 60px floor so it keeps the same visual weight.
- Page gutters: 28px desktop, 20px tablet, 16px mobile.
- Breakpoints: 480px, 768px, 940px, 1024px, 1280px.
- Hero desktop geometry at 1920px: title block around y=185, CTA around y=460, partner strip around y=575, photo panel around y=680.
- Desktop hero geometry is height-aware from 941px upward. Vertical spacing, display type, navigation, photo-panel width/height, and haze depth scale against the 1369px-tall reference viewport. This keeps the panel near the same aspect and ensures the progressive blur is already visible within the first viewport on common 768–1117px-tall laptops.

## 5. Components

### Floating Navigation

- **Structure**: fixed `nav` → white pill → brand mark, route links, primary CTA; mobile button opens a separate white sheet.
- **Variants**: top, scrolled, mobile open.
- **States**: muted default links, dark hover/active, visible keyboard focus, pressed CTA, expanded mobile sheet.
- **Accessibility**: landmark, labeled home link, native links/buttons, `aria-expanded`, route-close behavior.
- **Motion**: mount blur/rise/fade; transform and opacity only.

### Buttons

- **Variants**: primary blue, hero glass, light, ghost, large.
- **States**: default, hover lift, active settle, focus-visible ring, disabled dim/no lift.
- **Accessibility**: native link/button semantics and a visible 3px focus ring.

### Reveal / Stagger

- **Structure**: Motion container orchestrating child reveals.
- **Variants**: standard and scale/image.
- **States**: hidden and shown; reduced motion resolves immediately.
- **Motion**: blur 14–18px, translate 28–44px, fade, 0.9–1.15s, 90–120ms stagger.

### Photo Mosaic Panel

- **Structure**: translucent outer frame → white inner grid → real AidWorks photos → two statistic chips.
- **States**: image hover zoom, focus-independent decorative motion, responsive grid rearrangement.
- **Accessibility**: meaningful alt text on every photo; statistics remain text.
- **Motion**: panel scale reveal and image-only transform hover.

### Cards and Page Heroes

- **Variants**: default, hoverable, tinted section, blue masthead.
- **States**: default, hover, focus for interactive cards, loading/empty/error supplied by the owning feature where applicable.
- **Accessibility**: semantic headings, sufficient contrast, no interaction hidden behind hover.

### Partner Marquee

- **Structure**: clipped edge-to-edge track with two identical partner groups so the loop is seamless.
- **Variants**: hero blue-sky marquee and pale-blue ticker.
- **States**: continuously moving, paused on hover/focus, static duplicate-free fallback for reduced motion.
- **Accessibility**: the first group is exposed to assistive technology; the repeated visual group is `aria-hidden`; the marquee never receives keyboard focus as a whole.
- **Motion**: linear `transform` animation only, with masked edges and no layout animation.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|---|---:|---|---|
| Micro | 120–180ms | ease-out | Press/focus feedback |
| Standard | 240–320ms | `--aw-ease` | Hover and mobile sheet |
| Emphasis | 900–1150ms | `--aw-ease` | Blur-rise hero/section reveals |

Only `transform`, `opacity`, and `filter` animate. Scroll reveals use Motion’s intersection observer. `prefers-reduced-motion` removes non-essential movement and blur while leaving all content visible.

## 7. Depth & Surface

Strategy: mixed tonal shift and restrained glass.

- Navigation: opaque white body, subtle navy ambient shadow, blue-gradient CTA with inset rim.
- Hero CTA: translucent white tint + blur + highlight rim + navy depth shadow.
- Mosaic frame: translucent white shell + soft blur + single ambient shadow.
- Progressive haze: two masked backdrop-blur bands plus a sampled blue tint; it must dissolve the panel without turning the entire horizon white.
- Cards below the hero use white tonal separation, a quiet line, and low elevation. Avoid heavy glass outside the hero.
