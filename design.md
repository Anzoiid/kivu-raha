# Kivu Raha Hotel Admin Dashboard - Design System

## Overview

This document defines the visual design language for the Kivu Raha Hotel admin dashboard. The design system codifies the existing aesthetic—a sophisticated, luxury hospitality feel rooted in East African elegance with warm gold accents against deep teal and navy backgrounds.

## Brand Identity

**Hotel Name:** Kivu Raha Hotel
**Brand Personality:** Refined, welcoming, professional, East African luxury
**Design Philosophy:** Warm hospitality meets modern efficiency

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#CBA36B` | Primary actions, highlights, active states |
| `--secondary` | `#135846` | Secondary actions, supporting elements |
| `--primary-hover` | `#B59056` | Button hover states |
| `--primary-dark` | `#9A7844` | Active/pressed states |

### Background Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-light` | `#F8F8F8` | Light theme main background |
| `--bg-dark` | `#171717` | Dark theme main background |
| `--card-light` | `#FFFFFF` | Card backgrounds (light) |
| `--card-dark` | `#202020` | Card backgrounds (dark) |
| `--sidebar-bg` | `#1C2F36` | Sidebar background |
| `--sidebar-bg-dark` | `#0F191D` | Dark variant sidebar |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#6E6E6E` | Body text |
| `--text-heading` | `#1C2F36` | Headings (light mode) |
| `--text-light` | `#171717` | Dark text on light |
| `--text-sidebar` | `#FAF6F0` | Sidebar text |
| `--text-muted` | `#7D8B90` | Muted/secondary text |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#68E365` | Success states, confirmations |
| `--warning` | `#FB9F44` | Warnings, pending states |
| `--danger` | `#E23428` | Errors, destructive actions |
| `--info` | `#D653C1` | Informational highlights |
| `--info-alt` | `#135846` | Secondary info |

### Sidebar Theme Colors

```scss
--sidebar-bg: #1C2F36;
--sidebar-text: #FAF6F0;
--sidebar-text-muted: #7D8B90;
--sidebar-hover-bg: rgba(203, 163, 107, 0.15);
--sidebar-active-bg: rgba(203, 163, 107, 0.25);
```

### Opacity Variations

The primary color includes opacity variants for layered effects:

```scss
--rgba-primary-1: rgba(203, 163, 107, 0.1);
--rgba-primary-2: rgba(203, 163, 107, 0.2);
--rgba-primary-3: rgba(203, 163, 107, 0.3);
--rgba-primary-4: rgba(203, 163, 107, 0.4);
--rgba-primary-5: rgba(203, 163, 107, 0.5);
--rgba-primary-6: rgba(203, 163, 107, 0.6);
--rgba-primary-7: rgba(203, 163, 107, 0.7);
--rgba-primary-8: rgba(203, 163, 107, 0.8);
--rgba-primary-9: rgba(203, 163, 107, 0.9);
```

---

## Typography

### Font Families

| Token | Font | Weights | Usage |
|-------|------|---------|-------|
| `--font-family-base` | `Roboto` | 400, 500, 700 | Body text, UI elements |
| `--font-family-heading` | `Poppins` | 400, 500, 600, 700 | Headings |
| `--font-family-alt` | `Nunito` | 400, 600, 700 | Alternative text |
| `--font-family-display` | `Cairo` | 400, 600, 700 | Display/hero text |

**Import:** Google Fonts (Roboto, Poppins, Nunito, Cairo, Montserrat, Open Sans)

### Font Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `--h1` | `2.25rem` (36px) | 1.2 | Page titles |
| `--h2` | `1.875rem` (30px) | 1.25 | Section headers |
| `--h3` | `1.5rem` (24px) | 1.3 | Card titles |
| `--h4` | `1.25rem` (20px) | 1.35 | Subsections |
| `--body` | `0.875rem` (14px) | 1.6 | Body text |
| `--small` | `0.75rem` (12px) | 1.5 | Captions, labels |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Decorative/emphasis |
| Regular | 400 | Body text |
| Medium | 500 | Subheadings, emphasized body |
| Semi-Bold | 600 | Navigation items |
| Bold | 700 | Headings, buttons |

---

## Spacing System

### Base Unit

**Base unit:** `0.25rem` (4px)

### Spacing Scale

