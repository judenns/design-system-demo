# Design System Documentation

A comprehensive guide to the design tokens, patterns, and principles that ensure consistency and maintainability across the project. This document provides detailed information on how to use and implement the design system in your development workflow.

## Color System

Our color system is built on two layers:
1. **Primitive variables**: Raw color values organized in scales
2. **Semantic variables**: Purpose-driven tokens that reference primitives

### Primitive Variables

Color scales from 50 (lightest) to 900 (darkest), providing flexibility and consistency across the UI.

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

## Implementation Best Practices

### Component Development

#### Do's
- ✅ Always use semantic variables in components (e.g., `var(--txt-default)`)
- ✅ Maintain consistent spacing rhythm using the spacing scale
- ✅ Follow the established color hierarchy for visual consistency
- ✅ Use appropriate font weights to establish clear hierarchy
- ✅ Test color combinations for WCAG AA compliance
- ✅ Use CSS custom properties for all design tokens
- ✅ Follow BEM naming convention for component classes
- ✅ Ensure components are responsive and adapt to different screen sizes
- ✅ Provide appropriate hover, focus, and active states for interactive elements

#### Don'ts
- ❌ Never use primitive variables directly in components
- ❌ Avoid creating custom colors outside the system
- ❌ Don't mix spacing units (always use rem-based values)
- ❌ Never use arbitrary font sizes outside the scale
- ❌ Don't hardcode color values in CSS
- ❌ Avoid using `!important` declarations
- ❌ Don't create new components when existing ones can be modified or extended
- ❌ Don't override design system values without documentation

### Theming & Customization

The design system supports easy theming by overriding CSS custom properties:

```css
/* Example: Dark theme implementation */
:root[data-theme="dark"] {
  --bg-default: var(--neutral-900);
  --txt-default: var(--neutral-100);
  --bd-default: var(--neutral-700);
}
```

### Using Design Tokens in Your Components

This design system is built on a two-layer architecture of tokens:

1. **Primitive tokens**: Raw values organized in scales (neutral-50 to neutral-900)
2. **Semantic tokens**: Purpose-specific variables that reference primitives

Always use semantic tokens in your components:

```css
/* Component Example: Card */
.card {
  background-color: var(--bg-white); /* Semantic variable */
  color: var(--txt-default); /* Semantic variable */
  border: 1px solid var(--bd-light); /* Semantic variable */
  border-radius: var(--radius-md); /* Semantic variable */
  padding: var(--space-md); /* Semantic variable */
  box-shadow: var(--shadow-sm); /* Semantic variable */
}

.card__title {
  font-size: var(--fs-h5); /* Semantic variable */
  font-weight: var(--fw-semibold); /* Semantic variable */
  margin-bottom: var(--space-sm); /* Semantic variable */
}
```

### Extending the Design System

When creating new components, follow these steps:

1. **Analyze requirements**: Determine if an existing component can be modified
2. **Use BEM methodology**: Structure your CSS using Block, Element, Modifier pattern
3. **Reference semantic tokens**: Use established variables for consistency
4. **Document variations**: Create and document all necessary component variants
5. **Test accessibility**: Ensure WCAG AA compliance for all components
6. **Validate responsiveness**: Test on multiple screen sizes

#### Example: Creating a New Component

```css
/* New Component: Feature Card */
.feature-card { /* Block */
  background-color: var(--bg-brand-lightest);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.feature-card__icon { /* Element */
  width: 48px;
  height: 48px;
  color: var(--txt-brand);
}

.feature-card__title { /* Element */
  font-size: var(--fs-h6);
  font-weight: var(--fw-bold);
  color: var(--txt-dark);
  margin-bottom: var(--space-xs);
}

.feature-card__description { /* Element */
  font-size: var(--fs-default);
  color: var(--txt-default);
}

.feature-card--highlighted { /* Modifier */
  background-color: var(--bg-brand);
  color: var(--txt-white);
}

.feature-card--highlighted .feature-card__title {
  color: var(--txt-white);
}

.feature-card--highlighted .feature-card__description {
  color: var(--txt-white);
}
```

## Accessibility Standards

### Color Contrast
- ✅ All text/background combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- ✅ Interactive elements maintain 3:1 contrast ratio against backgrounds
- ✅ Error states use multiple indicators (color + icon + text)

### Visual Design
- ✅ Focus states have clear visual indicators (minimum 2px outline)
- ✅ Text remains readable at all specified sizes (minimum 14px for body text)
- ✅ Color is never the sole indicator of state or meaning
- ✅ All interactive elements have minimum 44x44px touch targets

### Testing Checklist
- [ ] Test with keyboard navigation only
- [ ] Verify screen reader compatibility
- [ ] Check color contrast ratios
- [ ] Test with browser zoom at 200%
- [ ] Validate focus order is logical
- [ ] Ensure responsive behavior on mobile devices
- [ ] Test touch targets are at least 44x44px
- [ ] Verify animations respect reduced motion preferences
- [ ] Test across supported browsers
- [ ] Validate HTML markup with W3C validator

## Integration with Figma

This design system is synchronized with Figma design files through Claude Code's Figma MCP integration. This allows developers to directly access design assets, components, and variables from Figma.

### Accessing Figma Design Resources

With Claude Code, you can:

1. **View design screenshots** directly from Figma
2. **Extract component code** based on Figma designs
3. **Access design metadata** for accurate implementation
4. **Get design variables** to ensure consistency

### Design-to-Code Workflow

Follow this workflow to implement designs from Figma:

1. **Reference the design**: Ask Claude to view the specific Figma component or screen
2. **Understand the structure**: Review the component hierarchy and relationships
3. **Extract design tokens**: Identify colors, spacing, typography used in the design
4. **Implement using semantic variables**: Use the design system's variables that correspond to the design
5. **Validate against design**: Compare your implementation with the original design

### Example Workflow

```
// 1. View the design component
User: Show me the card component from Figma

// 2. Get component code
User: Generate HTML and CSS for this card component

// 3. Access design variables
User: What colors and spacing are used in this design?

// 4. Implement using semantic variables
User: How do I implement this using our design system variables?
```

## Performance Considerations

The design system is optimized for performance with these features:

- **CSS custom properties**: Enables runtime theming without JavaScript
- **Minimal specificity**: Reduces CSS conflicts and improves rendering performance
- **Efficient selectors**: Uses BEM to avoid deeply nested selectors
- **No dependencies**: Zero external runtime dependencies
- **Optimized assets**: SVG icons and optimized fonts for minimal loading time
