# Component Library Documentation

Complete reference guide for all UI components with usage examples, variations, and accessibility considerations.

## Quick Reference

| Component | Variants | Sizes | States |
|-----------|----------|-------|--------|
| Button | primary, secondary, outline, ghost | sm, default, lg | normal, hover, disabled |
| Card | standard, simple | - | - |
| Input | text, email, password | - | normal, error, disabled |
| Alert | success, warning, error, info | - | - |
| Badge | primary, success, warning, error | - | - |

## Components

### Buttons

**Purpose**: Interactive elements for user actions and navigation.

#### Basic Usage
```html
<button class="btn btn--primary">Primary Button</button>
<button class="btn btn--secondary">Secondary Button</button>
<button class="btn btn--outline">Outline Button</button>
<button class="btn btn--ghost">Ghost Button</button>
```

#### Button Sizes
```html
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>
```

#### Button States
```html
<button class="btn btn--primary">Normal</button>
<button class="btn btn--primary" disabled>Disabled</button>
```

#### Accessibility Notes
- All buttons include proper focus states
- Disabled buttons have `aria-disabled="true"`
- Use descriptive text for screen readers

---

### Cards

**Purpose**: Content containers for grouping related information.

#### Basic Card
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

#### Simple Card
```html
<div class="card">
  <div class="card__body">
    <h3>Simple Card</h3>
    <p>Just body content, no header or footer.</p>
  </div>
</div>
```

---

### Forms

**Purpose**: User input collection with built-in validation styling.

#### Input with Label
```html
<label class="label" for="email">Email Address</label>
<input class="input" type="email" id="email" placeholder="Enter your email">
```

#### Required Field
```html
<label class="label label--required" for="name">Full Name</label>
<input class="input" type="text" id="name" required>
```

#### Error State
```html
<label class="label" for="password">Password</label>
<input class="input input--error" type="password" id="password">
<p class="text-error">Password is required</p>
```

#### Disabled State
```html
<label class="label" for="disabled">Disabled Field</label>
<input class="input" type="text" id="disabled" disabled value="Cannot edit">
```

#### Form Accessibility
- Labels are properly associated with inputs
- Required fields use `aria-required="true"`
- Error messages are announced to screen readers

---

### Alerts

**Purpose**: System feedback and important notifications.

#### Alert Types
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

#### Simple Alert
```html
<div class="alert alert--success">
  <p>Operation completed successfully!</p>
</div>
```

---

### Badges

**Purpose**: Small status indicators and labels.

#### Badge Variants
```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

#### Usage Examples
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

## Advanced Usage

### Component Composition

Combine components for complex UI patterns:

```html
<!-- Card with form and actions -->
<div class="card">
  <div class="card__header">
    <h3 class="card__title">User Settings</h3>
  </div>
  <div class="card__body">
    <label class="label" for="username">Username</label>
    <input class="input" type="text" id="username">

    <label class="label" for="email">Email</label>
    <input class="input" type="email" id="email">
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Save Changes</button>
    <button class="btn btn--ghost">Cancel</button>
  </div>
</div>
```

### Creating Custom Variants
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

## Development Guidelines

### Component Checklist
- [ ] Use semantic CSS variables from design system
- [ ] Follow BEM naming convention (.block__element--modifier)
- [ ] Include all interactive states (hover, focus, active, disabled)
- [ ] Test keyboard navigation (Tab, Enter, Space keys)
- [ ] Verify color contrast meets WCAG AA standards
- [ ] Add appropriate ARIA attributes for accessibility
- [ ] Document usage examples in this guide
- [ ] Test across different screen sizes
- [ ] Ensure touch targets are at least 44x44px

### Performance Considerations

- Components use CSS custom properties for zero-runtime theming
- Styles are modular and can be loaded on-demand
- No JavaScript required for basic component functionality
- Animations use GPU-accelerated properties (transform, opacity)

### Browser Support

All components are tested and supported in:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