| Token | Size | Usage |
|-------|------|-------|
| `--space-xs` | `0.25rem` (4px) | Tight spacing |
| `--space-sm` | `0.5rem` (8px) | Component internal |
| `--space-md` | `1rem` (16px) | Standard padding |
| `--space-lg` | `1.5rem` (24px) | Section spacing |
| `--space-xl` | `2rem` (32px) | Large gaps |
| `--space-2xl` | `3rem` (48px) | Major sections |

### Grid

| Token | Value |
|-------|-------|
| `--grid-gutter` | `30px` |
| `--container-padding` | `30px` |

---

## Visual Effects

### Border Radius

| Token | Size | Usage |
|-------|------|-------|
| `--radius-sm` | `0.375rem` (6px) | Small elements |
| `--radius-md` | `0.75rem` (12px) | Cards, buttons |
| `--radius-lg` | `1rem` (16px) | Modals, large containers |
| `--radius-full` | `50%` | Avatars, circular elements |

**Default radius:** `0.75rem` (12px)

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 0.125rem 0.25rem rgba(0,0,0,0.075)` | Subtle elevation |
| `--shadow-md` | `0 0rem 2.5rem 0rem rgba(82,63,105,0.1)` | Cards, dropdowns |
| `--shadow-lg` | `0 1rem 3rem rgba(0,0,0,0.1)` | Modals, popovers |
| `--shadow-hover` | `0 0.5rem 1.5rem rgba(203,163,107,0.15)` | Hover state elevation |

### Animations

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `--transition-fast` | 150ms | ease-in-out | Quick interactions |
| `--transition-base` | 250ms | ease-in-out | Standard transitions |
| `--transition-slow` | 350ms | ease-in-out | Page transitions |
| `--transition-bounce` | 400ms | cubic-bezier(0.68, -0.55, 0.265, 1.55) | Bouncy effects |

**Preloader:** Ripple animation with dual circles

---

## Layout Structure

### Main Layout

```
┌──────────────────────────────────────────────────────┐
│  Nav Header (Brand Logo + Hamburger)                 │
├────────────┬─────────────────────────────────────────┤
│            │  Header (Title + Search + User Menu)   │
│  Sidebar   ├─────────────────────────────────────────┤
│  (280px)   │                                         │
│            │  Main Content Area                      │
│  - Logo    │  (Cards, Tables, Forms)                 │
│  - Nav     │                                         │
│  - User    │                                         │
│            │                                         │
├────────────┴─────────────────────────────────────────┤
│  Footer                                                 │
└──────────────────────────────────────────────────────┘
```

### Sidebar Dimensions

| Token | Size |
|-------|------|
| `--sidebar-width` | 280px |
| `--sidebar-width-mini` | 100px |
| `--sidebar-width-icon` | 85px |
| `--sidebar-collapsed` | -20px (transform offset) |

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| xs | < 576px | Mobile |
| sm | ≥ 576px | Large mobile |
| md | ≥ 768px | Tablet |
| lg | ≥ 992px | Desktop |
| xl | ≥ 1200px | Large desktop |
| xxl | ≥ 1440px | Extra large |

---

## Components

### Navigation

#### Sidebar
- Fixed left position
- Dark background (`#1C2F36`)
- Collapsible with hamburger toggle
- Navigation items with icons
- Active state: `rgba(203, 163, 107, 0.25)` background
- Hover state: `rgba(203, 163, 107, 0.15)` background
- User profile section at bottom

#### Nav Header (Top Bar)
- Brand logo (SVG)
- Hamburger menu toggle
- Height: `80px`

#### Header
- Page title
- Search bar
- Theme toggle (light/dark)
- Notifications bell with animation
- User dropdown menu

### Cards

- Background: White (light) / `#202020` (dark)
- Border radius: `12px`
- Shadow: `0 0 2.5rem rgba(82,63,105,0.1)`
- Padding: `24px`
- Margin bottom: `24px`

### Buttons

#### Primary Button
- Background: `#CBA36B`
- Text: White
- Border radius: `8px`
- Padding: `12px 24px`
- Hover: `#B59056`

#### Secondary Button
- Background: Transparent
- Border: `1px solid #CBA36B`
- Text: `#CBA36B`
- Hover: Fill with `#CBA36B`

### Form Elements

- Border radius: `8px`
- Border: `1px solid #EEEEEE`
- Focus: Border `#CBA36B`
- Padding: `12px 16px`
- Font size: `14px`

### Tables

