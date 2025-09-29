# CLAUDE.md - Modern Design System Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Modern Design System** - Theme-configurable design system with Vite, vanilla web technologies, and Figma MCP integration.

- **Theme System**: `theme.config.json` → automated CSS variable updates
- **Component Library**: Accessible components with BEM naming and size variants
- **Brand Strategy**: Neutral-first with strategic brand color usage

## MCP Integration

- **Context7**: MANDATORY before coding - `resolve-library-id` → `get-library-docs` → implement
- **Figma**: Get designs via `get_screenshot`, `get_code`, `get_metadata`

## Build System (Vite)

- **Dev**: `npm run dev` (port 5173 with hot reload)
- **Build**: `npm run build` (optimized production)
- **Theme**: `npm run theme` (apply config changes)
- **Theme Dev**: `npm run dev:theme` (theme + dev server)
- **Style Dev**: `npm run dev:style` (design system page)

## Dependencies

- **Only dependency**: `vite@^7.1.6` (dev only)
- **Runtime**: Pure vanilla HTML, CSS, JavaScript

## Theme System

**Config**: `theme.config.json` → `npm run theme` → CSS variables updated

**Structure**: Brand color, semantic colors, typography, component sizes
**Workflow**: Edit config → run theme script → components auto-update

## Commands

```bash
npm run dev          # Dev server (localhost:5173)
npm run dev:host     # Dev server with network access
npm run dev:https    # Dev server with HTTPS
npm run dev:style    # Design system page (localhost:5173/design-system.html)
npm run dev:theme    # Apply theme + open design system page
npm run build        # Production build
npm run build:watch  # Production build with watch mode
npm run build:analyze # Production build with bundle analysis
npm run build:theme  # Apply theme + production build
npm run preview      # Preview production build
npm run preview:https # Preview production build with HTTPS
npm run theme        # Apply theme config changes
npm run clean        # Clean build artifacts and cache
```

## CSS Architecture

**Load Order**: `reset.css` → `global.css` → `variables.css` → components

```
style/
├── variables/           # Design tokens (theme-configurable)
│   ├── variables.css    # Main CSS variables (generated)
│   ├── colors.css       # Color system
│   ├── typography.css   # Typography tokens
│   ├── spacing.css      # Spacing tokens
│   └── breakpoints.css  # Responsive breakpoints
├── components/          # BEM components
│   ├── components.css   # Component imports
│   ├── buttons.css      # Button variants
│   ├── forms.css        # Form elements
│   ├── headings.css     # Heading styles
│   ├── layout.css       # Layout utilities
│   └── utilities.css    # Utility classes
└── pages/              # Page-specific styles
    ├── index.css        # Homepage styles
    └── design-system.css # Design system page styles
```

**Rules**: Use CSS variables, follow BEM naming, extend existing components

## Design System Rules

**Theme Source**: `theme.config.json` → use `npm run theme` to apply changes

**Use Existing Variables**:
- **Text**: `--txt-dark`, `--txt-default`, `--txt-light`, `--txt-brand`
- **Background**: `--bg-default`, `--bg-brand`, `--bg-light`
- **Border**: `--bd-default`, `--bd-light`, `--bd-brand`
- **Typography**: `--fs-h1` to `--fs-caption`, font families, weights
- **Sizing**: Small (44px), Default (56px), Large (64px)

**BEM Naming**: `.block__element--modifier`
**Brand Strategy**: Neutral-first with strategic brand color for actions

## Component Guidelines

**Adding Components**:
1. Create CSS file in `components/`
2. Import in `components.css`
3. Use BEM naming
4. Use existing CSS variables
5. Include hover/focus/disabled states
6. Ensure accessibility (ARIA, keyboard nav)

**Available Components**:
- **Buttons**: Primary, tonal, outline, link variants with size options
- **Forms**: Input fields, textareas with validation states
- **Headings**: Typography scale with consistent styling
- **Layout**: Grid, flexbox utilities, containers
- **Utilities**: Spacing, display, alignment helper classes

## Implementation Rules

- Check existing components first
- Use semantic CSS variables only
- Include all interactive states
- Add ARIA attributes
- Test keyboard navigation
- Ensure responsive design
- WCAG 2.1 AA compliance

## Agent Guidelines

**Front-End**: MANDATORY Context7 lookup before coding → Figma reference → implement
**Figma Integration**: Extract designs, sync tokens with theme config
**Doc-Writer**: Keep docs updated with component changes
**QA**: Validate accessibility, design system consistency, performance

## File Organization

**HTML Import Order**: reset → global → variables → components → page-specific
**Pages**: `index.html`, `design-system.html`
**Scripts**: `scripts/main.js` (core), `scripts/update-theme.js` (theme automation)

## Quality Standards

- **Semantic HTML**: Proper landmarks, heading hierarchy
- **WCAG 2.1 AA**: Keyboard nav, ARIA labels, 4.5:1 contrast
- **Touch Targets**: Minimum 44px
- **Performance**: Optimized assets, minimal requests

## Demo Flow

1. Show Figma design → 2. Use Claude Code natural language → 3. Demonstrate MCP workflow → 4. Show component consistency → 5. Highlight speed and quality

## Common Patterns

**New Component**: "Create [component] using design system variables, BEM naming, with hover/focus states"
**Update Theme**: "Update theme.config.json → npm run theme → test components"
**Page Layout**: "Use existing components, layout utilities, semantic HTML"

## Troubleshooting

- **MCP Issues**: Check `.claude/settings.local.json`
- **CSS Issues**: Verify import order
- **Theme Not Applied**: Run `npm run theme`
- **Build Issues**: Check `dist/` output

**Debug Steps**: `npm run dev` → browser dev tools → validate HTML → test states → accessibility audit
