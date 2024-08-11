
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.textContent;

    if (buttonText === '=') {
      calculate();
    } else if (buttonText === 'C') {
      clearAll();
    } else if (buttonText === '.') {
      handleDecimal();
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      handleOperator(buttonText);
    } else {
      handleNumber(buttonText);
    }
  });
});

function handleNumber(number) {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  display.value = currentNumber;
}

function handleOperator(op) {
  if (previousNumber !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  switch(operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  display.value = currentNumber;
  previousNumber = '';
  operator = '';
}

function clearAll() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  display.value = '0';
}

function handleDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    display.value = currentNumber;
  }
}
