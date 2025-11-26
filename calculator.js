function add(a, b) {
  //Select the add button
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const addBtn = document
  .getElementById("add")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(number1, number2);

    document.getElementById("calculation-result").textContent = result;
  });

const subtractBtn = document
  .getElementById("subtract")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;

    const result = subtract(number1, number2);

    document.getElementById("calculation-result").textContent = result;
  });

const multiplyBtn = document
  .getElementById("multiply")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiply(number1, number2);

    document.getElementById("calculation-result").textContent = result;
  });

const divideBtn = document
  .getElementById("divide")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = divide(number1, number2);

    document.getElementById("calculation-result").textContent = result;
  });
