# template-0

A modern web project built with HTML5, CSS3, and vanilla JavaScript.

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

This project uses a custom design system with:
- **Primitive variables**: Color scales (50-900) for neutral, brand, success, warning, and error
- **Semantic variables**: Contextual colors for text, background, and borders
- **Typography system**: Consistent font sizes and weights
- **Component library**: Pre-built UI components

See `docs/design-system.md` for detailed information.

## 🧩 Components

Available UI components:
- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Content containers with header, body, footer
- **Forms**: Inputs, labels with validation states
- **Alerts**: Success, warning, error, info messages
- **Badges**: Status indicators

See `docs/components.md` for usage examples.

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
