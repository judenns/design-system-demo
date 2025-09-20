# Modern Design System

A clean, neutral design system built with modern web standards featuring Inter typography and strategic brand color usage.

## 🚀 Live Demo

- **[Design System Showcase](showcase.html)** - Complete design system documentation and component library
- **[Landing Page](index.html)** - Main project landing page
- **View locally**: Open `showcase.html` in your browser or use `python3 -m http.server 8000`

## 📚 Documentation

- **[Design System Overview](docs/design-system.md)** - design system reference with CSS architecture, component library.
- **[Figma MCP Integration Guide](docs/figma-mcp-guide.md)** - Complete Figma MCP integration guide

## 📁 Project Structure

```
design-system-demo/
├── index.html              # Landing page
├── showcase.html           # Component showcase (design system documentation)
├── assets/                 # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files
│   └── fonts/             # Font files
├── css/                   # Stylesheets
│   ├── reset.css          # CSS Reset (Andy Bell)
│   ├── variables.css      # Design tokens (customizable)
│   ├── pages/             # Page-specific styles
│   │   ├── index.css      # Landing page styles
│   │   └── showcase.css   # Component showcase styles
│   └── components/        # Component styles
│       ├── index.css      # Component imports
│       ├── buttons.css    # Button variants
│       ├── forms.css      # Form elements
│       ├── headings.css   # Typography components
│       ├── layout.css     # Layout utilities
│       └── utilities.css  # Helper classes
├── scripts/               # JavaScript files
│   └── main.js           # Main JavaScript
├── docs/                 # Documentation
│   ├── design-system.md  # Design system guide
│   └── figma-mcp-guide.md # Figma integration guide
├── .claude/              # Claude Code configuration
│   ├── agents/          # Specialized agent configurations
│   ├── settings.json    # Project MCP settings
│   └── settings.local.json # Local MCP overrides (ignored by git)
├── .gitignore           # Git ignore file
├── CLAUDE.md            # Claude Code project instructions
└── README.md            # This file
```

## 🎨 Design System

Modern, clean design system built with accessibility and usability in mind:

### Key Features

- **Customizable color system**: Semantic CSS variables that can be adapted to any brand
- **Flexible typography**: Variable font system easily replaceable for different projects
- **Streamlined components**: Essential UI elements (buttons, forms, layout utilities)
- **Consistent spacing**: Configurable rem-based spacing scale
- **Modern component styling**: Clean aesthetics with proper focus states and accessibility
- **BEM naming convention**: Structured CSS class naming for maintainability

See **[Design System Guide](docs/design-system.md)** for complete variable reference and usage guidelines.

## 🛠️ Development

### Adding New Components

1. **Choose the right CSS file** in `css/components/` based on component type:
   - Interactive elements → `buttons.css` or `forms.css`
   - Text content → `headings.css`
   - Layout utilities → `layout.css`
   - Helper classes → `utilities.css`

2. **Follow design principles**:
   - Use semantic color variables that can be customized per project
   - Implement proper hover, focus, and disabled states
   - Ensure WCAG 2.1 AA accessibility compliance
   - Use BEM naming convention
   - Include responsive behavior

3. **Add JavaScript logic** in `scripts/` if needed
4. **Update showcase.html** to showcase the component

### CSS Architecture

Modular CSS structure for better maintainability:

```
css/
├── reset.css              # Modern CSS reset
├── variables.css          # Design tokens (customizable typography, colors, spacing)
├── pages/                 # Page-specific styles
│   ├── index.css          # Landing page styles
│   └── showcase.css       # Component showcase styles
└── components/            # Reusable component styles
    ├── index.css          # Component imports (loaded in HTML)
    ├── buttons.css        # Button variants with modern styling
    ├── forms.css          # Form elements with icon integration
    ├── headings.css       # Typography components (simplified)
    ├── layout.css         # Layout utilities (simplified)
    └── utilities.css      # Essential helper classes (simplified)
```

**Benefits**:
- 🔧 **Maintainable**: Each component type is isolated
- 📦 **Modular**: Components can be loaded independently
- 🎯 **Organized**: Clear separation between pages and components
- 🚀 **Scalable**: Easy to add new pages with dedicated CSS
- ✨ **Template-Ready**: Simplified and streamlined for any project

