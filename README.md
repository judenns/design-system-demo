# Company Design System - Project Template

Your organization's design system pre-configured and ready to use. Clone this template to start any project - websites, landing pages, SPAs, prototypes - with brand guidelines built in.

> **What's included**: Brand colors, typography, spacing, and UI components following company standards. Just configure and build.

## 🚀 Quick Start Guide

### Step 1: Clone & Setup

```bash
# Clone this template
git clone https://github.com/judenns/design-system-demo.git my-project-name
cd my-project-name

# Optional: Point to your own repository
git remote set-url origin https://github.com/yourusername/my-project-name.git

# Install dependencies
npm install
```

### Step 2: Start Development

```bash
# Start development server (opens at http://localhost:5173)
npm run dev

# Or view component showcase first
npm run dev:style
```

### Step 3: Customize Theme (Optional)

```bash
# 1. Edit theme.config.json with your brand settings
# 2. Apply changes
npm run theme

# 3. Restart dev server to see changes
npm run dev
```

### Step 4: Add MCP Servers (Optional - for Claude Code users)

```bash
# Context7 - Official documentation access
claude mcp add --transport http context7 https://mcp.context7.com/mcp

# Figma MCP - Design-to-code conversion
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

## 📋 Useful Commands

### Development
```bash
npm run dev              # Start dev server (localhost:5173)
npm run dev:host         # Start dev server with network access
npm run dev:https        # Start dev server with HTTPS
npm run dev:style        # Open component showcase
npm run dev:theme        # Apply theme + open showcase
```

### Production
```bash
npm run build            # Build for production (outputs to dist/)
npm run build:watch      # Build and watch for changes
npm run build:analyze    # Build with bundle analyzer
npm run build:theme      # Apply theme + build
npm run preview          # Preview production build
npm run preview:https    # Preview with HTTPS
```

### Theme & Utilities
```bash
npm run theme            # Generate CSS variables from theme.config.json
npm run clean            # Clean build cache and dependencies
```

**See all available commands**: Run `npm run` in your terminal

## 🎨 Customize for Your Project

**Quick theme updates**: Edit `theme.config.json` → run `npm run theme` → all styles update automatically.

### What You Can Customize

Open `theme.config.json` to adjust:
- **Brand Color** - Your primary brand color
- **Colors** - Text, backgrounds, borders
- **Typography** - Fonts, sizes, line heights
- **Spacing** - Consistent spacing scale
- **Components** - Button sizes, form inputs, etc.

### How to Apply Changes

```bash
# 1. Edit theme.config.json with your brand values
# 2. Run theme generator
npm run theme

# All CSS variables update automatically
# All components inherit new theme instantly
```

**Need more control?** Edit CSS files directly in `style/` folder. See [Theme Customization Guide](docs/theme-guide.md) for advanced options.

## 🤖 Working with Claude Code (Optional)

Use AI to speed up development. Claude Code has specialized agents that understand your design system and help build components, check quality, and maintain documentation.

### Available Agents

Claude Code automatically activates the right agent based on your request:

**🎨 Front-End Agent** - Creates UI components using your design system
```
"Create a hero section with heading, subtitle, and CTA button"
"Build a responsive navigation bar"
"Add a three-column pricing table"
```

**🎯 Figma Integration Agent** - Converts Figma designs to code
```
"Convert this Figma button design to CSS" [paste Figma URL]
"Extract color tokens from our Figma design system"
"Generate code matching this Figma component"
```

**📚 Doc-Writer Agent** - Creates and updates documentation
```
"Document the new card component variants"
"Create usage examples for the button component"
"Update the theme configuration guide"
```

**✅ QA Agent** - Validates quality and accessibility
```
"Check accessibility compliance for this page"
"Audit performance and suggest optimizations"
"Validate that all components use CSS variables correctly"
```

**⚙️ General-Purpose Agent** - Handles complex multi-step tasks
```
"Set up a complete landing page with hero, features, and CTA"
"Optimize the build configuration"
"Research best practices for form validation"
```

### Setup MCP Servers

**Option 1 - Let Claude do it**:
```
"Install Context7 MCP server"
"Set up Figma MCP integration"
```

**Option 2 - Manual installation**:
```bash
# Context7 - Official documentation access
claude mcp add --transport http context7 https://mcp.context7.com/mcp

# Figma MCP - Design-to-code conversion
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

## 📁 Project Structure

```
my-project/
├── index.html              # Your main page (edit this)
├── theme.config.json       # Theme settings (customize here)
├── style/
│   ├── variables/          # Generated CSS variables (auto-updated)
│   ├── components/         # Pre-built UI components
│   └── pages/              # Page-specific styles
├── scripts/                # Build scripts
└── docs/                   # Documentation
```

**Where to work**:
- Edit HTML files in root folder (`index.html`, etc.)
- Customize theme in `theme.config.json`
- Add page styles in `style/pages/`
- Use components from `style/components/`

## 💡 What Can You Build?

This template works for any web project:

- **Landing Pages** - Product launches, marketing campaigns
- **Prototypes** - Interactive designs for user testing
- **Presentations** - Beautiful slides and demos
- **Documentation Sites** - Component libraries, style guides
- **Single Page Apps** - Simple web applications
- **Microsites** - Event pages, promotional sites

All with your company's design system built in.

## 📚 Documentation

### Essential Guides

- **[Design System Guide](docs/design-system.md)** - Complete system architecture, components, and usage examples
- **[Theme Customization Guide](docs/theme-guide.md)** - Customize colors, fonts, and components for your brand
- **[Figma MCP Guide](docs/figma-mcp-guide.md)** - Design-to-code workflow with Figma integration

### Quick Help

**View components**: Run `npm run dev:style` to see all available components in action

**Ask Claude Code**:
```
"Show me how to use the button component"
"What CSS variables are available for colors?"
"How do I customize typography?"
```

## 🛠 Technical Details

**What's inside**:
- Vanilla HTML, CSS, JavaScript (no framework required)
- Vite for fast development and building
- CSS Variables for theming
- BEM naming for CSS organization

**No runtime dependencies** - Fast, simple, and easy to customize.
