# template-0

A modern, lightweight web application starter template featuring a comprehensive design system, reusable UI components, and best practices for web development. Built with semantic HTML5, modern CSS3 with custom properties, and vanilla JavaScript.

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local development server (optional but recommended)

### Installation

1. Clone or download this project
2. Open `index.html` in your browser, or
3. Use a development server:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js live-server
   npx live-server --port=3000

   # Using PHP
   php -S localhost:8000
   ```

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

### Color System

- **Primitive variables**: Complete color scales (50-900 shades) for:
  - Neutral palette (grays for UI elements)
  - Brand colors (primary blue scale)
  - Utility colors (success/green, warning/amber, error/red)
- **Semantic variables**: Purpose-driven color tokens for:
  - Text hierarchy (dark, default, light, brand, disabled)
  - Backgrounds (default, brand, light variations)
  - Borders (default, light, brand/focus states)

#### Color Variables List

**Text Colors:**
```css
--txt-dark: #2e4155;        /* Primary headings, bold text */
--txt-default: #5b647b;     /* Body text, regular content */
--txt-light: #7e879a;       /* Secondary text, subtitles */
--txt-brand: #6075a4;       /* Branded text, links */
--txt-brand-dark: #455376;  /* Dark branded text, hover states */
--txt-white: #ffffff;       /* Text on dark backgrounds */
--txt-success: var(--success-600); /* Success messages */
--txt-error: var(--error-600);     /* Error messages */
--txt-warning: var(--warning-600); /* Warning messages */
--txt-disable: var(--neutral-400); /* Disabled text */
```

**Background Colors:**
```css
--bg-default: #ffffff;           /* Default page background */
--bg-white: #ffffff;             /* White backgrounds, cards */
--bg-brand: #6075a4;             /* Primary brand background */
--bg-brand-light: var(--brand-100);    /* Light brand background */
--bg-brand-lightest: #f5f6f9;    /* Lightest brand background */
--bg-light: var(--neutral-50);   /* Light neutral background */
--bg-success: var(--success-600); /* Success background */
--bg-warning: var(--warning-600); /* Warning background */
--bg-error: var(--error-600);     /* Error background */
```

**Border Colors:**
```css
--bd-default: #cacdd3;         /* Default border color */
--bd-light: var(--neutral-200); /* Light border color */
--bd-dark: #a4a9b7;            /* Dark border color */
--bd-brand: #6075a4;           /* Brand border color */
--bd-error: var(--error-600);   /* Error border color */
--bd-success: var(--success-600); /* Success border color */
--bd-warning: var(--warning-600); /* Warning border color */
--bd-white: #ffffff;            /* White border color */
```

### Typography & Spacing

- **Typography system**: 10 predefined font sizes (h1-h6, default, large, small, caption, label)
- **Font weights**: 6 weight options (default to black)
- **Spacing scale**: Consistent rem-based spacing from xs (0.25rem) to 3xl (4rem)

#### Typography Variables List

**Font Families:**
```css
--heading-font: 'Playfair Display', Georgia, serif;
--body-font: 'Jost', system-ui, sans-serif;
--display-font: 'Playfair Display', Georgia, serif;
```

**Font Sizes:**
```css
--fs-h1: 6rem;      /* 96px - Main headings */
--fs-h2: 4.5rem;    /* 72px - Section headings */
--fs-h3: 3.5rem;    /* 56px - Subsection headings */
--fs-h4: 2.75rem;   /* 44px - Card titles */
--fs-h5: 2rem;      /* 32px - Small headings */
--fs-h6: 1.5rem;    /* 24px - Minimal headings */
--fs-default: 1.25rem; /* 20px - Body text */
--fs-large: 2rem;     /* 32px - Emphasized text */
--fs-small: 1rem;     /* 16px - Secondary text */
--fs-caption: 0.875rem; /* 14px - Captions, labels */
--fs-label: 1.125rem;  /* 18px - Form labels */
```

**Font Weights:**
```css
--fw-default: 400;    /* Normal text */
--fw-italic: 400;     /* Italic text */
--fw-medium: 500;     /* Slightly emphasized */
--fw-semibold: 600;   /* Headings, buttons */
--fw-bold: 700;       /* Strong emphasis */
--fw-extrabold: 800;  /* Heavy emphasis */
--fw-black: 900;      /* Maximum weight */
```

**Spacing Scale:**
```css
--space-0: 0;          /* Zero spacing */
--space-xs: 0.5rem;    /* 8px - Tight spacing */
--space-sm: 1rem;      /* 16px - Small spacing */
--space-md: 1.5rem;    /* 24px - Medium spacing */
--space-lg: 2rem;      /* 32px - Large spacing */
--space-xl: 2.5rem;    /* 40px - Extra large */
--space-2xl: 4rem;     /* 64px - Double extra large */
--space-3xl: 5rem;     /* 80px - Triple extra large */
--space-4xl: 7.5rem;   /* 120px - Maximum spacing */
```

### How to Use the Design System

1. **Reference semantic variables** in your CSS rather than using primitive values directly:
   ```css
   /* DO */
   .element {
     color: var(--txt-default);
     background-color: var(--bg-light);
   }

   /* DON'T */
   .element {
     color: #444444;
     background-color: #fafafa;
   }
   ```

2. **Maintain consistent spacing** using the spacing scale:
   ```css
   .container {
     padding: var(--space-md);
     margin-bottom: var(--space-lg);
     gap: var(--space-sm);
   }
   ```

3. **Follow BEM naming convention** for component creation:
   ```css
   .component {}
   .component__element {}
   .component--modifier {}
   ```

4. **Use existing components** whenever possible instead of creating new ones.

5. **Extend the design system** by creating new components that follow the established patterns.

See `docs/design-system.md` for complete variable reference and usage guidelines.

## 🧩 Components

Pre-built, accessible UI components ready for production:

### Interactive Components

- **Buttons**: 4 variants (primary, secondary, outline, ghost) with 3 sizes (sm, default, lg)
- **Forms**: Styled inputs with labels, validation states (error, success), and required field indicators
- **Badges**: Colored status indicators for categorization and labeling

### Layout Components

- **Cards**: Flexible content containers with optional header, body, and footer sections
- **Alerts**: 4 types (success, warning, error, info) with title and message support

### Features

- All components follow accessibility best practices (ARIA attributes, keyboard navigation)
- Consistent hover, focus, and disabled states
- Built with semantic HTML and BEM naming convention
- Fully customizable through CSS variables

See `docs/components.md` for complete implementation examples and customization guide.

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

- `docs/design-system.md` - Design system guidelines
- `docs/components.md` - Component library documentation

## 🔄 Claude Code with Figma MCP Integration

This project supports Claude Code's Figma MCP integration, allowing you to work seamlessly with Figma designs in your development workflow.

### What is Figma MCP?

Figma MCP (Model Context Protocol) is a powerful integration that allows Claude Code to directly access Figma design files, extract design tokens, view components, and generate code based on Figma designs.

### Installation and Setup

1. **Install Claude Code CLI**:
   ```bash
   # Using npm
   npm install -g @anthropic/claude-code

   # Or using yarn
   yarn global add @anthropic/claude-code
   ```

2. **Authenticate Claude Code**:
   ```bash
   claude-code auth login
   ```

3. **Connect Figma MCP Server**:
   ```bash
   claude-code mcp connect figma-dev-mode-mcp-server
   ```

4. **Set up Figma Dev Mode**:
   - Open your Figma file
   - Click on the "Dev Mode" button in the top-right corner
   - Follow the prompts to enable Dev Mode for your file
   - Copy the Dev Mode URL provided

5. **Link Your Figma File**:
   ```bash
   claude-code mcp configure figma-dev-mode-mcp-server --dev-mode-url="your-figma-dev-mode-url"
   ```

### How to Use Figma MCP with Claude Code

1. **View Figma Screenshots**: Claude can access and view screenshots from your Figma designs.
   ```
   /view-figma-screenshot [node-id]
   ```

2. **Get Component Code**: Extract code from Figma components to implement in your project.
   ```
   /get-figma-code [component-name]
   ```

3. **Access Design Metadata**: View information about Figma components, including properties and variants.
   ```
   /get-figma-metadata [node-id]
   ```

4. **Extract Design Variables**: Access Figma variables and design tokens for consistent implementation.
   ```
   /get-figma-variables
   ```

### Best Practices for Figma MCP Integration

1. **Organize Your Figma File**:
   - Use clear, descriptive names for components and frames
   - Group related components logically
   - Create a dedicated page for your design system components

2. **Establish Component Naming Conventions**:
   - Use consistent prefixes for component types (e.g., `btn-` for buttons)
   - Include variant information in component names (e.g., `btn-primary`, `btn-secondary`)
   - Follow a hierarchy for nested components (e.g., `card/card-header`, `card/card-body`)

3. **Set Up Design Tokens in Figma**:
   - Create variables for colors, typography, spacing, etc.
   - Organize variables into collections that match your CSS structure
   - Use semantic naming that aligns with your code (e.g., `--txt-default`, `--bg-brand`)

4. **Link Design to Code**:
   - Reference CSS class names in Figma component descriptions
   - Document component behavior in Figma (hover states, animations, etc.)
   - Include responsive behavior notes in your Figma file

5. **Workflow Tips**:
   - Start with high-level components first, then drill down to details
   - Ask Claude to generate code for one component at a time
   - Provide context about where the component will be used
   - When troubleshooting, share both Figma screenshots and your current code
   - Verify design token mappings between Figma and your CSS variables

### Benefits of Figma MCP Integration

- **Design Accuracy**: Implement designs with pixel-perfect accuracy by directly referencing Figma assets
- **Efficiency**: Reduce the need for manual handoff between designers and developers
- **Consistency**: Ensure consistent implementation of design tokens and components
- **Collaboration**: Improve the workflow between design and development teams
- **Version Control**: Track design changes and implement updates consistently
- **Rapid Prototyping**: Quickly implement design changes with accurate code generation

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
