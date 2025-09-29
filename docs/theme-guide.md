# Theme Customization Guide

Complete guide to customizing your design system theme.

## Quick Start

```bash
# 1. Edit theme.config.json with your brand values
# 2. Apply changes
npm run theme

# 3. View results
npm run dev
```

## Basic Customization

### Change Brand Color

```json
{
  "brand": {
    "color": "#1E40AF"  // Your brand color - everything else updates automatically
  }
}
```

This single change updates:
- Primary buttons
- Links and brand text
- Focus states
- All brand color variants (light, dark, hover states)

### Change Fonts

```json
{
  "typography": {
    "heading-font": "Roboto",
    "body-font": "Roboto"
  }
}
```

**Don't forget**: Add the font to your HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjust Text Colors

```json
{
  "colors": {
    "text-dark": "#1f1f1f",      // Headings
    "text-default": "#525252",   // Body text
    "text-light": "#8c8c8c",     // Secondary text
    "text-disable": "#bbb"       // Disabled state
  }
}
```

### Customize Button Sizes

```json
{
  "components": {
    "button": {
      "size": {
        "small": { "height": "44px", "font-size": "0.875rem" },
        "default": { "height": "56px", "font-size": "1rem" },
        "large": { "height": "64px", "font-size": "1rem" }
      }
    }
  }
}
```

## Advanced Customization

### Button Variant Colors

Customize each button style individually:

```json
{
  "components": {
    "button": {
      "tonal": {
        "background-color": "#FEE2E2",
        "hover-background-color": "#FECACA"
      },
      "outline": {
        "border-color": "#E54D2E",
        "hover-background-color": "#FEE2E2"
      }
    }
  }
}
```

Available variants: `primary`, `tonal`, `outline`, `link`

### Typography Scale

```json
{
  "typography": {
    "headings": {
      "h1": "4.5rem",   // 72px
      "h2": "3.75rem",  // 60px
      "h3": "3.25rem",  // 52px
      "h4": "2.75rem",  // 44px
      "h5": "2rem",     // 32px
      "h6": "1.5rem"    // 24px
    },
    "body": {
      "large": "1.25rem",    // 20px
      "default": "1rem",     // 16px
      "small": "0.875rem"    // 14px
    }
  }
}
```

## How It Works

**3-Layer System**:

1. **Config** (`theme.config.json`) → Your brand values
2. **CSS Variables** (`style/variables/`) → Generated automatically
3. **Components** (`style/components/`) → Use variables, stay in sync

When you run `npm run theme`, the script updates all CSS variables. Components automatically inherit the changes.

## View Available Variables

**Colors**: Check `style/variables/colors.css`
```css
:root {
  /* Brand colors (auto-generated scale) */
  --brand-50: #fff8f7;
  --brand-700: #e54d2e;  /* Your brand color */
  --brand-800: #c73e1f;  /* Darker for hover */

  /* Semantic colors (easy to use) */
  --txt-dark: var(--neutral-900);
  --txt-brand: var(--brand-700);
  --bg-default: var(--neutral-50);
}
```

**Typography**: Check `style/variables/typography.css`
```css
:root {
  --ff-heading: Inter, sans-serif;
  --fs-h1: 4.5rem;
  --fs-body: 1rem;
}
```

## Common Recipes

### Corporate Blue Theme
```json
{
  "brand": { "color": "#1E40AF" },
  "colors": {
    "text-dark": "#1e293b",
    "bg-default": "#ffffff"
  }
}
```

### Warm Marketing Theme
```json
{
  "brand": { "color": "#F97316" },
  "colors": {
    "text-dark": "#292524",
    "bg-default": "#fafaf9"
  }
}
```

### Tech Startup Theme
```json
{
  "brand": { "color": "#8B5CF6" },
  "typography": {
    "heading-font": "Space Grotesk",
    "body-font": "Inter"
  }
}
```

## Direct CSS Editing

For advanced customization beyond `theme.config.json`:

**Edit CSS variables directly**:
```css
/* style/variables/colors.css */
:root {
  --custom-accent: #your-color;
  --special-gradient: linear-gradient(90deg, #start, #end);
}
```

**Create custom components**:
1. Create file: `style/components/my-component.css`
2. Import in: `style/components/components.css`
3. Use existing variables for consistency

## Troubleshooting

**Changes not showing?**
```bash
# 1. Regenerate CSS variables
npm run theme

# 2. Clear cache and restart
npm run dev
```

**Invalid JSON error?**
- Check for missing commas or quotes
- Validate at [jsonlint.com](https://jsonlint.com)
- Ensure hex colors start with `#`

**Colors look wrong?**
- Check hex format: `#1E40AF` (6 characters)
- Verify all required color keys exist
- View generated output in `style/variables/colors.css`

## Best Practices

1. **Start simple**: Change brand color first, test everything
2. **Use the cascade**: Let CSS variables propagate changes automatically
3. **Test components**: Run `npm run dev:style` to preview all components
4. **Backup your config**: Save `theme.config.json` to version control
5. **Consistent hover states**: Make hover colors 10-15% darker
6. **Accessibility**: Maintain 4.5:1 contrast ratio for text

## Migration from Existing Brand

```bash
# 1. Update brand color
# Edit theme.config.json → brand.color

# 2. Apply and test
npm run theme
npm run dev:style

# 3. Fine-tune specific components if needed
# Edit component colors in theme.config.json

# 4. Commit your changes
git add theme.config.json
git commit -m "Apply company brand to design system"
```