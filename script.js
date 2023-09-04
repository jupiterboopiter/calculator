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
let operator = '';
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