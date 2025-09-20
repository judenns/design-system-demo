# Design System & Component Reference

A modern, customizable design system template with semantic CSS variables and flexible theming. This document serves as a reference when building new UI elements and can be adapted to any project's brand requirements.

## Design System

### Color System

A flexible semantic color system using CSS custom properties. All colors can be customized by updating the variables in `variables.css` to match your project's brand.

#### Text Colors
```css
--txt-dark: [customizable];         /* Primary headings, bold text */
--txt-default: [customizable];      /* Body text, regular content */
--txt-light: [customizable];        /* Secondary text, subtitles */
--txt-brand: [customizable];        /* Brand text, primary actions */
--txt-brand-dark: [customizable];   /* Dark brand text variations */
--txt-white: [customizable];        /* Text on dark backgrounds */
--txt-success: [customizable];      /* Success messages */
--txt-error: [customizable];        /* Error messages */
--txt-warning: [customizable];      /* Warning messages */
--txt-disable: [customizable];      /* Disabled text */
```

#### Background Colors
```css
--bg-default: [customizable];       /* Default page background */
--bg-white: [customizable];         /* White backgrounds, cards */
--bg-brand: [customizable];         /* Primary brand background */
--bg-brand-light: [customizable];   /* Light brand background */
--bg-brand-lightest: [customizable]; /* Lightest brand background */
--bg-light: [customizable];         /* Light neutral background */
--bg-success: [customizable];       /* Success background */
--bg-warning: [customizable];       /* Warning background */
--bg-error: [customizable];         /* Error background */
```

#### Border Colors
```css
--bd-default: [customizable];       /* Default border color */
--bd-light: [customizable];         /* Light border color */
--bd-dark: [customizable];          /* Dark border color */
--bd-brand: [customizable];         /* Brand border color */
--bd-error: [customizable];         /* Error border color */
--bd-success: [customizable];       /* Success border color */
--bd-warning: [customizable];       /* Warning border color */
--bd-white: [customizable];         /* White border color */
```

### Typography

#### Font Families
```css
--font-family-base: [customizable];  /* Base font family */
--heading-font: [customizable];      /* Headings font family */
--body-font: [customizable];         /* Body text font family */
```

#### Font Sizes
```css
--fs-h1: [customizable];      /* Main headings */
--fs-h2: [customizable];      /* Section headings */
--fs-h3: [customizable];      /* Subsection headings */
--fs-h4: [customizable];      /* Card titles */
--fs-h5: [customizable];      /* Small headings */
--fs-h6: [customizable];      /* Minimal headings */
--fs-default: [customizable]; /* Body text */
--fs-large: [customizable];   /* Emphasized text */
--fs-small: [customizable];   /* Secondary text */
--fs-caption: [customizable]; /* Captions, labels */
--fs-label: [customizable];   /* Form labels */
```

#### Font Weights
```css
--fw-default: [customizable];    /* Normal text */
--fw-italic: [customizable];     /* Italic text */
--fw-medium: [customizable];     /* Slightly emphasized */
--fw-semibold: [customizable];   /* Headings, buttons */
--fw-bold: [customizable];       /* Strong emphasis */
--fw-extrabold: [customizable];  /* Heavy emphasis */
--fw-black: [customizable];      /* Maximum weight */
```

### Spacing

```css
--space-0: [customizable];     /* Zero spacing */
--space-xs: [customizable];    /* Tight spacing */
--space-sm: [customizable];    /* Small spacing */
--space-md: [customizable];    /* Medium spacing */
--space-lg: [customizable];    /* Large spacing */
--space-xl: [customizable];    /* Extra large */
--space-2xl: [customizable];   /* Double extra large */
--space-3xl: [customizable];   /* Triple extra large */
--space-4xl: [customizable];   /* Maximum spacing */
```

### Border Radius

