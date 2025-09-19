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

## CSS Architecture

Our CSS is organized into modular component files for better maintainability and scalability:

```
css/components/
├── index.css          # Main import file
├── buttons.css        # Button variants and states
├── forms.css          # Form elements (input, textarea, checkbox, radio, select)
├── cards.css          # Card variants (basic, feature, hero, news, product)
├── alerts.css         # Alerts, badges, status indicators
├── search.css         # Search components and variants
├── headings.css       # Section headings, page headers, breadcrumbs
├── layout.css         # Layout utilities (containers, grids, flex)
└── utilities.css      # Helper classes and utilities
```

## Component Library

### Buttons (`buttons.css`)

**Variants**: primary, secondary-fill, secondary-outline, white, white-outline, link
**Sizes**: sm, md, lg, mobile, icon-only
**States**: normal, hover, focus, disabled

```html
<!-- Primary Variants -->
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary-fill">Secondary Fill</button>
<button class="btn btn--secondary-outline">Secondary Outline</button>
<button class="btn btn--white">White Button</button>
<button class="btn btn--white-outline">White Outline</button>
<button class="btn btn--link">Link Button</button>

<!-- Sizes -->
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary btn--md">Medium</button>
<button class="btn btn--primary btn--lg">Large</button>
<button class="btn btn--primary btn--mobile">Mobile</button>

<!-- Icon Buttons -->
<button class="btn btn--primary btn--icon-left">
  <svg>...</svg> With Icon
</button>
<button class="btn btn--primary btn--icon-only">
  <svg>...</svg>
</button>
```

### Forms (`forms.css`)

**Elements**: input, textarea, select, checkbox, radio, labels
**States**: normal, error, disabled, required
**Features**: validation messages, help text, form groups

```html
<!-- Text Input -->
<div class="form-group">
  <label class="label label--required" for="email">Email Address</label>
  <input class="input" type="email" id="email" required>
  <p class="form-help">We'll never share your email</p>
</div>

<!-- Error State -->
<div class="form-group">
  <label class="label" for="password">Password</label>
  <input class="input input--error" type="password" id="password">
  <p class="form-error">Password is required</p>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="label" for="message">Message</label>
  <textarea class="textarea" id="message"></textarea>
</div>

<!-- Select -->
<div class="form-group">
  <label class="label" for="country">Country</label>
  <select class="select" id="country">
    <option>Choose country</option>
    <option>United States</option>
  </select>
</div>

<!-- Checkbox -->
<div class="checkbox">
  <input class="checkbox__input" type="checkbox" id="agree">
  <label class="checkbox__label" for="agree">I agree to terms</label>
</div>

<!-- Radio Group -->
<div class="radio-group">
  <div class="radio">
    <input class="radio__input" type="radio" id="yes" name="choice">
    <label class="radio__label" for="yes">Yes</label>
  </div>
  <div class="radio">
    <input class="radio__input" type="radio" id="no" name="choice">
    <label class="radio__label" for="no">No</label>
  </div>
</div>
```

### Cards (`cards.css`)

**Variants**: basic, feature, hero, news, product
**Features**: headers, bodies, footers, badges, actions

```html
<!-- Basic Card -->
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

<!-- Product Card -->
<article class="product-card">
  <div class="product-card__image">
    <img src="product.jpg" alt="Product name">
    <span class="product-card__badge product-card__badge--new">New</span>
  </div>
  <div class="product-card__content">
    <h3 class="product-card__title">Product Title</h3>
    <p class="product-card__description">Product description</p>
    <div class="product-card__price">
      <span class="product-card__price-current">$29.99</span>
      <span class="product-card__price-original">$39.99</span>
    </div>
  </div>
  <div class="product-card__actions">
    <button class="btn btn--primary product-card__cta">Add to Cart</button>
  </div>
</article>

<!-- Feature Card -->
<div class="feature-card">
  <div class="feature-card__icon-wrapper">
    <div class="feature-card__icon-bg"></div>
    <img class="feature-card__icon" src="icon.svg" alt="Feature">
  </div>
  <h3 class="feature-card__title">Feature Title</h3>
  <p class="feature-card__description">Feature description text</p>
</div>
```

### Alerts & Badges (`alerts.css`)

**Alert Variants**: success, warning, error, info
**Badge Variants**: primary, secondary, success, warning, error
**Features**: dismissible alerts, notification badges, status indicators

