// All DOM Elements here
const display1Element = document.querySelector('.display-1');
const display2Element = document.querySelector('.display-2');
const tempDisplayResult = document.querySelector('.temp-result');
const numbersElement = document.querySelectorAll('.number');
const operationElement = document.querySelectorAll('.operation');
const equalElement = document.querySelector('.equal');
const clearAllElement = document.querySelector('.all-clear');
const clearLastElement = document.querySelector('.last-entity-clear');

let displayNum1 = '';
let displayNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// Function to enter numbers and make sure the Dot is only entered once
numbersElement.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    displayNum2 += e.target.innerText;
    display2Element.innerText = displayNum2;
  });
});

// Function to do operations
operationElement.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    if (!displayNum2) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (displayNum1 && displayNum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayNum2);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

// Clear Value/Variable
function clearVar(name = '') {
  displayNum1 += displayNum2 + '' + name + '';
  display1Element.innerText = displayNum1;
  display2Element.innerText = '';
  displayNum2 = '';
  tempDisplayResult.innerText = result;
}

// Math Operations
function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(displayNum2);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(displayNum2);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(displayNum2);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(displayNum2);
  } else if (lastOperation === '%') {
    result = parseFloat(result) % parseFloat(displayNum2);
  }
}

// Functionality for the Equal Button
equalElement.addEventListener('click', (e) => {
  if (!displayNum1 || !displayNum2) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2Element.innerText = result;
  tempDisplayResult.innerText = '';
  displayNum2 = result;
  displayNum1 = '';
});

// Clear All
clearAllElement.addEventListener('click', (e) => {
  display1Element.innerText = '0';
  display2Element.innerText = '0';
  displayNum1 = '';
  displayNum2 = '';
  result = '';
  tempDisplayResult = '0';
});

// Clear last element
clearLastElement.addEventListener('click', (e) => {
  display1Element.innerText = '';
  displayNum2 = '';
});

// Keyboard functionality here
window.addEventListener('keydown', (e) => {
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
  ) {
    clickButtonElement(e.key);
  } else if (
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/*' ||
    e.key === '%'
  ) {
    clickOperation(e.key);
  } else if (e.key === '*') {
    clickOperation('x');
  } else if (e.key === 'Enter' || e.key === '=') {
    clickEqual();
  }
});

// Keypress function for Keyboard - Numbers
function clickButtonElement(key) {
  numbersElement.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// Keypress function for keyboard - Operations
function clickOperation(key) {
  operationElement.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// Keypress function for keyboard - Equal Sign
function clickEqual(key) {
  equalElement.click();
}
