# Theme Configuration Guide

## Quick Start

The theme configuration system lets you customize the entire design system through a single JSON file:

1. **Edit** `theme.config.json` with your custom values
2. **Run** `npm run theme` to apply changes
3. **Preview** with `npm run dev` to see results

## Configuration Structure

```json
{
  "colors": {
    "txtBrand": "#000BFF",      // Primary brand color
    "txtDark": "#111",          // Headings & emphasis
    "txtDefault": "#444",       // Body text
    "txtLight": "#777",         // Secondary text
    "bgDefault": "#ffffff",     // Main background
    "bdDefault": "#e5e5e5"      // Default borders
  },
  "typography": {
    "fontFamily": "Inter",      // Global font
    "headings": {
      "h1": "4.5rem",          // Display size
      "h2": "3.75rem"          // Page titles
    }
  },
  "components": {
    "button": {
      "heightDefault": "48px",   // Standard button height
      "primary": {
        "backgroundColor": "#000BFF",
        "hoverBackgroundColor": "#030BB5"
      }
    }
  }
}
```

## What Gets Updated

The `npm run theme` command updates CSS variables in:

- `style/variables/colors.css` - All color tokens
- `style/variables/typography.css` - Font families and sizes
- `style/components/buttons.css` - Button variants
- `style/components/forms.css` - Input sizes

## Example Customizations

### Change Brand Color to Red
```json
{
  "colors": {
    "txtBrand": "#DC2626",
    "bgBrand": "#DC2626", 
    "bdBrand": "#DC2626"
  },
  "components": {
    "button": {
      "primary": {
        "backgroundColor": "#DC2626",
        "hoverBackgroundColor": "#B91C1C"
      },
      "tonal": {
        "textColor": "#DC2626",
        "hoverTextColor": "#B91C1C"
      },
      "outline": {
        "textColor": "#DC2626",
        "borderColor": "#DC2626"
      }
    }
  }
}
```

### Change Font to Roboto
```json
{
  "typography": {
    "fontFamily": "Roboto"
  }
}
```

### Make Buttons Taller
```json
{
  "components": {
    "button": {
      "heightSmall": "40px",
      "heightDefault": "52px", 
      "heightLarge": "60px"
    }
  }
}
```

## Button Variant Configuration

Each button variant (primary, tonal, outline, link) can be customized with:

- `textColor`: Text color for normal state
- `backgroundColor`: Background color for normal state  
- `borderColor`: Border color for normal state
- `hoverTextColor`: Text color when hovering
- `hoverBackgroundColor`: Background color when hovering
- `hoverBorderColor`: Border color when hovering

## Tips

1. **Keep colors consistent**: Make sure `txtBrand`, `bgBrand`, and `bdBrand` use the same color value
2. **Test after changes**: Always run `npm run dev:theme` to see your changes
3. **Backup your config**: The `theme.config.json` file contains all your customizations
4. **Hover colors**: Usually make hover colors 10-15% darker than the default colors

## Troubleshooting

If the theme update doesn't work:
1. Check that `theme.config.json` has valid JSON syntax
2. Make sure all color values are valid hex codes (e.g., "#FF6B35")
3. Run `npm run theme` manually to see any error messages
