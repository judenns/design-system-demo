# Figma + Claude Code Integration Guide

Turn your Figma designs into working code with simple conversation - no complex setup needed!

## What This Does

Figma MCP lets you talk to Claude Code about your designs and get instant code. Instead of manually copying colors and measurements, just ask Claude to do it for you.

**Benefits:**
- Get exact colors, spacing, and sizes from Figma
- Generate HTML/CSS code instantly
- Keep designs and code perfectly in sync
- Save hours of manual work

## Quick Setup (3 Minutes)

### Step 1: Open Figma in Dev Mode
```
1. Open your Figma file in a web browser
2. Click the "Dev Mode" button (💻 icon) in the top-right
3. Copy the URL from your browser address bar
```

### Step 2: Connect Claude Code
```bash
# Connect to Figma (run once)
claude-code mcp connect figma-dev-mode-mcp-server

# Add your Figma file URL
claude-code mcp configure figma-dev-mode-mcp-server --dev-mode-url="YOUR_FIGMA_URL_HERE"
```

### Step 3: Enable Permissions
Create a file called `.claude/settings.local.json` in your project:
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

## How to Use - Just Ask Claude!

### View Your Designs
```
"Show me the button component from Figma"
// Claude will display a screenshot of your button design

"Let me see the pricing card from our design system"
// Claude shows you exactly what the card looks like
```

### Get Design Information
```
"What colors are used in this component?"
// Claude tells you: "This uses #6075a4 for the background and #ffffff for text"

"What's the spacing and size of this button?"
// Claude gives you: "24px padding, 80px height, 16px border radius"
```

### Generate Code
```
"Create HTML and CSS for this button"
// Claude generates complete, copy-paste ready code

"Turn this card design into a React component"
// Claude builds a full React component with proper styling
```

### Sync Design Tokens
```
"Extract all colors from our Figma design system"
// Claude pulls all your color variables and formats them as CSS

"Get the typography styles from Figma"
// Claude creates CSS variables for all your text styles
```

## Complete Workflow Example

Let's create a pricing card from Figma:

```
You: "Show me the pricing card from Figma"
Claude: [Displays the card design]

You: "Create CSS for this card using our design system variables"
Claude: [Generates HTML and CSS code that matches the design exactly]

You: "Make sure it works on mobile devices"
Claude: [Adds responsive CSS for mobile compatibility]
```

**Result:** You get pixel-perfect code in under 2 minutes!

## What Each Command Does

**"Show me [component] from Figma"**
- Takes a screenshot of your Figma design
- Lets you see exactly what you're working with
- Helps you reference the design while coding

**"Get the specifications for this component"**
- Extracts exact measurements (width, height, padding, margins)
- Gets precise colors (hex codes, RGB values)
- Lists typography details (font size, weight, line height)

**"Generate code for this design"**
- Creates HTML structure that matches the Figma layout
- Writes CSS styles with exact colors and spacing
- Includes hover states and responsive behavior
- Uses your existing CSS variables when possible

**"Extract design tokens from Figma"**
- Pulls all color variables from your Figma file
- Gets typography scale (font sizes, weights)
- Formats everything as CSS custom properties
- Maintains your naming conventions

## Best Practices

### In Figma
```
✅ Use clear names: "Button Primary Large" not "Rectangle 47"
✅ Organize components in logical groups
✅ Create consistent color and text styles
✅ Use Figma variables for colors and spacing
```

### When Asking Claude
```
✅ Be specific: "the login button" not "that button"
✅ Mention your design system: "using our CSS variables"
✅ Ask for what you need: "make it responsive" or "add hover states"
```

## Common Issues & Solutions

**Problem:** "Can't find that component"
**Solution:** Use more specific names or describe the location:
```
Instead of: "Show me the button"
Try: "Show me the primary button from the homepage design"
```

**Problem:** "Generated code doesn't match"
**Solution:** Ask for specifications first:
```
"What are the exact colors and spacing in this design?"
Then: "Generate code using those exact measurements"
```

**Problem:** "Connection not working"
**Solution:** Check your setup:
```bash
# Test the connection
claude-code mcp status figma-dev-mode-mcp-server

# Reconnect if needed
claude-code mcp reconnect figma-dev-mode-mcp-server
```

## Quick Commands Reference

**View Designs:**
- "Show me the [component name] from Figma"
- "Let me see the [page/section] design"

**Get Information:**
- "What colors are used in this component?"
- "What are the dimensions and spacing?"
- "Tell me about the typography in this design"

**Generate Code:**
- "Create HTML and CSS for this component"
- "Build a React component from this design"
- "Generate responsive CSS for this layout"

**Sync Design System:**
- "Extract all color variables from Figma"
- "Get the typography scale from our design system"
- "Update our CSS variables to match Figma"

## Why This Works So Well

**For Designers:** Your designs get implemented exactly as intended - no more "that's not what I designed" moments.

**For Developers:** Skip the tedious measurement and color-picking work. Get accurate code instantly.

**For Teams:** Perfect sync between design and code. Everyone stays on the same page.

**For Projects:** Faster delivery, fewer bugs, consistent implementation across all components.

---

**Need Help?** Just ask Claude: "Help me set up Figma integration" or "Show me how to extract colors from Figma"

**Last Updated:** September 2024