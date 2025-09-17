/**
 * Main JavaScript file
 * Add your custom JavaScript here
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project loaded successfully!');
    
    // Your code here
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Initializing application...');
    
    // Add your initialization code here
    setupEventListeners();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Example: Button click handler
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

/**
 * Handle button clicks
 * @param {Event} event - The click event
 */
function handleButtonClick(event) {
    console.log('Button clicked:', event.target);
    // Add your button click logic here
}

/**
 * Utility function to select elements
 * @param {string} selector - CSS selector
 * @returns {Element|null}
 */
function $(selector) {
    return document.querySelector(selector);
}

/**
 * Utility function to select multiple elements
 * @param {string} selector - CSS selector
 * @returns {NodeList}
 */
function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Utility function to create elements
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {string} content - Element content
 * @returns {Element}
 */
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    
    if (content) {
        element.textContent = content;
    }
    
    return element;
}
