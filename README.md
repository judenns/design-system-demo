# template-0

A demo for testing figma mcp with claude code using theme-3 design.

## 📁 Project Structure

```
template-0/
├── index.html              # Main HTML file
├── assets/                 # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files
│   └── fonts/             # Font files
├── css/                   # Stylesheets
│   ├── reset.css          # CSS Reset (Andy Bell)
│   ├── variables.css      # CSS Custom Properties
│   ├── components/        # Component styles
│   │   └── components.css # UI Components
│   └── main.css           # Main styles
├── scripts/               # JavaScript files
│   └── main.js           # Main JavaScript
├── docs/                 # Documentation
│   ├── design-system.md  # Design system guide
│   └── components.md     # Components guide
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## 🎨 Design System

This project features a comprehensive, scalable design system built on CSS custom properties:

### Key Features

- **Two-layer color system**: Primitive color scales (50-900 shades) and semantic variables for consistent usage
- **Typography system**: 10 predefined font sizes with 6 weight options
- **Spacing scale**: Consistent rem-based spacing from xs (0.5rem) to 4xl (7.5rem)
- **Component library**: Pre-built, accessible UI components (buttons, cards, forms, alerts, badges)
- **BEM naming convention**: Structured CSS class naming for maintainability

See `docs/design-system.md` for complete variable reference and usage guidelines, and `docs/components.md` for component implementation examples.

## 🛠️ Development

### Adding New Components

1. **Choose the right CSS file** in `css/components/` based on component type:
   - Interactive elements → `buttons.css` or `forms.css`
   - Content containers → `cards.css`
   - Feedback/status → `alerts.css`
   - Layout utilities → `layout.css`

2. **Follow established patterns**: BEM naming, accessibility, responsive design
3. **Add JavaScript logic** in `scripts/` if needed
4. **Update documentation** in `docs/design-system.md`

### CSS Architecture

Modular CSS structure for better maintainability:

```
css/
├── reset.css              # Modern CSS reset
├── variables.css           # Design tokens and CSS custom properties
├── main.css               # Base styles and page-specific layout
└── components/
    ├── index.css          # Component imports (loaded in HTML)
    ├── buttons.css        # Button variants and states
    ├── forms.css          # Form elements (input, select, checkbox, etc.)
    ├── cards.css          # Card variants (basic, feature, product, etc.)
    ├── alerts.css         # Alerts, badges, status indicators
    ├── search.css         # Search components and variants
    ├── headings.css       # Section headings, breadcrumbs
    ├── layout.css         # Layout utilities (grid, flex, containers)
    └── utilities.css      # Helper classes and utilities
```

**Benefits**:
- 🔧 **Maintainable**: Each component type is isolated
- 📦 **Modular**: Components can be loaded independently
- 🎯 **Organized**: Easy to find and modify specific styles
- 🚀 **Scalable**: New components follow established patterns

### JavaScript Structure

- **main.js**: Application initialization and utilities
- Modular approach for scalability
- ES6+ features and modern practices

## 📚 Documentation

- `docs/design-system.md` - **Complete design system reference** with CSS architecture, component library, and development workflow
- `docs/components.md` - Component usage examples and customization guide
- `docs/figma-mcp-guide.md` - **Complete Figma MCP integration guide**

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
**Enforces design system consistency** - Ensures all components use established CSS variables, follow BEM naming, and integrate with Figma designs.

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
