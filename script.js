const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', calculate);

function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      resultParagraph.textContent = 'Error: Division by zero!';
    } else {
      result = num1 / num2;
    }
  }
  resultParagraph.textContent = `Result: ${result}`;
}
