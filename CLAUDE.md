# CLAUDE.md - Modern Design System Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Modern Design System** is a clean, neutral design system showcase featuring:

- **Core Purpose**: Demonstrate modern, accessible design system with shadcn/ui inspired components
- **Architecture**: Vanilla HTML5, CSS3, JavaScript (no build system for rapid prototyping)
- **Design System**: Token-based system with CSS custom properties using Inter typography
- **Component Library**: Streamlined, accessible UI components following BEM methodology
- **Brand Color**: Bright blue (#000BFF) used strategically for primary actions and interactive states

## MCP Integration Setup

### Figma MCP Configuration
- **Status**: ✅ Configured in `.claude/settings.local.json`
- **Tools Available**: `get_screenshot`, `get_code`, `get_metadata`, `get_variable_defs`
- **Usage**: Always reference Figma designs before implementing new components

### Context7 MCP (Documentation-First Priority)
- **Purpose**: Access up-to-date, version-specific documentation and code examples straight from the source
- **Priority**: ALWAYS use before code generation - NO hallucinated APIs, NO outdated patterns
- **Workflow**: `resolve-library-id` → `get-library-docs` → validate → implement
- **Usage**: CSS patterns, accessibility guidelines, framework APIs, best practices

## Development Commands

```bash
# Quick local server (recommended for demos)
python3 -m http.server 8000

# With live reload for development
npx live-server --port=3000 --open=/index.html

# Test design system components
npx live-server --port=3000 --open=/design-system.html
```

## CSS Architecture

**File Structure**:
```
css/
├── reset.css              # Modern CSS reset
├── variables.css          # Design tokens (colors, typography, spacing)
├── main.css               # Base styles (body typography only)
├── design-system.css      # Design system showcase specific styles
└── components/
    ├── index.css          # Component imports (loaded in HTML)
    ├── buttons.css        # Button variants and states (shadcn/ui inspired)
    ├── forms.css          # Form elements (input, select, checkbox, radio)
    ├── headings.css       # Section headings and text components
    ├── layout.css         # Layout utilities (grid, flex, containers)
    └── utilities.css      # Helper classes and utilities
```

## Design System Constraints (CRITICAL)

### **ALWAYS USE EXISTING SYSTEM**
- **Colors**: Only use semantic variables (`--txt-dark`, `--txt-default`, `--txt-light`, `--txt-brand`)
- **Spacing**: Only use spacing scale (`--space-xs` through `--space-3xl`)
- **Typography**: Only use defined font sizes (`--fs-h1` through `--fs-caption`)
- **Font Family**: Inter variable font for all text
- **Brand Color**: Use `#000BFF` only for primary actions and interactive states

### **Component Selection Guide**
When adding new functionality:

1. **Interactive Elements** → Extend `buttons.css` or `forms.css`
2. **Text Content** → Use `headings.css` components
3. **Layout Needs** → Use `layout.css` utilities
4. **Quick Styling** → Use `utilities.css` classes

### **Available Components**
- **Buttons**: Primary, secondary (fill/outline), link, disabled states
- **Forms**: Input, textarea, select, checkbox, radio with focus/error states
- **Headings**: Typography hierarchy and text components
- **Layout**: Grid, flex, container utilities
- **Utilities**: Helper classes for spacing, colors, etc.

### **BEM Naming Enforcement**
- Block: `.component-name`
- Element: `.component-name__element`
- Modifier: `.component-name--modifier`
- **Never** use nested selectors deeper than 2 levels

## Design System Principles

### **Modern Design Approach**:
- **Neutral First**: Use neutral colors (grays) for most UI elements
- **Brand Selective**: Apply brand blue (#000BFF) only for primary actions
- **Typography**: Inter variable font for clean, modern appearance
- **Spacing**: Consistent spacing scale for visual harmony
- **Accessibility**: WCAG 2.1 AA compliance with proper focus states

### **Component Implementation Rules**:
- **Always** check existing components first
- **Always** use semantic CSS variables from `variables.css`
- **Always** include hover, focus, disabled states
- **Always** add ARIA attributes for accessibility
- **Always** test keyboard navigation
- **Always** ensure responsive behavior
- **Always** use Phosphor icons when icons are needed

## Agent Integration

### **Front-End Agent Guidelines**
- **Trigger**: Design system work, UI component implementation
- **Documentation-First Rule**: MUST use Context7 before any code generation
  - Verify all APIs and methods exist in current documentation
  - Get official examples and patterns from source
  - NO assumptions, NO hallucinated code, NO outdated patterns
- **Constraints**: Must use established variables and classes
- **Validation**: Must ask before creating new design system elements
- **MCP Priority**: Context7 (documentation) → Figma MCP (design) → Implementation

### **Figma Integration Agent Guidelines**
- **Trigger**: Figma MCP workflows, design token synchronization
- **Focus**: Seamless design-to-code workflows using MCP tools
- **Responsibility**: Maintain consistency between Figma and CSS

### **Doc-Writer Agent Guidelines**
- **Trigger**: Documentation updates, changelog maintenance
- **Scope**: Update design-system.md, component examples, README
- **Format**: Follow established documentation structure

### **QA Agent Guidelines**
- **Trigger**: Quality assurance, accessibility validation
- **Focus**: Ensure code quality, accessibility compliance, design system consistency
- **Standards**: WCAG 2.1 AA, responsive design, performance optimization

## File Organization Rules

### **HTML Files**
- `index.html`: Main landing page
- `design-system.html`: Component showcase/documentation
- Additional pages: Follow same structure and imports

### **CSS Import Order** (Critical)
```html
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/variables.css" />
<link rel="stylesheet" href="css/components/index.css" />
<link rel="stylesheet" href="css/main.css" />
```

### **JavaScript Structure**
- `scripts/main.js`: Core initialization and utilities
- Keep vanilla JS approach for simplicity
- Use ES6+ features but ensure browser compatibility
- Modular functions for reusability

## Quality Standards

### **Code Quality**
- **Semantic HTML**: Proper landmarks, headings hierarchy
- **CSS Specificity**: Keep low, use classes over IDs
- **JavaScript**: Unobtrusive, progressive enhancement
- **Performance**: Optimize images, minimal HTTP requests

### **Accessibility Standards**
- **WCAG 2.1 AA Compliance**: Minimum standard
- **Keyboard Navigation**: All interactive elements
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: 4.5:1 minimum for normal text

### **Responsive Design**
- **Mobile-First**: Start with mobile, enhance for desktop
- **Breakpoints**: Use consistent breakpoints across components
- **Touch Targets**: Minimum 44x44px for interactive elements
- **Content Priority**: Ensure mobile content hierarchy

## Demo/Showcase Guidelines

When using this project for demonstrations:

1. **Start with Figma**: Always show the design first
2. **Use Natural Language**: Demonstrate Claude Code's natural language interface
3. **Show MCP Integration**: Highlight the design-to-code workflow
4. **Emphasize Consistency**: Point out how new components follow existing patterns
5. **Demonstrate Speed**: Show how quickly prototypes can be built
6. **Highlight Quality**: Show built-in accessibility and responsiveness

## Common Patterns

### **Adding a New Component**
```
1. "Create a [component] using our design system variables"
2. "Make sure it follows our BEM naming convention"
3. "Use neutral colors with brand blue for primary actions"
4. "Add hover and focus states with proper accessibility"
5. "Test with keyboard navigation"
6. "Add to the appropriate CSS file (buttons.css, forms.css, etc.)"
```

### **Updating Design Tokens**
```
1. "Update variables.css with the new token values"
2. "Maintain the neutral color scheme with selective brand usage"
3. "Test all components with the updated tokens"
4. "Update design-system.html to show new values"
```

### **Creating Page Layouts**
```
1. "Create HTML structure using existing components"
2. "Use layout.css utilities for responsive grid/flex layouts"
3. "Apply neutral colors with strategic brand color usage"
4. "Ensure semantic HTML and accessibility compliance"
```

## Troubleshooting

### **Common Issues**
- **MCP Connection**: Check `.claude/settings.local.json` permissions
- **CSS Conflicts**: Verify import order in HTML
- **Design System Drift**: Always validate against `variables.css`
- **Accessibility Issues**: Test with keyboard and screen reader

### **Debugging Steps**
1. Check browser dev tools for CSS issues
2. Validate HTML structure and semantics
3. Test component states (hover, focus, disabled)
4. Verify responsive behavior across breakpoints
5. Run accessibility audit tools

This setup enables rapid, consistent, and maintainable design-to-code workflows while showcasing the power of Claude Code CLI with Figma MCP integration.