```css
--radius-sm: [customizable];   /* Subtle rounding */
--radius-md: [customizable];   /* Standard rounding */
--radius-lg: [customizable];   /* Prominent rounding */
--radius-xl: [customizable];   /* Large rounding */
--radius-full: [customizable]; /* Pills, circles */
```

### Shadows

```css
--shadow-sm: [customizable];   /* Subtle shadow */
--shadow-md: [customizable];   /* Standard shadow */
--shadow-lg: [customizable];   /* Prominent shadow */
--shadow-xl: [customizable];   /* Dramatic shadow */
```

## CSS Architecture

Our CSS is organized into modular component files for better maintainability and scalability:

```
css/components/
├── index.css          # Main import file
├── buttons.css        # Button variants and states (shadcn/ui inspired)
├── forms.css          # Form elements with Phosphor icons
├── headings.css       # Section headings, page headers, breadcrumbs
├── layout.css         # Layout utilities (containers, grids, flex)
└── utilities.css      # Helper classes and utilities
```

**Removed Components**: cards.css, alerts.css, and search.css have been removed to streamline the system.

## Component Library

### Buttons (`buttons.css`)

**Variants**: primary, secondary-fill, secondary-outline, link
**Style**: Modern button styling with consistent height and padding
**States**: normal, hover, focus, disabled
**Customizable**: All colors and spacing can be adjusted via CSS variables

```html
<!-- Primary Variants -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary-fill">Secondary</button>
<button class="btn btn--secondary-outline">Outline</button>
<button class="btn btn--link">Link</button>

<!-- Disabled State -->
<button class="btn btn--primary" disabled>Disabled</button>
```

### Forms (`forms.css`)

**Elements**: input, textarea, select, checkbox, radio, labels
**Icons**: Configurable icon system via data URIs (easily replaceable with any icon library)
**States**: normal, error, disabled, required
**Features**: validation messages, help text, form groups
**Customizable**: All styling can be adapted to match project requirements

```html
<!-- Text Input -->
<div class="input-group">
  <label class="label">Input Label</label>
  <input type="text" class="input" placeholder="Placeholder" />
</div>

<!-- Input States -->
<input type="text" class="input" placeholder="Default" />
<input type="text" class="input input--focus" placeholder="Focused" />
<input type="text" class="input input--error" value="Error state" />
<input type="text" class="input" placeholder="Disabled" disabled />

<!-- Checkbox -->
<div class="checkbox-group">
  <input type="checkbox" id="cb1" class="checkbox" />
  <label for="cb1" class="checkbox-label">Checkbox</label>
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

1. **Semantic variables first**: Always use CSS custom properties instead of hard-coded values
2. **Customizable by default**: All colors, fonts, and spacing can be easily adapted per project
3. **Template approach**: This system serves as a starting point that can be themed for any brand
4. **Follow BEM naming convention** for all components
5. **Use established spacing** from the spacing scale
6. **Ensure all components are accessible** with proper ARIA and focus states
7. **Modern component styling**: Clean aesthetics with proper interactive states

## Component Construction Rules

When building new components:

1. Use existing **semantic variables** for consistency across projects
2. Follow **BEM methodology** (.block__element--modifier)
3. Include **all interactive states** (hover, focus, active, disabled)
4. Use **consistent spacing** from the spacing scale
5. Provide **appropriate ARIA attributes** for accessibility
6. Test with **keyboard navigation** and **screen readers**
7. Verify **color contrast** meets WCAG AA standards (customizable per brand)
8. Ensure **touch targets** are at least 44×44px

## Development Workflow

### Adding New Components

1. **Choose the appropriate CSS file** based on component type:
   - Interactive elements → `buttons.css` or `forms.css`
   - Text content → `headings.css`
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

1. `buttons.css` - Interactive elements
2. `forms.css` - Form components with Phosphor icons
3. `layout.css` - Layout and structure utilities
4. `headings.css` - Typography and text components
5. `utilities.css` - Helper classes (highest specificity)

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