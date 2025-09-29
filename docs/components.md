# Component Reference

Complete reference for all design system components.

## Buttons

### Variants

- **Primary**: Main call-to-action buttons with brand color
- **Tonal**: Secondary actions with softer brand color
- **Outline**: Tertiary actions with transparent background
- **Link**: Text-only buttons for minimal emphasis

### Sizes

- **Small** (`btn--sm`): 44px height - Compact spaces
- **Default**: 56px height - Standard use
- **Large** (`btn--lg`): 64px height - Hero sections

### Usage

```html
<!-- Primary button -->
<button class="btn btn--primary">Primary Action</button>

<!-- Tonal button -->
<button class="btn btn--tonal">Secondary Action</button>

<!-- Outline button -->
<button class="btn btn--outline">Tertiary Action</button>

<!-- Small button -->
<button class="btn btn--primary btn--sm">Small Button</button>

<!-- Icon button -->
<button class="btn btn--primary btn--icon-only" title="Edit">
  <svg><!-- icon --></svg>
</button>
```

## Form Elements

### Text Inputs

Available sizes: small (`input--sm`), default, large (`input--lg`)

```html
<div class="form-item">
  <label class="label" for="email">Email</label>
  <input type="email" id="email" class="input" placeholder="you@example.com">
</div>
```

### Textarea

```html
<div class="form-item">
  <label class="label" for="message">Message</label>
  <textarea id="message" class="textarea" rows="4"></textarea>
</div>
```

### Select Dropdown

```html
<div class="form-item">
  <label class="label" for="country">Country</label>
  <select id="country" class="select">
    <option>United States</option>
    <option>Canada</option>
  </select>
</div>
```

### Checkboxes

```html
<div class="checkbox">
  <input type="checkbox" id="terms" class="checkbox__input">
  <label for="terms" class="checkbox__label">I agree to terms</label>
</div>
```

### Radio Buttons

```html
<div class="radio-group">
  <div class="radio">
    <input type="radio" id="opt1" name="options" class="radio__input">
    <label for="opt1" class="radio__label">Option 1</label>
  </div>
  <div class="radio">
    <input type="radio" id="opt2" name="options" class="radio__input">
    <label for="opt2" class="radio__label">Option 2</label>
  </div>
</div>
```

## Form States

### Error State

```html
<div class="form-item">
  <label class="label" for="email-error">Email</label>
  <input type="email" id="email-error" class="input input--error" value="invalid">
  <div class="form-error">Please enter a valid email</div>
</div>
```

### Help Text

```html
<div class="form-item">
  <label class="label" for="password">Password</label>
  <input type="password" id="password" class="input">
  <div class="form-help">Must be at least 8 characters</div>
</div>
```

### Required Fields

```html
<label class="label label--required" for="name">Name</label>
<input type="text" id="name" class="input" required>
```

## Typography

### Headings

Use semantic HTML with size classes:

```html
<h1>Heading 1</h1> <!-- 72px -->
<h2>Heading 2</h2> <!-- 60px -->
<h3>Heading 3</h3> <!-- 52px -->
<h4>Heading 4</h4> <!-- 44px -->
<h5>Heading 5</h5> <!-- 32px -->
<h6>Heading 6</h6> <!-- 24px -->
```

### Body Text

```html
<p class="text-large">Large body text (20px)</p>
<p>Default body text (16px)</p>
<p class="text-small">Small text (14px)</p>
<p class="text-caption">Caption text (12px)</p>
```

## Layout Utilities

See `style/components/layout.css` for available utilities:

- Containers
- Grid systems
- Spacing utilities
- Flexbox helpers

## Accessibility

All components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- 4.5:1 contrast ratios (WCAG AA)
- Minimum 44px touch targets