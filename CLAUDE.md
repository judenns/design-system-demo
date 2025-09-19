# CLAUDE.md - Enhanced Configuration for Figma MCP Showcase

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Template-0** is a Claude Code CLI + Figma MCP showcase project featuring:

- **Core Purpose**: Demonstrate rapid design-to-code workflows using Claude Code with Figma MCP integration
- **Architecture**: Vanilla HTML5, CSS3, JavaScript (no build system for rapid prototyping)
- **Design System**: Comprehensive token-based system with CSS custom properties
- **Component Library**: Pre-built, accessible UI components following BEM methodology

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

## CSS Architecture (Updated)

**File Structure**:
```
css/
├── reset.css              # Modern CSS reset
├── variables.css           # Design tokens (colors, typography, spacing)
├── main.css               # Base styles and page-specific layout
└── components/
    ├── index.css          # Component imports (loaded in HTML)
    ├── buttons.css        # Button variants and states
    ├── forms.css          # Form elements (input, select, checkbox, etc.)
    ├── cards.css          # Card variants (basic, feature, product, etc.)
    ├── alerts.css         # Alerts, badges, status indicators
    ├── search.css         # Search components and variants
    ├── headings.css       # Section headings, breadcrumbs
    ├── layout.css         # Layout utilities (grid, flex, containers)
    └── utilities.css      # Helper classes and utilities
```

## Design System Constraints (CRITICAL)

### **ALWAYS USE EXISTING SYSTEM**
- **Colors**: Only use semantic variables (`--txt-brand`, `--bg-light`, etc.)
- **Spacing**: Only use spacing scale (`--space-xs` through `--space-3xl`)
- **Typography**: Only use defined font sizes (`--fs-h1` through `--fs-caption`)
- **Components**: Extend existing components, don't create from scratch

### **Component Selection Guide**
When adding new functionality:

1. **Interactive Elements** → Extend `buttons.css` or `forms.css`
2. **Content Containers** → Extend `cards.css`
3. **Feedback/Status** → Extend `alerts.css`
4. **Navigation/Search** → Extend `search.css` or `headings.css`
5. **Layout Needs** → Use `layout.css` utilities
6. **Quick Styling** → Use `utilities.css` classes

### **BEM Naming Enforcement**
- Block: `.component-name`
- Element: `.component-name__element`
- Modifier: `.component-name--modifier`
- **Never** use nested selectors deeper than 2 levels

## Figma MCP Workflow

### **Standard Design-to-Code Process** (Documentation-First):
1. **Documentation Research**: Use Context7 to get latest, version-specific documentation
   - Verify all APIs, methods, and patterns exist in current version
   - Get official examples and implementation guidelines
2. **View Design**: Use `get_screenshot` to see the component
3. **Extract Specs**: Use `get_metadata` for measurements, colors, spacing
4. **Get Variables**: Use `get_variable_defs` to sync design tokens
5. **Generate Verified Code**: Use `get_code` with documentation validation
   - Cross-reference all code against Context7 documentation
   - Replace any undocumented or deprecated patterns
6. **Adapt to System**: Modify generated code to use our design system variables
7. **Test & Validate**: Ensure accessibility and responsive behavior

### **Component Implementation Rules**:
- **Always** check existing components first
- **Always** use semantic CSS variables
- **Always** include hover, focus, disabled states
- **Always** add ARIA attributes for accessibility
- **Always** test keyboard navigation
- **Always** ensure responsive behavior

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
1. "Show me the [component] from our Figma design"
2. "Generate CSS for this component using our design system variables"
3. "Make sure it follows our BEM naming convention"
4. "Add hover and focus states"
5. "Test with keyboard navigation"
```

### **Updating Design Tokens**
```
1. "Extract all color variables from our Figma design system"
2. "Update variables.css with the new tokens"
3. "Show me which components use the old colors"
4. "Update the affected components"
```

### **Creating Page Layouts**
```
1. "Show me the [page] design from Figma"
2. "Create the HTML structure using our existing components"
3. "Use our layout utilities for responsive behavior"
4. "Ensure semantic HTML and accessibility"
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
