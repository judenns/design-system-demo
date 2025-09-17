# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern web application starter template featuring:

- Vanilla HTML5, CSS3, and JavaScript (no build system required)
- Comprehensive design system with CSS custom properties
- Pre-built, accessible UI components
- BEM naming convention for CSS classes

## Development Commands

This is a static web project with no build system. To run locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js live-server
npx live-server --port=3000

# Using PHP
php -S localhost:8000
```

## Code Architecture

### CSS Architecture

The project follows a modular CSS approach with clear separation of concerns:

- **reset.css**: Modern CSS reset based on Andy Bell's reset
- **variables.css**: All design tokens (colors, typography, spacing) as CSS custom properties
- **components/components.css**: Reusable UI component styles (buttons, cards, forms, alerts, badges)
- **main.css**: Base styles and layout

### Component System

Components follow BEM naming convention (`.block__element--modifier`):

- Buttons: `.btn`, `.btn--primary`, `.btn--sm`
- Cards: `.card`, `.card__header`, `.card__body`, `.card__footer`
- Forms: `.input`, `.label`, `.input--error`
- Alerts: `.alert`, `.alert--success`
- Badges: `.badge`, `.badge--warning`

### Design System

Two-layer color system:

1. Primitive variables: Raw color scales (50-900 shades)
2. Semantic variables: Purpose-driven tokens that reference primitives

Key semantic variables:

- Text: `--txt-default`, `--txt-dark`, `--txt-light`, `--txt-brand`
- Backgrounds: `--bg-default`, `--bg-brand`, `--bg-light`
- Borders: `--bd-default`, `--bd-light`, `--bd-brand`
- Spacing: `--space-xs` through `--space-3xl`

### JavaScript Structure

- **main.js**: Application initialization and event handlers
- Uses vanilla JavaScript (ES6+) with no dependencies
- Modular functions for initialization, event handling, and utilities

## Key Development Notes

- **No build tools**: Project runs directly in the browser without compilation
- **Component composition**: Combine existing components rather than creating new ones
- **CSS variables only**: Use semantic CSS variables, never primitive values directly
- **Accessibility first**: All components include ARIA attributes and keyboard navigation
- **BEM methodology**: Maintain consistent naming for new components
