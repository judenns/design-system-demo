# Component Library

This document provides usage examples for all available UI components.

## Buttons

### Basic Usage
```html
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--outline">Outline Button</button>
<button class="btn btn--ghost">Ghost Button</button>
```

### Button Sizes
```html
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>
```

### Button States
```html
<button class="btn btn--primary">Normal</button>
<button class="btn btn--primary" disabled>Disabled</button>
```

## Cards

### Basic Card
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
```

### Simple Card
```html
<div class="card">
  <div class="card__body">
    <h3>Simple Card</h3>
    <p>Just body content, no header or footer.</p>
  </div>
</div>
```

## Forms

### Input with Label
```html
<label class="label" for="email">Email Address</label>
<input class="input" type="email" id="email" placeholder="Enter your email">
```

### Required Field
```html
<label class="label label--required" for="name">Full Name</label>
<input class="input" type="text" id="name" required>
```

### Error State
```html
<label class="label" for="password">Password</label>
<input class="input input--error" type="password" id="password">
<p class="text-error">Password is required</p>
```

### Disabled State
```html
<label class="label" for="disabled">Disabled Field</label>
<input class="input" type="text" id="disabled" disabled value="Cannot edit">
```

## Alerts

### Alert Types
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
```

### Simple Alert
```html
<div class="alert alert--success">
  <p>Operation completed successfully!</p>
</div>
```

## Badges

### Badge Variants
```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

### Usage Examples
```html
<h3>Task Status <span class="badge badge--success">Completed</span></h3>
<p>Priority: <span class="badge badge--error">High</span></p>
```

## Layout Utilities

### Text Alignment
```html
<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
```

### Spacing Utilities
```html
<div class="mt-sm">Small top margin</div>
<div class="mt-md">Medium top margin</div>
<div class="mt-lg">Large top margin</div>

<div class="mb-sm">Small bottom margin</div>
<div class="mb-md">Medium bottom margin</div>
<div class="mb-lg">Large bottom margin</div>
```

### Visibility Utilities
```html
<div class="hidden">This is hidden</div>
<div class="visible">This is visible</div>
```

## Accessibility Features

### Screen Reader Only Content
```html
<span class="sr-only">This text is only for screen readers</span>
```

### Focus Management
All interactive components have proper focus styles and keyboard navigation support.

## Customization

### Creating New Variants
To create new button variants, follow this pattern:

```css
.btn--custom {
  background-color: var(--your-bg-color);
  color: var(--your-text-color);
  border-color: var(--your-border-color);
}

.btn--custom:hover:not(:disabled) {
  background-color: var(--your-hover-bg-color);
  border-color: var(--your-hover-border-color);
}
```

### Component Guidelines
- Always use semantic CSS variables
- Follow the established naming convention
- Include hover and disabled states
- Test with keyboard navigation
- Ensure proper contrast ratios
- Add appropriate ARIA attributes when needed
