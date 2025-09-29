# Modern Design System - Starter Template

Production-ready design system template with Claude Code + MCP integration for seamless design-to-code workflows.

> **📖 Note**: This project uses reference-based documentation. Commands, paths, and values reference source files (package.json, theme.config.json, etc.) rather than hard-coded examples. Always check the actual files for current values.

## 🚀 Quick Start

```bash
# Clone & Rename
git clone https://github.com/judenns/design-system-demo.git my-design-system
cd my-design-system

# Update remote origin (optional - for your own repo)
git remote set-url origin https://github.com/yourusername/my-design-system.git

# Install & Start
npm install
npm run dev                 # http://localhost:5173
npm run dev:style           # Component showcase
```

## 📋 Development Commands

See `package.json` → `scripts` for the complete command list. Run `npm run` to view all available commands.

**Command Categories**:
- **Development**: `dev`, `dev:*` - Development servers and workflows
- **Production**: `build`, `build:*`, `preview` - Production builds and previews
- **Theme**: `theme`, `*:theme` - Theme configuration and automation
- **Utilities**: Other helper scripts

**Quick Reference**:
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run theme        # Apply theme configuration
```

## 🎨 Theme Configuration - Instant Brand Adaptation

**How it works**: `theme.config.json` → `npm run theme` → All CSS variables updated automatically

### Current Configuration

View the active theme: `cat theme.config.json`

**Theme Structure Reference**:
```bash
# View current theme settings
cat theme.config.json

# Check generated CSS variables
cat style/variables/variables.css

# Apply theme changes
npm run theme
```

### Customizable Properties

See `theme.config.json` for available configuration options:
- **Brand**: Brand color and identity
- **Colors**: Text, background, border color palette
- **Typography**: Font families, sizes, scales
- **Components**: Component-specific sizing and styling

**Theme Examples**: See [Theme Guide](docs/theme-config-guide.md) for preset examples and advanced customization.

### Workflow

1. Edit `theme.config.json` with your values
2. Run `npm run theme` to apply changes
3. All CSS variables in `style/variables/` auto-update
4. All components automatically inherit new theme

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
claude mcp add --transport http context7 https://mcp.context7.com/mcp

# Figma MCP Local Server  - Design Integration
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

## 🤖 Specialized Agents

Claude Code automatically activates the right agent based on your request. Each agent follows a specific workflow to ensure quality and consistency.

### 🎨 Front-End Agent
**What it does**: Creates UI components following your design system patterns
**Workflow**:
1. **Context7 Lookup** (MANDATORY) - Gets latest documentation from official sources
2. **Discover System** - Finds existing CSS variables and components
3. **Figma Reference** - Uses design screenshots/metadata if available
4. **Implement** - Creates code using BEM naming and CSS variables
5. **Validate** - Ensures accessibility and responsive design

```bash
"Create a card component with hover effects"
"Build a responsive navigation bar using our design tokens"
"Add a pricing table with three tiers"
```

### 🎯 Figma Integration Agent
**What it does**: Converts Figma designs into code that matches your design system
**Workflow**:
1. **Extract Design** - Gets screenshots, measurements, and design tokens from Figma
2. **Check System** - Compares with existing CSS variables and theme config
3. **Propose Updates** - Suggests theme.config.json changes instead of direct CSS edits
4. **Generate Code** - Creates components using your established patterns
5. **Map Components** - Links Figma designs to code components

```bash
"Convert this Figma button to CSS"
"Extract color tokens and update our theme config"
"Generate code from selected Figma frame"
```

### 📚 Doc-Writer Agent
**What it does**: Keeps documentation current with your codebase changes
**Workflow**:
1. **Discover Changes** - Scans for new components or system updates
2. **Verify Examples** - Tests that all code examples actually work
3. **Update Docs** - Syncs documentation with current codebase
4. **Simple Language** - Uses clear explanations for all skill levels
5. **Version Check** - Ensures all references match current setup

```bash
"Update the component documentation with new button variants"
"Create usage examples for the theme configuration system"
"Document the MCP integration workflow"
```

### ✅ QA Agent
**What it does**: Validates code quality, accessibility, and design system consistency
**Workflow**:
1. **System Scan** - Uses tools to find potential issues in CSS/HTML
2. **Theme Validation** - Checks theme.config.json sync with CSS variables
3. **Accessibility Audit** - Validates WCAG compliance and keyboard navigation
4. **Performance Check** - Reviews load times and asset optimization
5. **Standards Compliance** - Ensures BEM naming and component consistency

```bash
"Check accessibility compliance for the new form components"
"Audit performance issues and suggest optimizations"
"Validate that all components use CSS variables correctly"
```

### ⚙️ General-Purpose Agent
**What it does**: Handles complex multi-step tasks and research
**Workflow**:
1. **Task Analysis** - Breaks down complex requests into steps
2. **Research** - Gathers information using Context7 and web search
3. **Plan Creation** - Develops structured approach
4. **Implementation** - Executes plan using appropriate tools
5. **Validation** - Verifies results and suggests improvements

```bash
"Research and implement user authentication"
"Optimize build configuration for better performance"
"Set up automated testing for components"
```

## 📁 Project Structure

**Discover Current Structure**:
```bash
# View directory structure
tree -L 2               # Unix/Mac
dir /s /b              # Windows

# List CSS organization
ls -R style/

# Find all HTML pages
ls *.html

# Check documentation
ls docs/
```

**Key Directories**:
- `style/` - All CSS files (use `ls -R style/` to explore)
  - `variables/` - Design tokens (auto-generated from `theme.config.json`)
  - `components/` - UI components (check `components.css` for imports)
  - `pages/` - Page-specific styles
- `scripts/` - Automation scripts (check `package.json` scripts for usage)
- `docs/` - Documentation and guides
- `.claude/` - Claude Code configuration

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

**Available Guides**: Check `docs/` directory for current documentation

```bash
# List all documentation
ls docs/

# View specific guide
cat docs/[guide-name].md
```

**Common Guides**:
- Design system and component reference
- Figma MCP integration workflow
- Theme configuration and customization
- Development workflows and best practices

## 🛠 Architecture

**Technology Stack**: See `package.json` for current versions and dependencies

**Core Principles**:
- Pure vanilla HTML5, CSS3, JavaScript (zero runtime dependencies)
- Modern build system (check `package.json` → `devDependencies`)
- Token-based design system with automated theme updates
- BEM methodology for consistent CSS architecture

**Verify Setup**:
```bash
# Check dependencies
cat package.json | grep dependencies

# View build configuration
cat vite.config.js  # if exists

# Check for runtime dependencies (should be empty)
cat package.json | grep -A5 '"dependencies"'
```
