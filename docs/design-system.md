# Design System

This document outlines the design system used in this project.

## Color System

### Primitive Variables

Our color system is based on a scale from 50 (lightest) to 900 (darkest), inspired by Tailwind CSS.

#### Neutral Colors
```css
--neutral-50: #fafafa
--neutral-100: #f5f5f5
--neutral-200: #e5e5e5
--neutral-300: #d4d4d4
--neutral-400: #a3a3a3
--neutral-500: #737373
--neutral-600: #525252
--neutral-700: #404040
--neutral-800: #262626
--neutral-900: #171717
```

#### Brand Colors (Blue)
```css
--brand-50: #eff6ff
--brand-500: #3b82f6
--brand-600: #2563eb (Primary brand color)
--brand-900: #1e3a8a
```

#### Utility Colors
- **Success**: Green scale for positive actions
- **Warning**: Amber scale for cautionary messages  
- **Error**: Red scale for errors and destructive actions

### Semantic Variables

#### Text Colors
```css
--txt-dark: #111111      /* Headings, emphasis */
--txt-default: #444444   /* Body text, default */
--txt-light: #888888     /* Secondary text */
--txt-brand: Brand color /* Links, brand elements */
--txt-disable: Muted     /* Disabled states */
```

#### Background Colors
```css
--bg-default: #ffffff    /* Main background */
--bg-brand: Brand color  /* Brand backgrounds */
--bg-light: Light gray   /* Subtle backgrounds */
```

#### Border Colors
```css
--bd-default: Default    /* Standard borders */
--bd-light: Light gray   /* Subtle borders */
--bd-brand: Brand color  /* Focus, active states */
```

## Typography

### Font Sizes
```css
--fs-h1: 2.5rem     /* Main headings */
--fs-h2: 2rem       /* Section headings */
--fs-h3: 1.5rem     /* Subsection headings */
--fs-h4: 1.25rem    /* Card titles */
--fs-h5: 1.125rem   /* Small headings */
--fs-h6: 1rem       /* Minimal headings */
--fs-default: 1rem  /* Body text */
--fs-large: 1.125rem /* Emphasized text */
--fs-small: 0.875rem /* Secondary text */
--fs-caption: 0.75rem /* Captions, labels */
--fs-label: 0.875rem  /* Form labels */
```

### Font Weights
```css
--fw-default: 400    /* Normal text */
--fw-medium: 500     /* Slightly emphasized */
--fw-semibold: 600   /* Headings, buttons */
--fw-bold: 700       /* Strong emphasis */
--fw-extrabold: 800  /* Heavy emphasis */
--fw-black: 900      /* Maximum weight */
```

## Spacing System

```css
--space-xs: 0.25rem   /* 4px - Tight spacing */
--space-sm: 0.5rem    /* 8px - Small spacing */
--space-md: 1rem      /* 16px - Base spacing */
--space-lg: 1.5rem    /* 24px - Medium spacing */
--space-xl: 2rem      /* 32px - Large spacing */
--space-2xl: 3rem     /* 48px - Extra large */
--space-3xl: 4rem     /* 64px - Maximum */
```

## Border Radius

```css
--radius-sm: 0.25rem  /* Subtle rounding */
--radius-md: 0.5rem   /* Standard rounding */
--radius-lg: 0.75rem  /* Prominent rounding */
--radius-xl: 1rem     /* Large rounding */
--radius-full: 9999px /* Pills, circles */
```

## Shadows

```css
--shadow-sm: Subtle shadow
--shadow-md: Standard shadow
--shadow-lg: Prominent shadow
--shadow-xl: Dramatic shadow
```

## Usage Guidelines

### Do's
- Use semantic variables in components
- Maintain consistent spacing rhythm
- Follow the established color hierarchy
- Use appropriate font weights for hierarchy

### Don'ts
- Don't use primitive variables directly in components
- Don't create custom colors outside the system
- Don't mix spacing units (stick to rem-based system)
- Don't use arbitrary font sizes

## Accessibility

- All color combinations meet WCAG AA contrast ratios
- Focus states are clearly defined
- Text remains readable at all specified sizes
- Color is never the only way to convey information