- Header background: `#F8F8F8`
- Row hover: `rgba(203, 163, 107, 0.05)`
- Cell padding: `16px`
- Border: `1px solid #EEEEEE`

### Chat Box

- Collapsible panel
- Tabbed interface (Chat, Notes, Alerts)
- User list with online status indicators
- Message bubbles with timestamps

---

## Theme System

### Light Theme

```scss
[data-theme-version="light"] {
  --bg-body: #F8F8F8;
  --bg-card: #FFFFFF;
  --text-primary: #6E6E6E;
  --text-heading: #1C2F36;
  --border-color: #EEEEEE;
}
```

### Dark Theme

```scss
[data-theme-version="dark"] {
  --bg-body: #171717;
  --bg-card: #202020;
  --text-primary: #FAF6F0;
  --text-heading: #FAF6F0;
  --border-color: #3D3D3D;
}
```

### Theme Switching

- **Storage key:** `theme-version`
- **Values:** `'light'` | `'dark'`
- **Applied via:** `data-theme-version` attribute on `<html>` and `<body>`
- **Persistence:** localStorage

---

## Iconography

### Icon Sets Used

| Icon Set | Usage |
|----------|-------|
| Font Awesome | Main icon library |
| Bootstrap Icons | UI elements |
| Themify Icons | Social media, misc |
| Material Design Icons | App icons |
| Flaticon | Custom hospitality icons |
| Simple Line Icons | Interface icons |

### Icon Sizing

| Token | Size |
|-------|------|
| `--icon-sm` | 16px |
| `--icon-md` | 20px |
| `--icon-lg` | 24px |
| `--icon-xl` | 32px |

---

## Gradients

The system includes 18 preset gradients for backgrounds and accents:

| Name | Colors |
|------|--------|
| gradient-1 | Purple → Blue |
| gradient-4 | Orange → Yellow |
| gradient-9 | Pink → Orange |
| gradient-11 | Blue → Purple |
| gradient-14 | Teal → Blue |

**Usage:** Apply via `.gradient-1` through `.gradient-18` classes.

---

## Utility Classes

### Colors

```scss
.text-primary { color: #CBA36B; }
.bg-primary { background-color: #CBA36B; }
.text-success { color: #68E365; }
.text-warning { color: #FB9F44; }
.text-danger { color: #E23428; }
```

### Display

```scss
.d-flex { display: flex; }
.d-block { display: block; }
.d-none { display: none; }
```

### Spacing

```scss
.mb-0, .mb-1, ... mb-6 { margin-bottom }
.mt-0, .mt-1, ... mt-6 { margin-top }
.p-0, .p-1, ... p-6 { padding }
```

### Layout

```scss
.container-fluid { width: 100%; }
.container { max-width: 1200px; }
.row { display: flex; flex-wrap: wrap; }
.col-* { flex basis }
```

---

## Accessibility

### Contrast Ratios

- **Text on background:** Minimum 4.5:1
- **Large text:** Minimum 3:1
- **UI components:** 3:1 against adjacent colors

### Focus States

- Outline: `2px solid #CBA36B`
- Offset: `2px`
- Visible on all interactive elements

### Dark Mode Considerations

- Maintain sufficient contrast
- Avoid pure black (`#000000`) - use `#171717`
- Test readability in both themes

---

## Implementation Notes

### SCSS Organization

```
/scss/
├── abstracts/          # Variables, mixins, maps
│   ├── _variable.scss
│   ├── _bs-custom.scss
│   ├── _mixin.scss
│   └── _maps.scss
├── base/              # Reset, fonts, utilities
├── layout/            # Sidebar, header, footer
├── components/        # Cards, forms, tables, widgets
└── pages/             # Page-specific styles
```

### CSS Custom Properties

All design tokens exposed as CSS custom properties in `:root` for runtime theming.

### Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## Contributing

When extending the design system:

1. **Add new tokens** to `_variable.scss` and `_bs-custom.scss`
2. **Document changes** in this design.md file
3. **Use design tokens** in components, avoid hardcoded values
4. **Test both themes** when adding new patterns
5. **Maintain contrast ratios** for accessibility

---

## Resources

- **Admin Dashboard:** `/admin/xhtml/`
- **Main Styles:** `/admin/xhtml/css/style.css`
- **SCSS Source:** `/admin/xhtml/scss/`
- **Index Page:** `/admin/xhtml/index.html`