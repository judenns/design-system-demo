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

1. Create component styles in `css/components/`
2. Add JavaScript logic in `scripts/`
3. Document usage in `docs/components.md`

### CSS Architecture

- **reset.css**: Modern CSS reset
- **variables.css**: Design tokens and CSS custom properties
- **components.css**: UI component styles
- **main.css**: Base styles and layout

### JavaScript Structure

- **main.js**: Application initialization and utilities
- Modular approach for scalability
- ES6+ features and modern practices

## 📚 Documentation

- `docs/design-system.md` - Design system guidelines and CSS variables reference
- `docs/components.md` - Component library documentation and usage examples
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

## 🤖 Claude Code Agents

Claude Code provides specialized agents to help with development tasks. For this project, we have the front-end-friend agent available:

### Front-End-Friend Agent

**What it does**: Specializes in front-end development tasks, including:
- Converting designs to HTML/CSS code
- Implementing responsive layouts
- Creating and styling UI components
- Optimizing front-end performance
- Suggesting accessibility improvements
- Resolving CSS styling issues

**When to use it**: When you need assistance with:
- Implementing design components
- Styling and layout challenges
- Responsive design implementation
- CSS troubleshooting
- Design system implementation

**How to use it**: Simply describe your front-end task or problem, and Claude will activate the front-end-friend agent when appropriate. For example:

```
"I need help creating a responsive navigation menu that follows our design system guidelines"

"Can you help me implement this card component according to the design?"

"I'm having trouble with the layout breaking on mobile devices"
```

### Working with the Front-End-Friend Agent

- Be specific about the component or feature you need help with
- Provide design references or screenshots when available
- Mention specific design system tokens or components to utilize
- Describe the responsive behavior you expect
- For complex components, break down the request into smaller parts

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
