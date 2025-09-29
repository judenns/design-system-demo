# Theme System Guide

Learn how to customize the design system for your brand.

## Quick Start

1. Edit `theme.config.json` with your brand values
2. Run `npm run theme` to apply changes
3. All components automatically update

## Theme Configuration

### Brand Color

Set your primary brand color:

```json
{
  "brand": {
    "color": "#E54D2E"
  }
}
```

This generates:
- `--brand-700`: Main brand color
- `--brand-800`: Hover state (auto-darkened)
- `--brand-50`: Light background tint
- `--brand-100`, `--brand-200`: Tonal button colors

### Semantic Colors

Define base semantic colors:

```json
{
  "colors": {
    "text-dark": "#1f1f1f",
    "text-default": "#525252",
    "text-light": "#8c8c8c",
    "text-disable": "#bbb",
    "bg-default": "#ffffff",
    "bg-light": "#fafafa",
    "bg-white": "#ffffff",
    "bg-brand-light": "#FFF8F7",
    "border-default": "#bbb",
    "border-light": "#e1e1e1"
  }
}
```

These map to primitive color scales in `style/variables/colors.css`:
- Text colors → Neutral scale (900, 700, 500, 400)
- Background colors → Neutral scale (50) + brand (50)
- Border colors → Neutral scale (400, 300)

### Typography

Customize font families and sizes:

```json
{
  "typography": {
    "heading-font": "Inter",
    "body-font": "Inter",
    "display-font": "Inter",
    "headings": {
      "h1": "4.5rem",
      "h2": "3.75rem",
      "h3": "3.25rem",
      "h4": "2.75rem",
      "h5": "2rem",
      "h6": "1.5rem"
    },
    "body": {
      "large": "1.25rem",
      "default": "1rem",
      "small": "0.875rem"
    },
    "label": "0.75rem",
    "caption": "0.75rem"
  }
}
```

### Component Sizes

Define component-specific dimensions:

```json
{
  "components": {
    "button": {
      "size": {
        "small": { "height": "44px", "font-size": "0.875rem" },
        "default": { "height": "56px", "font-size": "1rem" },
        "large": { "height": "64px", "font-size": "1rem" }
      }
    },
    "input": {
      "size": {
        "small": { "height": "44px", "font-size": "0.875rem" },
        "default": { "height": "56px", "font-size": "1rem" },
        "large": { "height": "64px", "font-size": "1rem" }
      }
    }
  }
}
```

### Component Colors

Customize button variant colors:

```json
{
  "components": {
    "button": {
      "primary": {
        "text-color": "#ffffff",
        "hover-text-color": "#ffffff"
      },
      "tonal": {
        "background-color": "#FEEBE7",
        "border-color": "transparent",
        "hover-background-color": "#FFDCD3",
        "hover-border-color": "transparent"
      },
      "outline": {
        "background-color": "transparent",
        "hover-background-color": "#FFDCD3"
      },
      "link": {
        "background-color": "transparent",
        "border-color": "transparent",
        "hover-background-color": "transparent",
        "hover-border-color": "transparent"
      }
    }
  }
}
```

## Color System Architecture

### Primitive Colors

Auto-generated full color scales (50-900):
- **Neutral**: Grayscale for text, backgrounds, borders
- **Brand**: Your brand color in full scale
- **Success**: Green scale for positive feedback
- **Warning**: Amber scale for caution
- **Error**: Red scale for negative feedback

View all primitive colors: `style/variables/colors.css`

### Semantic Colors

Human-readable color names that reference primitive scales:
- **Text**: `--txt-dark`, `--txt-default`, `--txt-light`, `--txt-brand`
- **Background**: `--bg-default`, `--bg-brand`, `--bg-light`
- **Border**: `--bd-default`, `--bd-light`, `--bd-brand`

Components use semantic colors for automatic theme adaptation.

## How the Theme Script Works

`npm run theme` runs `scripts/update-theme.js`:

1. **Read Config**: Loads `theme.config.json`
2. **Update Primitive Colors**: Maps config to CSS primitive scales
3. **Update Semantic Colors**: Links semantic names to primitives
4. **Update Typography**: Sets font families and sizes
5. **Update Component Sizes**: Sets button/input dimensions

## Advanced Customization

### Direct CSS Variable Override

For advanced needs, directly edit CSS files:

```css
/* style/variables/colors.css */
:root {
  --brand-700: #your-color;
  --custom-variable: #value;
}
```

### Custom Components

Create new component files:

1. Add CSS file in `style/components/`
2. Import in `style/components/components.css`
3. Use existing CSS variables for consistency

## Migration Guide

### From Existing Brand

1. Replace brand color in `theme.config.json`
2. Run `npm run theme`
3. Test all components in `design-system.html`
4. Adjust component-specific colors if needed

### Font Integration

1. Add font link in HTML `<head>`
2. Update typography config with font name
3. Run `npm run theme`

Example:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet">
```

```json
{
  "typography": {
    "heading-font": "Roboto",
    "body-font": "Roboto"
  }
}
```

## Troubleshooting

**Theme not applying?**
- Run `npm run theme` after config changes
- Clear browser cache
- Check browser console for CSS errors

**Colors look wrong?**
- Verify hex color format in `theme.config.json`
- Check that all required color keys are present
- View generated colors in `style/variables/colors.css`

**Components not updating?**
- Ensure components use CSS variables, not hard-coded colors
- Check component CSS files reference correct variables