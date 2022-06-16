// All DOM Elements here
const display1Element = document.querySelector('.display-1');
const display2Element = document.querySelector('.display-2');
const tempDisplayResult = document.querySelector('.temp-result');
const numbersElement = document.querySelectorAll('.number');
const operationElement = document.querySelectorAll('.operation');
const equalElement = document.querySelector('.equal');
const clearElement = document.querySelector('.all-clear');
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
  operation.addEventListener('click', (e) => {});
});
