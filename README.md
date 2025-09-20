# Modern Design System

A clean, neutral design system built with modern web standards featuring Inter typography and strategic brand color usage.

## Overview

Modern design system showcase featuring:
- Token-based design system with CSS custom properties
- Streamlined, accessible UI components using BEM methodology
- Vanilla HTML5, CSS3, JavaScript (no build system complexity)
- Brand color (#000BFF) used strategically for primary actions

## Essential Commands

```bash
# Development
npm run dev                 # Start dev server (localhost:3000)
npm run build              # Build for production
npm run preview            # Preview production build

# Alternative development
python3 -m http.server 8000  # Quick local server
```

## Documentation

- **[Design System Guide](docs/design-system.md)** - Complete design system reference
- **[Figma MCP Integration](docs/figma-mcp-guide.md)** - Design-to-code workflow guide

## Project Structure

```
design-system-demo/
├── index.html              # Landing page
├── design-system.html      # Component showcase
├── package.json            # Dependencies and scripts
├── css/                    # Stylesheets
│   ├── reset.css          # CSS reset
│   ├── variables.css      # Design tokens
│   ├── main.css           # Base styles
│   ├── design-system.css  # Showcase styles
│   └── components/        # Component styles
│       ├── index.css      # Component imports
│       ├── buttons.css    # Button variants
│       ├── forms.css      # Form elements
│       ├── headings.css   # Typography
│       ├── layout.css     # Layout utilities
│       └── utilities.css  # Helper classes
├── scripts/               # JavaScript
│   └── main.js           # Main JS
├── docs/                  # Documentation
├── .claude/              # Claude Code config
├── CLAUDE.md            # Project instructions
└── README.md            # This file
```

## Figma MCP Integration

Transform Figma designs into production-ready code with natural language:

```
"Show me the button component from Figma"
"Generate CSS using our design system variables"
"Extract color tokens from Figma"
```

**Available Tools:**
- `get_screenshot` - View Figma designs
- `get_code` - Generate implementation code
- `get_metadata` - Extract design specifications
- `get_variable_defs` - Access design tokens

**Documentation-First Workflow:**
Context7 MCP ensures reliable code generation with up-to-date documentation, zero hallucinated APIs.

See **[Figma MCP Integration Guide](docs/figma-mcp-guide.md)** for complete setup and usage.

## MCP Servers

**Context7** - Documentation-first development:
- Fetches up-to-date, version-specific documentation from official sources
- Validates APIs and patterns before code generation
- Ensures zero hallucinated code, zero outdated patterns

**Figma MCP** - Design-to-code workflows:
- Direct Figma access for screenshots, metadata, code generation
- Design token synchronization with CSS custom properties
- Pixel-perfect implementation with accessibility built-in

## Specialized Agents

**Front-End Agent** - Uses Context7 for verified, current code generation
**Figma Integration Agent** - Handles MCP workflows and design token sync
**Doc-Writer Agent** - Maintains documentation and component examples
**QA Agent** - Validates accessibility, performance, and design system compliance

**Usage:** Natural language commands automatically activate appropriate agents:
```
"Create a component from Figma" → Figma + Front-End agents
"Update documentation" → Doc-Writer agent
"Check accessibility" → QA agent
```