```html
<!-- Alerts -->
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">
    <h4 class="alert__title">Success!</h4>
    <p class="alert__message">Your changes have been saved.</p>
  </div>
</div>

<div class="alert alert--dismissible alert--warning">
  <div class="alert__content">
    <p class="alert__message">Please review your information.</p>
  </div>
  <button class="alert__close">×</button>
</div>

<!-- Badges -->
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success badge--sm">Small Success</span>
<span class="badge badge--outline badge--error">Error Outline</span>
<span class="badge badge--dot badge--success"></span>

<!-- Status Indicator -->
<div class="status-indicator status-indicator--online">
  <div class="status-indicator__dot"></div>
  <span>Online</span>
</div>

<!-- Notification Badge -->
<div class="notification-badge">
  <button class="btn">Messages</button>
  <span class="notification-badge__indicator">3</span>
</div>
```

### Search (`search.css`)

**Variants**: default, compact, large, with-button
**Features**: dropdown suggestions, filters, clear button, loading states

```html
<!-- Basic Search -->
<div class="search">
  <input class="search__input" type="search" placeholder="Search...">
  <svg class="search__icon">...</svg>
</div>

<!-- Search with Button -->
<div class="search search--with-button">
  <input class="search__input" type="search" placeholder="Search...">
  <button class="search__button">Search</button>
</div>

<!-- Search with Dropdown -->
<div class="search--wrapper">
  <div class="search">
    <input class="search__input" type="search" placeholder="Search...">
    <svg class="search__icon">...</svg>
  </div>
  <div class="search__dropdown">
    <div class="search__suggestion">
      <span class="search__suggestion-text">Result 1</span>
    </div>
  </div>
</div>
```

### Layout (`layout.css`)

**Components**: containers, grids, flex utilities, modern layout patterns
**Features**: responsive design, spacing utilities, alignment classes

```html
<!-- Containers -->
<div class="container">Default container</div>
<div class="container container--narrow">Narrow container</div>
<div class="container container--wide">Wide container</div>

<!-- Grid Layouts -->
<div class="grid grid--3-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="grid grid--auto-fit">
  <div>Responsive item</div>
  <div>Responsive item</div>
</div>

<!-- Stack Layout -->
<div class="stack stack--lg">
  <div>Item 1</div>
  <div>Item 2</div> <!-- Automatic spacing -->
  <div>Item 3</div>
</div>

<!-- Sidebar Layout -->
<div class="sidebar">
  <aside>Sidebar content</aside>
  <main>Main content</main>
</div>

<!-- Media Object -->
<div class="media">
  <img class="media__object" src="avatar.jpg" alt="Avatar">
  <div class="media__content">
    <h3>Title</h3>
    <p>Content text</p>
  </div>
</div>
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

## Development Workflow

### Adding New Components

1. **Choose the appropriate CSS file** based on component type:
   - Interactive elements → `buttons.css` or `forms.css`
   - Content containers → `cards.css`
   - Feedback/status → `alerts.css`
   - Navigation/search → `search.css` or `headings.css`
   - Layout utilities → `layout.css`
   - Helper classes → `utilities.css`

2. **Follow the established patterns**:
   - Use BEM naming convention
   - Include all interactive states
   - Add responsive behavior
   - Ensure accessibility compliance

3. **Test the component**:
   - Verify color contrast (WCAG AA)
   - Test keyboard navigation
   - Check screen reader compatibility
   - Validate responsive behavior

### File Loading Order

CSS files are loaded in this specific order via `components/index.css`:

1. `buttons.css` - Base interactive elements
2. `forms.css` - Form components
3. `layout.css` - Layout and structure
4. `cards.css` - Content containers
5. `alerts.css` - Feedback components
6. `search.css` - Search functionality
7. `headings.css` - Text and navigation
8. `utilities.css` - Helper classes (highest specificity)

## Figma Integration

Our design system is synchronized with Figma. Use Claude Code's Figma MCP tools to:

1. **View component screenshots**: `get_screenshot`
2. **Generate implementation code**: `get_code`
3. **Extract exact specifications**: `get_metadata`
4. **Access design tokens and variables**: `get_variable_defs`

See `docs/figma-mcp-guide.md` for complete integration documentation.

## Utility Classes (`utilities.css`)

Comprehensive utility classes for rapid development:

```html
<!-- Spacing -->
<div class="mt-lg mb-xl p-md">Spacing utilities</div>

<!-- Display -->
<div class="flex justify-center align-center">Flexbox utilities</div>

<!-- Colors -->
<p class="text-brand bg-light">Color utilities</p>

<!-- Typography -->
<h1 class="font-bold text-center">Typography utilities</h1>

<!-- Borders and Shadows -->
<div class="border rounded-lg shadow-md">Visual utilities</div>
```