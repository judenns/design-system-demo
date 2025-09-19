# Design System & Component Reference

A consolidated guide to our current design system tokens and components. This document serves as a reference when building new UI elements.

## Design System

### Color System

Our color system has two layers:
1. **Primitive variables**: Raw color scales (50-900)
2. **Semantic variables**: Purpose-driven tokens that reference primitives

#### Text Colors
```css
--txt-dark: #2e4155;        /* Primary headings, bold text */
--txt-default: #5b647b;     /* Body text, regular content */
--txt-light: #7e879a;       /* Secondary text, subtitles */
--txt-brand: #6075a4;       /* Branded text, links */
--txt-brand-dark: #455376;  /* Dark branded text, hover states */
--txt-white: #ffffff;       /* Text on dark backgrounds */
--txt-success: var(--success-600); /* Success messages */
--txt-error: var(--error-600);     /* Error messages */
--txt-warning: var(--warning-600); /* Warning messages */
--txt-disable: var(--neutral-400); /* Disabled text */
```

#### Background Colors
```css
--bg-default: #ffffff;           /* Default page background */
--bg-white: #ffffff;             /* White backgrounds, cards */
--bg-brand: #6075a4;             /* Primary brand background */
--bg-brand-light: var(--brand-100);    /* Light brand background */
--bg-brand-lightest: #f5f6f9;    /* Lightest brand background */
--bg-light: var(--neutral-50);   /* Light neutral background */
--bg-success: var(--success-600); /* Success background */
--bg-warning: var(--warning-600); /* Warning background */
--bg-error: var(--error-600);     /* Error background */
```

#### Border Colors
```css
--bd-default: #cacdd3;         /* Default border color */
--bd-light: var(--neutral-200); /* Light border color */
--bd-dark: #a4a9b7;            /* Dark border color */
--bd-brand: #6075a4;           /* Brand border color */
--bd-error: var(--error-600);   /* Error border color */
--bd-success: var(--success-600); /* Success border color */
--bd-warning: var(--warning-600); /* Warning border color */
--bd-white: #ffffff;            /* White border color */
```

### Typography

#### Font Families
```css
--heading-font: 'Playfair Display', Georgia, serif;
--body-font: 'Jost', system-ui, sans-serif;
--display-font: 'Playfair Display', Georgia, serif;
```

#### Font Sizes
```css
--fs-h1: 6rem;      /* 96px - Main headings */
--fs-h2: 4.5rem;    /* 72px - Section headings */
--fs-h3: 3.5rem;    /* 56px - Subsection headings */
--fs-h4: 2.75rem;   /* 44px - Card titles */
--fs-h5: 2rem;      /* 32px - Small headings */
--fs-h6: 1.5rem;    /* 24px - Minimal headings */
--fs-default: 1.25rem; /* 20px - Body text */
--fs-large: 2rem;     /* 32px - Emphasized text */
--fs-small: 1rem;     /* 16px - Secondary text */
--fs-caption: 0.875rem; /* 14px - Captions, labels */
--fs-label: 1.125rem;  /* 18px - Form labels */
```

#### Font Weights
```css
--fw-default: 400;    /* Normal text */
--fw-italic: 400;     /* Italic text */
--fw-medium: 500;     /* Slightly emphasized */
--fw-semibold: 600;   /* Headings, buttons */
--fw-bold: 700;       /* Strong emphasis */
--fw-extrabold: 800;  /* Heavy emphasis */
--fw-black: 900;      /* Maximum weight */
```

### Spacing

```css
--space-0: 0;          /* Zero spacing */
--space-xs: 0.5rem;    /* 8px - Tight spacing */
--space-sm: 1rem;      /* 16px - Small spacing */
--space-md: 1.5rem;    /* 24px - Medium spacing */
--space-lg: 2rem;      /* 32px - Large spacing */
--space-xl: 2.5rem;    /* 40px - Extra large */
--space-2xl: 4rem;     /* 64px - Double extra large */
--space-3xl: 5rem;     /* 80px - Triple extra large */
--space-4xl: 7.5rem;   /* 120px - Maximum spacing */
```

### Border Radius

```css
--radius-sm: 0.25rem;  /* Subtle rounding */
--radius-md: 0.5rem;   /* Standard rounding */
--radius-lg: 0.75rem;  /* Prominent rounding */
--radius-xl: 1rem;     /* Large rounding */
--radius-full: 9999px; /* Pills, circles */
```

### Shadows

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);  /* Subtle shadow */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Standard shadow */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1); /* Prominent shadow */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1); /* Dramatic shadow */
```

## Component Library

### Buttons

**Variants**: primary, secondary, outline, ghost
**Sizes**: sm, default, lg
**States**: normal, hover, disabled

```html
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--outline">Outline Button</button>
<button class="btn btn--ghost">Ghost Button</button>

<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>

<button class="btn btn--primary" disabled>Disabled</button>
```

### Cards

**Variants**: standard (with header/footer), simple (body only)

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Action</button>
  </div>
</div>

<div class="card">
  <div class="card__body">
    <h3>Simple Card</h3>
    <p>Just body content, no header or footer.</p>
  </div>
</div>
```

### Forms

**Elements**: inputs, labels
**States**: normal, error, disabled, required

```html
<label class="label" for="email">Email Address</label>
<input class="input" type="email" id="email">

<label class="label label--required" for="name">Full Name</label>
<input class="input" type="text" id="name" required>

<label class="label" for="password">Password</label>
<input class="input input--error" type="password" id="password">
<p class="text-error">Password is required</p>

<label class="label" for="disabled">Disabled Field</label>
<input class="input" type="text" id="disabled" disabled value="Cannot edit">
```

### Alerts

**Variants**: success, warning, error, info
**Styles**: with title, simple

```html
<div class="alert alert--success">
  <div class="alert__title">Success!</div>
  <p>Your changes have been saved.</p>
</div>

<div class="alert alert--warning">
  <div class="alert__title">Warning</div>
  <p>Please review your information.</p>
</div>

<div class="alert alert--error">
  <div class="alert__title">Error</div>
  <p>Something went wrong. Please try again.</p>
</div>

<div class="alert alert--info">
  <div class="alert__title">Information</div>
  <p>Here's some helpful information.</p>
</div>

<div class="alert alert--success">
  <p>Operation completed successfully!</p>
</div>
```

### Badges

**Variants**: primary, success, warning, error

```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

## Design Principles

1. **Always use semantic variables**, not raw color values
2. **Follow BEM naming convention** for all components
3. **Use established spacing** from the spacing scale
4. **Maintain consistent typography** using the type scale
5. **Ensure all components are accessible** with proper ARIA and focus states
6. **Create responsive designs** that work on all screen sizes

## Component Construction Rules

When building new components:

1. Use existing **semantic variables** for consistency
2. Follow **BEM methodology** (.block__element--modifier)
3. Include **all interactive states** (hover, focus, active, disabled)
4. Use **consistent spacing** from the spacing scale
5. Provide **appropriate ARIA attributes** for accessibility
6. Test with **keyboard navigation** and **screen readers**
7. Verify **color contrast** meets WCAG AA standards
8. Ensure **touch targets** are at least 44×44px

## Figma Integration

Our design system is synchronized with Figma. Use Claude Code's Figma MCP tools to:

1. View component screenshots: `get_screenshot`
2. Generate implementation code: `get_code`
3. Extract exact specifications: `get_metadata`
4. Access design tokens and variables: `get_variable_defs`