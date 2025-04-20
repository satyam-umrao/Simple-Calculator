// script.js

// Get the display element
const display = document.getElementById('user-input');

// Store the current expression
let currentInput = '0';

// Update display
function updateDisplay() {
    display.textContent = currentInput;
}

// Handle number and dot input
function appendValue(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Handle operator input
function appendOperator(operator) {
    const lastChar = currentInput.slice(-1);
    if ('+-*/%'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

// Evaluate expression
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

// Handle AC
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Handle DEL
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            appendValue(value);
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            appendOperator(value);
        } else if (value === '=') {
            calculateResult();
        } else if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLast();
        }
    });
});
