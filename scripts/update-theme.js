// scripts/update-theme.js - One script to update everything
import fs from 'fs';

function updateTheme() {
  console.log('🎨 Updating theme from config...');
  
  const config = JSON.parse(fs.readFileSync('theme.config.json', 'utf8'));
  
  updateSemanticColors(config.colors);
  updateTypography(config.typography);
  updateButtons(config.components.button);
  updateInputs(config.components.input);
  
  console.log('✅ Theme updated successfully!');
  console.log(`📅 Updated at: ${new Date().toLocaleString()}`);
}

function updateSemanticColors(colors) {
  console.log('📝 Updating colors...');
  
  const filePath = 'style/variables/colors.css';
  let content = fs.readFileSync(filePath, 'utf8');
  
  const colorMap = {
    '--txt-dark': colors.txtDark,
    '--txt-default': colors.txtDefault,
    '--txt-light': colors.txtLight,
    '--txt-brand': colors.txtBrand,
    '--txt-disable': colors.txtDisable,
    '--txt-white': '#ffffff',
    '--bg-default': colors.bgDefault,
    '--bg-brand': colors.bgBrand,
    '--bg-light': colors.bgLight,
    '--bg-white': colors.bgWhite,
    '--bg-brand-light': colors.bgBrandLight,
    '--bd-default': colors.bdDefault,
    '--bd-light': colors.bdLight,
    '--bd-brand': colors.bdBrand
  };
  
  Object.entries(colorMap).forEach(([variable, value]) => {
    content = updateVariable(content, variable, value);
  });
  
  fs.writeFileSync(filePath, content);
}

function updateTypography(typography) {
  console.log('📝 Updating typography...');
  
  const filePath = 'style/variables/typography.css';
  let content = fs.readFileSync(filePath, 'utf8');
  
  const fontStack = `'${typography.fontFamily}', system-ui, sans-serif`;
  
  const typoMap = {
    '--heading-font': fontStack,
    '--default-font': fontStack,
    '--display-font': fontStack,
    '--fs-h1': typography.headings.h1,
    '--fs-h2': typography.headings.h2,
    '--fs-h3': typography.headings.h3,
    '--fs-h4': typography.headings.h4,
    '--fs-h5': typography.headings.h5,
    '--fs-h6': typography.headings.h6,
    '--fs-large': typography.body.large,
    '--fs-default': typography.body.default,
    '--fs-small': typography.body.small,
    '--fs-label': typography.label,
    '--fs-caption': typography.caption
  };
  
  Object.entries(typoMap).forEach(([variable, value]) => {
    content = updateVariable(content, variable, value);
  });
  
  fs.writeFileSync(filePath, content);
}

function updateButtons(buttonConfig) {
  console.log('📝 Updating buttons...');
  
  const filePath = 'style/components/buttons.css';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update button heights
  content = updateButtonHeight(content, '.btn', buttonConfig.heightDefault);
  content = updateButtonHeight(content, '.btn--sm', buttonConfig.heightSmall);
  content = updateButtonHeight(content, '.btn--lg', buttonConfig.heightLarge);
  
  // Update button variants
  content = updateButtonVariant(content, '.btn--primary', buttonConfig.primary);
  content = updateButtonVariant(content, '.btn--tonal', buttonConfig.tonal);
  content = updateButtonVariant(content, '.btn--outline', buttonConfig.outline);
  content = updateButtonVariant(content, '.btn--link', buttonConfig.link);
  
  fs.writeFileSync(filePath, content);
}

function updateInputs(inputConfig) {
  console.log('📝 Updating inputs...');
  
  const filePath = 'style/components/forms.css';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update input heights
  content = updateInputHeight(content, '.input', inputConfig.heightDefault);
  content = updateInputHeight(content, '.textarea', inputConfig.heightDefault);
  
  fs.writeFileSync(filePath, content);
}

function updateVariable(content, variable, value) {
  const regex = new RegExp(`(${escapeRegex(variable)}:\\s*)([^;]+)(;)`, 'g');
  if (content.match(regex)) {
    return content.replace(regex, `$1${value}$3`);
  }
  return content;
}

function updateButtonHeight(content, selector, height) {
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*{[^}]*height:\\s*)([^;]+)(;[^}]*})`, 
    'gs'
  );
  
  if (content.match(regex)) {
    return content.replace(regex, `$1${height}$3`);
  }
  return content;
}

function updateButtonVariant(content, selector, colors) {
  // Update default state
  content = updateButtonState(content, selector, {
    color: colors.textColor,
    'background-color': colors.backgroundColor,
    'border-color': colors.borderColor
  });
  
  // Update hover state
  content = updateButtonState(content, `${selector}:hover:not(:disabled)`, {
    color: colors.hoverTextColor,
    'background-color': colors.hoverBackgroundColor,
    'border-color': colors.hoverBorderColor
  });
  
  return content;
}

function updateButtonState(content, selector, properties) {
  const blockRegex = new RegExp(
    `(${escapeRegex(selector)}\\s*{)([^}]*)(})`, 
    'gs'
  );
  
  const match = content.match(blockRegex);
  if (match) {
    let blockContent = match[0];
    
    Object.entries(properties).forEach(([property, value]) => {
      if (value && value !== 'inherit') {
        blockContent = updatePropertyInBlock(blockContent, property, value);
      }
    });
    
    return content.replace(blockRegex, blockContent);
  }
  
  return content;
}

function updatePropertyInBlock(blockContent, property, value) {
  const propertyRegex = new RegExp(`(${property}:\\s*)([^;]+)(;)`, 'g');
  
  if (blockContent.match(propertyRegex)) {
    return blockContent.replace(propertyRegex, `$1${value}$3`);
  } else {
    // Add property if it doesn't exist
    return blockContent.replace(/(}$)/, `  ${property}: ${value};\n$1`);
  }
}

function updateInputHeight(content, selector, height) {
  const property = selector.includes('textarea') ? 'min-height' : 'height';
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*{[^}]*${property}:\\s*)([^;]+)(;[^}]*})`, 
    'gs'
  );
  
  if (content.match(regex)) {
    return content.replace(regex, `$1${height}$3`);
  }
  return content;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Run the update
updateTheme();
