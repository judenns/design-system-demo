# Modern Design System - Starter Template

Production-ready design system template with Claude Code + MCP integration for seamless design-to-code workflows.

## 🚀 Quick Start

```bash
# 1. Clone & Install
git clone <repo-url>
cd design-system-demo
npm install

# 2. Start Development
npm run dev                 # http://localhost:3000
npm run dev:design         # Component showcase
```

## 🔧 MCP Setup (Optional)

### Context7 - Documentation Server
```bash
# Install globally
npm install -g @context7/mcp-server

# Add to .claude/settings.json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["@context7/mcp-server"]
    }
  }
}
```

### Figma MCP - Design Integration
```bash
# Install globally
npm install -g @figma/mcp-server

# Get Figma token: Account Settings > Personal Access Tokens

# Add to .claude/settings.local.json (gitignored)
{
  "mcpServers": {
    "figma-dev-mode-mcp-server": {
      "command": "npx",
      "args": ["figma-dev-mode-mcp-server"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "your-token"
      }
    }
  }
}
```

## 📋 Essential Commands

```bash
# Development
npm run dev                 # Dev server
npm run dev:host           # External access
npm run dev:https          # HTTPS dev

# Production
npm run build              # Build to dist/
npm run preview            # Preview build

# Theme
npm run theme              # Apply theme.config.json
npm run clean              # Clean artifacts
```

## Theme Configuration

Adapt this template to any project context with `theme.config.json`:

### Corporate Website
```json
{
  "colors": {
    "txtBrand": "#1E40AF",     // Corporate blue
    "bgBrand": "#1E40AF"
  }
}
```

### SaaS Dashboard
```json
{
  "colors": {
    "txtBrand": "#7C3AED",     // Modern purple
    "bgDefault": "#FAFAFA"     // Soft background
  }
}
```

### Marketing Landing
```json
{
  "colors": {
    "txtBrand": "#DC2626",     // Action red
    "typography": {
      "headings": { "h1": "5rem" }  // Large headlines
    }
  }
}
```

Run `npm run theme` to instantly apply your brand. See **[Theme Configuration Guide](docs/theme-config-guide.md)** for all options.

## Documentation

- **[Design System Guide](docs/design-system.md)** - Complete design system reference
- **[Figma MCP Integration](docs/figma-mcp-guide.md)** - Design-to-code workflow guide
- **[Theme Configuration Guide](docs/theme-config-guide.md)** - Detailed theme customization

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

### Setting up MCP Servers with Claude Code

#### Adding Context7 MCP Server

1. **Install Context7 MCP**:
```bash
npm install -g @context7/mcp-server
```

2. **Configure in Claude Code**:
   - Open Claude Code settings (`.claude/settings.json` or `.claude/settings.local.json`)
   - Add Context7 to your MCP servers:
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["@context7/mcp-server"],
      "env": {}
    }
  }
}
```

3. **Usage in Claude Code**:
```bash
# Get documentation for any library
"Get React hooks documentation using Context7"
"Show me the latest Next.js routing patterns"
"Find CSS Grid examples from MDN"
```

#### Adding Figma MCP Server

1. **Install Figma MCP**:
```bash
npm install -g @figma/mcp-server
```

2. **Get Figma Access Token**:
   - Go to Figma → Account Settings → Personal Access Tokens
   - Generate a new token with read access
   - Copy the token value

3. **Configure in Claude Code**:
   - Add Figma MCP to `.claude/settings.local.json` (for security):
```json
{
  "mcpServers": {
    "figma-dev-mode-mcp-server": {
      "command": "npx",
      "args": ["figma-dev-mode-mcp-server"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "your-figma-token-here"
      }
    }
  }
}
```

4. **Usage in Claude Code**:
```bash
# Extract designs from Figma
"Show me the button component from Figma file [URL]"
"Get the design tokens from our Figma design system"
"Generate CSS from this Figma component"
```

#### Best Practices

- **Security**: Always store API tokens in `.claude/settings.local.json` (gitignored)
- **Workflow**: Use Context7 for documentation → Figma for designs → Implementation
- **Validation**: Let Context7 verify APIs before code generation
- **Consistency**: Sync Figma tokens with CSS variables regularly

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
