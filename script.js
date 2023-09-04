const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const lastOperationScreen = document.getElementById('previousScreen')
const currentOperationScreen = document.getElementById('currentScreen')

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)




function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
}

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function mulitply (a, b) {
    return a * b
};

function divide (a, b) {
    return a / b;
};

let firstNumber = '';
let currentOperator = null;
let secondNumber = '';

function operate (operator, a, b) {
    a = Number (a)
    b = Number (b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '×':
            return mulitply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}


