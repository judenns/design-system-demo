# CLAUDE.md - Modern Design System Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Modern Design System** is a design system showcase featuring:

- **Core Purpose**: Core design system template which can be used for multiples projects
- **Architecture**: Vanilla HTML5, CSS3, JavaScript and Vite as build tool
- **Design System**: Token-based system with CSS custom properties
- **Component Library**: Streamlined, accessible UI components following BEM methodology
- **Brand Color**: Brand color is used strategically for primary actions and interactive states, brand color value is set in variables.css file

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

## Build System (Vite)

**Configuration**: `vite.config.js`

- **Development**: Hot module reloading, CSS injection, port 3000
- **Production**: ESBuild minification, optimized assets, tree-shaking
- **Features**: HTTPS support, external access, CORS enabled
- **Output**: `dist/` directory with optimized assets

**Key Features**:
- Instant server startup and hot reload
- Native ES modules support
- Optimized production builds
- CSS preprocessing and minification
- Asset optimization and bundling

## Essential Dependencies

**Ultra-Clean Package Structure**:
- **Only dependency**: `vite@^7.1.6` (dev dependency)
- **Zero runtime dependencies**: Pure vanilla HTML, CSS, JavaScript
- **Optimized bundle**: Platform-specific binaries are optional, only installed as needed
- **Build performance**: Sub-second dev server startup, instant hot reload

**Why the large package-lock.json?**
All those @esbuild and @rollup entries are optional cross-platform binaries that Vite uses internally. Only your platform's version gets installed - the rest are just metadata.

## Development Commands

```bash
# Development server with hot reload (Vite)
npm run dev                 # Start dev server on http://localhost:3000
npm run dev:host           # Allow external connections
npm run dev:https          # HTTPS development server

# Build for production
npm run build              # Build optimized production bundle
npm run build:watch        # Watch mode for build
npm run preview            # Preview production build
npm run preview:https      # Preview with HTTPS

# Legacy alternatives (if needed)
python3 -m http.server 8000
npx live-server --port=3000 --open=/design-system.html
```

## CSS Architecture

**Structure Principles**:

- **Foundation Layer**: `reset.css` → `global.css` → `variables/` (always first)
- **Components Layer**: Reusable UI components in `components/` directory
- **Pages Layer**: Page-specific styles in `pages/` directory
- **Entry Point**: `components/components.css` imports all component files

**Current Organization**:
```
style/
├── reset.css              # CSS reset foundation
├── global.css            # Global CSS setup and defaults
├── variables/            # Design tokens (modular)
│   ├── variables.css     # Import all token files
│   ├── colors.css        # Color system
│   ├── typography.css    # Typography tokens
│   ├── spacing.css       # Spacing & layout tokens
│   └── breakpoints.css   # Responsive breakpoints
├── components/           # Reusable UI components
│   ├── buttons.css       # Interactive elements
│   ├── forms.css         # Form controls
│   ├── headings.css      # Typography components
│   ├── layout.css        # Layout utilities
│   └── utilities.css     # Helper classes
└── pages/               # Page-specific styles
    ├── design-system.css # Component showcase
    └── index.css        # Landing page
```

**Flexible Guidelines**:
- Add new components as separate files in `components/`
- Create page-specific CSS files in `pages/` as needed
- Update `components/components.css` when adding new component files
- Maintain the foundation → components → pages import order

## Design System Constraints (CRITICAL)

### **ALWAYS USE EXISTING SYSTEM**

- **Colors**: Only use semantic variables (`--txt-dark`, `--txt-default`, `--txt-light`, `--txt-brand`)
- **Spacing**: Only use spacing scale (`--space-xs` through `--space-3xl`)
- **Typography**: Only use defined font sizes (`--fs-h1` through `--fs-caption`)
- **Font Family**: use font-family set in variables file for heading, ui, display
- **Brand Color**: Use brand-color for primary actions and interactive states

### **Component Organization Guide**

**When adding new functionality**:
1. **Interactive Elements** → Extend existing component files or create new ones
2. **Reusable UI Patterns** → Create new component file in `components/`
3. **Page-Specific Styles** → Create CSS file in `pages/`
4. **Utility Classes** → Add to `utilities.css`

**Component Categories** (examples):
- **Interactive**: buttons, forms, navigation, modals
- **Content**: headings, text, media, cards
- **Layout**: grids, containers, spacing utilities
- **Utilities**: helper classes, responsive utilities

**Adding New Components**:
1. Create new CSS file in `components/` directory
2. Import in `components/components.css`
3. Follow BEM naming convention
4. Use existing design tokens from `variables/` directory

### **BEM Naming Enforcement**

- Block: `.component-name`
- Element: `.component-name__element`
- Modifier: `.component-name--modifier`
- **Never** use nested selectors deeper than 2 levels

## Design System Principles

### **Modern Design Approach**:

- **Neutral First**: Use neutral colors (grays) for most UI elements
- **Brand Selective**: Apply brand color only for primary actions or interactive states
- **Spacing**: Consistent spacing scale for visual harmony
- **Accessibility**: WCAG 2.1 AA compliance with proper focus states

### **Component Implementation Rules**:

- **Always** check existing components first
- **Always** use semantic CSS variables from `variables/` directory
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

**Current Pages**:
- `index.html`: Main landing page
- `design-system.html`: Component showcase/documentation

**Page Creation Guidelines**:
- Follow consistent HTML5 structure and semantics
- Use same CSS import pattern: reset → global → variables → components → page-specific
- Include proper meta tags, accessibility attributes, and Inter font loading
- Create corresponding CSS file in `pages/` directory if page-specific styles needed

### **CSS Import Pattern** (Critical)

**Required Foundation** (always in this order):
```html
<link rel="stylesheet" href="/style/reset.css" />
<link rel="stylesheet" href="/style/global.css" />
<link rel="stylesheet" href="/style/variables/variables.css" />
<!-- Component files as needed -->
<link rel="stylesheet" href="/style/components/buttons.css" />
```

**Optional Additions**:
```html
<!-- Page-specific styles (if needed) -->
<link rel="stylesheet" href="/style/pages/[page-name].css" />

<!-- Individual variable files (if needed) -->
<link rel="stylesheet" href="/style/variables/colors.css" />
<link rel="stylesheet" href="/style/variables/typography.css" />
```

**Import Principles**:
- Foundation files must always load first
- Page-specific CSS comes after components
- Vite handles absolute paths (`/style/`) in all environments
- Maintain cascading order for proper style inheritance

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

- **Breakpoints**: Use consistent breakpoints across components
- **Touch Targets**: Minimum 44x44px for interactive elements

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
1. "Update the appropriate file in variables/ directory with new token values"
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
- **Vite Dev Server**: Port conflicts resolved automatically (strictPort: false)
- **CSS Conflicts**: Verify import order in HTML
- **Design System Drift**: Always validate against `variables/` directory
- **Build Issues**: Check `dist/` output after `npm run build`
- **Accessibility Issues**: Test with keyboard and screen reader

### **Debugging Steps**

1. Start development server: `npm run dev`
2. Check browser dev tools for CSS issues
3. Validate HTML structure and semantics
4. Test component states (hover, focus, disabled)
5. Verify responsive behavior across breakpoints
6. Run accessibility audit tools
7. Test production build: `npm run build && npm run preview`

This setup enables rapid, consistent, and maintainable design-to-code workflows while showcasing the power of Claude Code CLI with Figma MCP integration.