### JavaScript Structure

- **main.js**: Application initialization and utilities
- Modular approach for scalability
- ES6+ features and modern practices


## 🔄 Figma MCP Integration

This project showcases Claude Code's powerful Figma MCP integration, enabling seamless design-to-development workflows with pixel-perfect accuracy.

### Quick Start

Transform your Figma designs into production-ready code with simple natural language commands:

```
"Show me the button component from Figma"
"Generate CSS for this card component using our design system"
"Extract all color variables from our Figma design tokens"
"Implement this hero section with responsive behavior"
```

### Key Features

- **🎯 Direct Figma Access**: View screenshots, extract metadata, and generate code directly from Figma
- **⚡ Design Token Sync**: Automatically sync Figma variables with CSS custom properties
- **🔧 Smart Code Generation**: Generate HTML/CSS that follows your project's patterns and conventions
- **📱 Responsive Implementation**: Create mobile-first layouts based on Figma responsive designs
- **🎨 Component Extraction**: Convert Figma components to production-ready code with accessibility built-in

### Available MCP Tools

| Tool | Purpose | Example Usage |
|------|---------|---------------|
| `get_screenshot` | View Figma designs | Screenshot of specific components or frames |
| `get_code` | Generate implementation | CSS, HTML, React code from Figma components |
| `get_metadata` | Extract specifications | Colors, spacing, typography, dimensions |
| `get_variable_defs` | Access design tokens | Figma variables → CSS custom properties |

### Documentation-First Workflow

**Context7 MCP Integration** ensures reliable, current code generation:

1. **📚 Get Latest Docs** - Context7 fetches up-to-date, version-specific documentation
2. **🎨 View Figma Design** - Extract visual specifications and requirements
3. **✅ Generate Verified Code** - All APIs and patterns validated against official documentation
4. **🔧 Adapt to System** - Transform to use project's design system variables

**Result**: Zero hallucinated APIs, zero outdated code, 100% reliable implementation.

### Integration Benefits

- **Design Accuracy**: Pixel-perfect implementation with exact measurements and colors
- **Speed**: Reduce design handoff time from hours to minutes
- **Consistency**: Ensure design system compliance across all implementations
- **Collaboration**: Bridge the gap between designers and developers
- **Quality**: Maintain design fidelity while following development best practices

### Complete Documentation

For detailed setup instructions, workflow examples, troubleshooting, and advanced usage patterns, see the complete guide:

**📖 [Figma MCP Integration Guide](docs/figma-mcp-guide.md)**

This comprehensive documentation covers:
- Step-by-step setup and configuration
- All four MCP tools with detailed examples
- Complete design-to-code workflow demonstrations
- Advanced usage patterns and best practices
- Troubleshooting common issues
- Integration with this project's design system

## 🤖 Specialized Agents

This project uses 4 specialized Claude Code agents that work together to maintain consistency and quality:

### 🎨 Front-End Agent
**Documentation-first development** - Uses Context7 to get up-to-date documentation before any code generation. NO hallucinated APIs, NO outdated patterns. Ensures design system consistency with verified, current code.

### 🔗 Figma Integration Agent
**Handles Figma MCP workflows** - Extracts designs, syncs design tokens, and maintains pixel-perfect consistency between Figma and code.

### 📝 Doc-Writer Agent
**Maintains all documentation** - Updates design system docs, creates component examples, and keeps guides current.

### ✅ QA Agent
**Validates quality standards** - Checks accessibility, performance, design system compliance, and responsive behavior.

### How to Use

**Natural Language** - Just describe what you need:
```
"Create a pricing card from the Figma design"
"Update the color variables to match Figma"
"Document the new search component"
"Check if this component meets accessibility standards"
```

**Agent Coordination** - Agents work together automatically:
- **Design → Code**: Figma Integration Agent + Front-End Agent
- **Quality → Docs**: QA Agent + Doc-Writer Agent
- **Complete Workflow**: All agents collaborate as needed

The agents automatically maintain your design system standards, coding conventions, and quality requirements.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Andy Bell's Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)
- [Tailwind CSS](https://tailwindcss.com/) for color palette inspiration
- Modern web development best practices
