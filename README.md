# Modern Design System

A clean, neutral design system built with modern web standards featuring Inter typography and strategic brand color usage.

## Overview

Modern design system showcase featuring:
- **Token-based system**: CSS custom properties with semantic variables
- **Component library**: Accessible UI components using BEM methodology
- **Vite build system**: Fast development with hot reload and optimized production builds
- **Brand color**: Strategic use of brand blue (#000BFF) for primary actions
- **Documentation-first**: Context7 MCP integration for reliable, up-to-date patterns

## Quick Start

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev                 # http://localhost:3000
npm run dev:design         # Opens design system showcase

# Production build
npm run build              # Build to dist/
npm run preview            # Preview production build

# Additional development options
npm run dev:host           # External access
npm run dev:https          # HTTPS development
npm run clean              # Clean build artifacts
```

## Documentation

- **[Design System Guide](docs/design-system.md)** - Complete design system reference
- **[Figma MCP Integration](docs/figma-mcp-guide.md)** - Design-to-code workflow guide

## Project Structure

```
design-system-demo/
├── index.html              # Landing page
├── design-system.html      # Component showcase/documentation
├── vite.config.js          # Vite build configuration
├── package.json            # Dependencies and scripts
├── style/                  # Stylesheets (foundation → components → pages)
│   ├── reset.css          # CSS reset foundation
│   ├── global.css         # Global CSS setup and defaults
│   ├── variables/         # Design tokens (modular)
│   │   ├── variables.css  # Import all token files
│   │   ├── colors.css     # Color system
│   │   ├── typography.css # Typography tokens
│   │   ├── spacing.css    # Spacing & layout tokens
│   │   └── breakpoints.css# Responsive breakpoints
│   ├── components/        # Component library
│   │   ├── components.css # Component imports
│   │   ├── buttons.css    # Interactive elements
│   │   ├── forms.css      # Form controls
│   │   ├── headings.css   # Typography components
│   │   ├── layout.css     # Layout utilities
│   │   └── utilities.css  # Helper classes
│   └── pages/             # Page-specific styles
│       ├── design-system.css # Showcase page styles
│       └── index.css      # Landing page styles
├── scripts/               # JavaScript
│   └── main.js           # Core functionality
├── assets/                # Static assets (fonts, icons, images)
├── docs/                  # Documentation
│   ├── design-system.md   # Component reference
│   └── figma-mcp-guide.md # Figma integration guide
├── .claude/              # Claude Code configuration
├── CLAUDE.md            # Project instructions for Claude
├── dist/                 # Production build output (generated)
└── README.md            # This file
```

## Claude Code Integration

This project showcases **Claude Code** (claude.ai/code) capabilities with **MCP (Model Context Protocol)** integrations:

### Design-to-Code Workflow
Transform Figma designs into production-ready code using natural language:

```bash
"Show me the button component from Figma"
"Generate CSS using our design system variables"
"Extract design tokens and sync with CSS"
```

### MCP Servers

**🎨 Figma MCP** - Design-to-code workflows:
- `get_screenshot` - View Figma designs
- `get_code` - Generate implementation code
- `get_metadata` - Extract design specifications
- `get_variable_defs` - Access design tokens

**📚 Context7** - Documentation-first development:
- Up-to-date, version-specific documentation from official sources
- Validates APIs and patterns before code generation
- Ensures zero hallucinated code, zero outdated patterns

### Essential Dependencies

**Ultra-Clean Package Structure**:
- **Only dependency**: `vite@^7.1.6` (dev dependency)
- **Zero runtime dependencies**: Pure vanilla HTML, CSS, JavaScript
- **Optimized bundle**: All platform-specific binaries are optional and only installed as needed

### Specialized Agents

Natural language commands automatically activate appropriate agents:

- **Front-End Agent**: Creates components using Context7 for verified patterns
- **Figma Integration Agent**: Handles design-to-code workflows and token sync
- **Doc-Writer Agent**: Maintains documentation and component examples
- **QA Agent**: Validates accessibility, performance, and design system compliance

### Usage Examples
```bash
"Create a component from Figma" → Figma + Front-End agents
"Update documentation" → Doc-Writer agent
"Check accessibility compliance" → QA agent
"Optimize performance" → Front-End + QA agents
```

See **[Figma MCP Integration Guide](docs/figma-mcp-guide.md)** for complete setup and usage.
