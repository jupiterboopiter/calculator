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



numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
  if (currentOperationScreen.textContent === '0' || shouldResetScreen)
    resetScreen()
  currentOperationScreen.textContent += number
}

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

lastOperationScreen.setAttribute('style', 'font-size: 1.8rem; color: gray; margin-left: 1.5rem;')

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      setOperation(convertOperator(e.key))
}

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

let firstOperand = '';
let currentOperator = null;
let secondOperand = '';
let shouldResetScreen = false;

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


