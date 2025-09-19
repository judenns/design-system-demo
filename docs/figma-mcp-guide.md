# Figma MCP Integration with Claude Code

Simple guide to using Figma's integration with Claude Code for seamless design-to-development workflows.

## Table of Contents

1. [Overview](#overview)
2. [What is Figma MCP?](#what-is-figma-mcp)
3. [Setup Guide](#setup-guide)
4. [Using Figma MCP Tools](#using-figma-mcp-tools)
5. [Quick Start](#quick-start)
6. [Practical Examples](#practical-examples)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Overview

Figma MCP integration bridges the gap between design and development by allowing Claude Code to directly interact with Figma design files. This enables developers to extract components, analyze designs, access design tokens, and generate implementation-ready code directly from Figma sources.

### Key Benefits

- **🎯 Design Accuracy**: Implement designs with pixel-perfect precision
- **⚡ Speed**: Reduce manual handoff time between design and development
- **🔄 Consistency**: Ensure design system compliance and token accuracy
- **🤝 Collaboration**: Improve designer-developer communication
- **📐 Precision**: Access exact measurements, colors, and spacing values
- **🔧 Automation**: Generate boilerplate code directly from designs

---

## What is Figma MCP?

Figma MCP (Model Context Protocol) is a standardized interface that enables Claude Code to communicate directly with Figma's Dev Mode API. This integration provides four core capabilities:

### Core Capabilities

**get_screenshot**: Get a visual reference of any Figma component or frame

**get_code**: Generate implementation code (CSS, HTML, React) from Figma designs

**get_metadata**: Extract exact design specifications like colors, spacing, and typography

**get_variable_defs**: Access design tokens and variables from your Figma design system

---

## Setup Guide

### Simple Setup in 3 Steps

**1. Enable Figma Dev Mode**
- Open your Figma file in the browser
- Click "Dev Mode" in the top-right corner (💻 icon)
- Copy the Dev Mode URL from your browser address bar

**2. Connect Claude Code to Figma**
```bash
# Connect the Figma MCP server
claude-code mcp connect figma-dev-mode-mcp-server

# Configure with your Figma Dev Mode URL
claude-code mcp configure figma-dev-mode-mcp-server \
  --dev-mode-url="https://www.figma.com/dev-mode/your-file-id"
```

**3. Set Permissions**

Create `.claude/settings.local.json` in your project with:
```json
{
  "permissions": {
    "allow": [
      "mcp__figma-dev-mode-mcp-server__get_screenshot",
      "mcp__figma-dev-mode-mcp-server__get_code",
      "mcp__figma-dev-mode-mcp-server__get_metadata",
      "mcp__figma-dev-mode-mcp-server__get_variable_defs"
    ]
  }
}
```

---

## Using Figma MCP Tools

### How to Use Figma MCP Tools

**1. View a Design Component (get_screenshot)**

Get a visual reference of any Figma component by asking Claude:
```
"Show me the button component from our Figma design"
"Let me see the hero section from our homepage design"
```

**2. Generate Code (get_code)**

Turn Figma designs into production-ready code by asking Claude:
```
"Generate HTML and CSS for this button component"
"Create a React component for this card design"
```

**3. Get Design Specs (get_metadata)**

Extract exact measurements and properties by asking Claude:
```
"What are the dimensions and spacing used in this component?"
"Tell me the exact colors and typography in this design"
```

**4. Access Design Tokens (get_variable_defs)**

Sync design system variables with your code by asking Claude:
```
"Extract all color variables from our Figma design system"
"Get the typography scale from our design system"
```

---

## Quick Start

Let's implement a button component from Figma in just 3 steps:

**Step 1: View the Design**
```
You: Show me the primary button component from Figma

Claude: [Shows the button component from your Figma file]
```

**Step 2: Generate Code**
```
You: Generate CSS and HTML for this button using our design system variables

Claude: [Provides HTML/CSS implementation that uses your design tokens]
```

**Step 3: Refine Implementation**
```
You: Make sure the hover state matches the Figma prototype

Claude: [Updates the code to include accurate hover effects]
```

### Finding Design Elements

You can refer to Figma elements in multiple ways:

- By descriptive name: "Show me the primary button component"
- By location: "Show the hero section on the homepage"
- By frame name: "Show the card component from the Components page"

---

## Practical Examples

### Example 1: Implementing a Card Component

**Convert a Figma card design to code:**

```
You: I need to implement the product card component from Figma using our CSS variables.

Claude: Let me help you with that. I'll first view the design and then create the code.

[Claude shows the card design and generates code that uses your CSS variables]
```

**What Claude provides:**

```html
<!-- Product Card Component -->
<article class="product-card">
  <div class="product-card__image">
    <img src="product-image.jpg" alt="Product name" loading="lazy">
    <span class="product-card__badge product-card__badge--new">New</span>
  </div>
  <div class="product-card__content">
    <h3 class="product-card__title">Product Title</h3>
    <p class="product-card__description">Product description text</p>
    <div class="product-card__price">
      <span class="product-card__price-current">$29.99</span>
      <span class="product-card__price-original">$39.99</span>
    </div>
  </div>
  <div class="product-card__actions">
    <button class="btn btn--primary product-card__cta">Add to Cart</button>
  </div>
</article>
```

```css
/* Product Card Styles */
.product-card {
  background-color: var(--bg-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--bd-light);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.product-card:hover {
  box-shadow: var(--shadow-md);
}

/* More CSS styles... */
```

### Example 2: Syncing Design Tokens

**Update your CSS variables from Figma:**

```
You: Extract all color variables from our Figma design system for our variables.css file.

Claude: I'll get those colors and format them as CSS variables that match your existing naming conventions.

[Claude extracts design tokens and generates CSS variables]
```

**What Claude provides:**

```css
/* Updated CSS Variables - Synced with Figma */

/* Primitive Colors (from Figma Variables) */
:root {
  /* Neutral Scale */
  --neutral-50: #fafafa;   /* Figma: neutral/50 */
  --neutral-100: #f5f5f5;  /* Figma: neutral/100 */
  --neutral-200: #e5e5e5;  /* Figma: neutral/200 */
  --neutral-300: #d4d4d4;  /* Figma: neutral/300 */
  --neutral-400: #a3a3a3;  /* Figma: neutral/400 */
  --neutral-500: #737373;  /* Figma: neutral/500 */
  --neutral-600: #525252;  /* Figma: neutral/600 */
  --neutral-700: #404040;  /* Figma: neutral/700 */
  --neutral-800: #262626;  /* Figma: neutral/800 */
  --neutral-900: #171717;  /* Figma: neutral/900 */

  /* Brand Scale */
  --brand-50: #eff6ff;    /* Figma: brand/50 */
  --brand-100: #dbeafe;   /* Figma: brand/100 */
  /* More colors... */

  /* Semantic Variables (mapped from Figma) */
  --txt-dark: var(--neutral-900);      /* Figma: text/primary */
  --txt-default: var(--neutral-700);   /* Figma: text/secondary */
  --txt-light: var(--neutral-500);     /* Figma: text/tertiary */
  --txt-brand: var(--brand-600);       /* Figma: text/brand */
  /* More semantic variables... */
}
```

---

## Best Practices

### For Figma Design Files

**Name Components Clearly**
- Use descriptive names: `btn/primary-large` instead of `Button Copy 2`
- Organize components logically in frames and pages
- Use Figma variants for different states and sizes

**Structure Design Tokens**
- Organize colors in logical collections
- Set up typography styles with consistent naming
- Create spacing and effect variables
- Document usage guidelines directly in Figma

### For Development

**Map Design Tokens Consistently**
- Create direct mappings between Figma and CSS variables
- Use semantic naming in your CSS custom properties
- Document the relationship between Figma and CSS variables

**Implement Components Accurately**
- Use exact measurements from Figma designs
- Implement all interactive states (hover, focus, active)
- Create responsive designs based on Figma breakpoints
- Add accessibility features that may not be visible in designs

**Verify Implementation**
- Compare colors, typography, and spacing with Figma specs
- Test responsive behavior across device sizes
- Ensure animations match Figma prototypes
- Validate that all variants are properly implemented

---

## Troubleshooting

### Common Issues

**"Node ID not found"**
- Try using descriptive names instead of node IDs
- Make sure your Figma file is accessible
- Check that the Dev Mode URL is current
- Reconfigure with: `claude-code mcp configure figma-dev-mode-mcp-server --dev-mode-url="your-url"`

**"Permission denied" errors**
- Check your `.claude/settings.local.json` file
- Make sure all Figma MCP tools are in the allow list
- Restart Claude Code if needed

**Connection issues**
- Check your internet connection
- Restart the MCP server with:
  ```
  claude-code mcp disconnect figma-dev-mode-mcp-server
  claude-code mcp connect figma-dev-mode-mcp-server
  ```

**Generated code doesn't match design**
- Ask Claude to extract exact specifications first
- Mention your design system variables
- Provide more context about your needs
- Ask for specific improvements

### Quick Fixes

**Check connection status:**
```bash
claude-code mcp status figma-dev-mode-mcp-server
```

**Reconnect Figma:**
```bash
claude-code mcp reconnect figma-dev-mode-mcp-server
```

**Test connection:**
```bash
claude-code mcp test figma-dev-mode-mcp-server
```

### Help Resources

- Claude Code docs: [docs.claude.ai/code](https://docs.claude.ai/code)
- Figma Dev Mode: [help.figma.com/dev-mode](https://help.figma.com/dev-mode)

---

## Quick Reference Guide

### Top 5 Figma MCP Commands

1. **View a design:**
   "Show me the [component name] from our Figma design"

2. **Get specifications:**
   "What are the exact colors and spacing used in this component?"

3. **Generate code:**
   "Create HTML and CSS for this component using our design system"

4. **Extract design tokens:**
   "Get all color variables from our Figma design system"

5. **Compare with implementation:**
   "Check if my CSS matches the Figma design"

---

**Last Updated**: 2024-09-19
**Version**: 1.1.0
**Compatibility**: Claude Code CLI v1.0.0+, Figma Dev Mode API v1.0+