# Modern Design System - Starter Template

Production-ready design system template with Claude Code + MCP integration for seamless design-to-code workflows.

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/judenns/design-system-demo.git
cd design-system-demo
npm install

# Start Development
npm run dev                 # http://localhost:5173
npm run dev:design          # Component showcase
```

## 📋 Development Commands

```bash
# Development
npm run dev                 # Dev server (http://localhost:5173)
npm run dev:host           # External access
npm run dev:https          # HTTPS dev server
npm run dev:design         # Open component showcase

# Production
npm run build              # Build to dist/
npm run build:watch        # Watch mode build
npm run preview            # Preview build

# Theme
npm run theme              # Apply theme.config.json
npm run dev:theme          # Apply theme and preview
npm run build:theme        # Apply theme and build
npm run clean              # Clean artifacts
```

## 🎨 Theme Configuration - Instant Brand Adaptation

**How it works**: `theme.config.json` → `npm run theme` → All CSS variables updated automatically

### Quick Start
```json
{
  "brand": {
    "color": "#E54D2E"          // Your brand color
  },
  "colors": {
    "text-dark": "#1f1f1f",     // Heading text
    "bg-default": "#ffffff"      // Background
  },
  "typography": {
    "headings": { "h1": "4.5rem" } // Custom sizing
  }
}
```

### Usage Examples
```bash
# Apply your theme
npm run theme

# Different contexts
"color": "#1E40AF"  # Corporate blue
"color": "#E54D2E"  # Marketing red
"color": "#7C3AED"  # SaaS purple
```

**What gets updated**: All CSS custom properties in `style/variables/` match your theme instantly. Colors, typography, component styles - everything stays consistent across all components.

See [Theme Guide](docs/theme-config-guide.md) for advanced customization.

## 🔧 MCP Integration - Supercharge Your Workflow

**Why MCP?** Transform natural language into production code with zero hallucinations:
- **Context7**: Access latest docs from official sources (React, Next.js, Tailwind, etc.)
- **Figma MCP**: Convert designs to code instantly with design token sync
- **Claude Code**: Natural language → validated patterns → clean implementation

### Setup with Claude Code (No Tokens Required)

```bash
# Let Claude install and configure MCP servers for you
"Install Context7 MCP server and configure it"
"Set up Figma MCP integration with my token"
"Help me configure MCP servers in Claude settings"
```

**Manual Setup** (if preferred):

```bash
# Context7 - Documentation Server
npm install -g @context7/mcp-server

# Figma MCP - Design Integration
npm install -g @figma/mcp-server
# Token: Figma → Account Settings → Personal Access Tokens
```

## 🤖 Specialized Agents

Claude Code automatically activates the right agent for your task:

**🎨 Front-End Agent** - Component development
```bash
"Create a card component with hover effects"
"Build a responsive navigation bar"
```

**🎯 Figma Integration Agent** - Design-to-code workflows
```bash
"Convert this Figma button to CSS"
"Sync design tokens from Figma to variables"
```

**📚 Doc-Writer Agent** - Documentation maintenance
```bash
"Update the component documentation"
"Generate usage examples"
```

**✅ QA Agent** - Quality assurance
```bash
"Check accessibility compliance"
"Audit performance issues"
```

**⚙️ General-Purpose Agent** - Complex multi-step tasks
```bash
"Research and implement authentication"
"Optimize build configuration"
```

## 📁 Project Structure

```
style/
├── reset.css & global.css     # Foundation
├── variables/                 # Design tokens
│   ├── colors.css            # Color system
│   ├── typography.css        # Type scale
│   └── spacing.css           # Spacing tokens
├── components/               # UI components
│   ├── buttons.css           # Button variants
│   ├── forms.css             # Form controls
│   └── layout.css            # Layout utilities
└── pages/                   # Page-specific styles

docs/                         # Guides and documentation
.claude/                     # Claude Code configuration
scripts/                     # Theme automation
```

## 🎯 Real-World Use Cases

### Context7 MCP - Documentation-First Development
```bash
# Get verified, up-to-date patterns
"Get the latest CSS Grid documentation"
"Show me React 19 hook patterns from official docs"
"Find accessibility best practices for buttons"

# Zero hallucinations - always current official docs
```

### Figma MCP - Design-to-Code Pipeline
```bash
# From Figma URL to production code
"Show me the header component from [figma-url]"
"Extract color tokens from our design system"
"Generate CSS matching this Figma button exactly"
"Sync spacing values between Figma and CSS variables"

# Perfect design-developer handoff
```

### Claude Code - Natural Language Interface
```bash
"Create a responsive dashboard layout using our variables"
"Add dark mode support to all components"
"Optimize this page for mobile accessibility"

# Multi-step tasks handled automatically
```

## 📚 Documentation

- **[Design System Guide](docs/design-system.md)** - Component reference
- **[Figma MCP Guide](docs/figma-mcp-guide.md)** - Design-to-code workflow
- **[Theme Configuration](docs/theme-config-guide.md)** - Customization options

## 🛠 Architecture

**Clean & Modern**:
- Pure vanilla HTML5, CSS3, JavaScript
- Vite 7.x build system with instant hot reload
- Zero runtime dependencies (only `vite` dev dependency)
- Token-based design system with automated theme updates
- BEM methodology for consistent CSS architecture
