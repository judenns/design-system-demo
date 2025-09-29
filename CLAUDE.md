# CLAUDE.md - Modern Design System Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## ⚠️ CRITICAL RULES (IMMEDIATE ENFORCEMENT)

These rules are **NON-NEGOTIABLE** and apply to ALL operations:

1. **Context7 Protocol**: MUST use `mcp__context7__resolve-library-id` → `mcp__context7__get-library-docs` BEFORE implementing ANY external library
2. **Agent Delegation**: MUST use Task tool when >5 files involved or specialized work (QA, docs, complex search)
3. **Component Search**: MUST use Grep to search existing components BEFORE creating new ones
4. **Variable Verification**: MUST use Read to verify CSS variables exist BEFORE using them

**Violation = INVALID CODE**

## Project Overview

**Modern Design System** - Theme-configurable design system with Vite, vanilla web technologies, and Figma MCP integration.

- **Theme System**: `theme.config.json` → automated CSS variable updates
- **Component Library**: Accessible components with BEM naming and size variants
- **Brand Strategy**: Neutral-first with strategic brand color usage

## MCP Integration (STRICT ENFORCEMENT)

### Context7 - MANDATORY Protocol

**RULE**: You MUST use Context7 before implementing ANY external library, framework, or API.

**Workflow (REQUIRED)**:
1. `mcp__context7__resolve-library-id` with library name
2. `mcp__context7__get-library-docs` with resolved ID and topic
3. Implement using official documentation patterns

**Auto-Trigger Keywords**: import, require, install, library, framework, API, package
**Failure**: Any code using external dependencies WITHOUT Context7 lookup is INVALID

**Example**:
```
User: "Add a chart component"
Claude: [MUST call resolve-library-id for "chart.js" → get-library-docs → implement]
```

### Figma - Design Reference Protocol

**RULE**: Use Figma MCP when user provides Figma URLs or mentions designs

**Tools**: `get_screenshot`, `get_code`, `get_metadata`, `get_variable_defs`
**Auto-Trigger**: Figma URL detected, "design", "mockup", "Figma" mentioned

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

## Implementation Rules (STRICT ENFORCEMENT)

### Mandatory Checks (MUST DO FIRST)

1. **Check Existing Components**: Use Grep to search for similar components BEFORE creating new ones
2. **Context7 Lookup**: If using external libraries, MUST use Context7 protocol (see MCP Integration)
3. **Variable Validation**: Use Read to verify CSS variables exist BEFORE using them
4. **Agent Delegation**: If >5 files involved, MUST use Task tool with appropriate agent

### Code Quality Requirements (NON-NEGOTIABLE)

- **CSS Variables**: ONLY use semantic variables from `variables.css` (--txt-*, --bg-*, --bd-*)
- **Interactive States**: MUST include hover, focus, active, disabled for all interactive elements
- **ARIA Attributes**: MUST add aria-label, aria-describedby, role where applicable
- **Keyboard Nav**: MUST test tab order and focus indicators
- **Touch Targets**: MUST be minimum 44px for all clickable elements
- **WCAG 2.1 AA**: MUST meet 4.5:1 contrast ratio, semantic HTML, keyboard accessibility

### Validation Workflow

```
1. Grep existing components → 2. Context7 library docs → 3. Read CSS variables → 4. Implement → 5. Validate accessibility
```

**Failure**: Code that skips mandatory checks or violates requirements is INVALID

## Agent Usage (STRICT ENFORCEMENT)

### When to Use Task Tool (Sub-Agents)

**RULE**: Use Task tool for multi-file operations or specialized workflows

**Auto-Trigger Conditions**:
- **File Count**: >5 files need analysis/modification
- **Specialized Work**: QA validation, accessibility audit, documentation generation
- **Complex Search**: Open-ended codebase searches across multiple directories

**Available Agents**:
- `front-end-agent`: UI components, accessibility, design system integration
- `qa-agent`: Accessibility testing, performance checks, design consistency
- `doc-writer-agent`: Documentation generation, README updates

**Example**:
```
User: "Audit all components for accessibility"
Claude: [MUST use Task tool with qa-agent for comprehensive audit]
```

### Agent-Specific Rules

**front-end-agent**:
- MUST use Context7 before implementing external libraries
- MUST reference Figma designs when available
- MUST validate against design system variables

**qa-agent**:
- MUST check WCAG 2.1 AA compliance
- MUST verify design system consistency
- MUST test keyboard navigation and touch targets

**doc-writer-agent**:
- MUST keep docs synchronized with code changes
- MUST update component documentation when CSS changes
- MUST maintain CLAUDE.md accuracy

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
