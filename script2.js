const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const allClearButton = document.querySelector(".all-clear");
const decimelButton = document.querySelector(".decimel");

let firstOperand = null;
let operator = null;
let secondOperand = null;
let secondOperandAlert = false;

numberButtons.forEach((button) => {
    button.addEventListener("click", () => inputNumber(button.textContent)
    );
});

decimelButton.addEventListener("click", inputDecimel);

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => inputNumber(button.textContent)
    );
});

decimelButton.forEach((button) => {
    button.addEventListener("click", () => inputNumber(button.textContent)
    );
});

equalButton.addEventListener("click", () => {
    secondOperand = parseFloat(display.value);
    updateDisplay(calculate());
    console.log('Equals button clicked')
}
);

clearButton.addEventListener("click", clearEntry);

allClearButton.addEventListener("click", resetDisplay);

function updateDisplay(value) {
    display.value = value;
}

function resetDisplay() {
    display.value = "0";
    firstOperand = null;
    operator = null;
    secondOperand = null;
    shouldResetDisplay = false;
}

function clearEntry() {
    display.value = 0;
    shouldResetDisplay = false;
}

function inputNumber(number) {
    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    }
    else {
        display.value = display.value === "0" ? number : display.value + number
    }
}

function inputDecimel() {
    if (shouldResetDisplay) {
        display.value = "0.1";
        shouldResetDisplay = false;
    } else if (!display.value.includes(".")) {
        display.value += "."
    }
}

function handleOperator(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(display.value);
    } else if (operator) {
        secondOperand = parseFloat(display.value)
        const result = calculate();
        display.value = result;
        firstOperand = result;
    }
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (firstOperand === null || operator || secondOperand === null) {
        return display.value;
    }
}

let result;

switch (operator) {
    case "+":
        result = firstOperand + secondOperand;
        break;

    case "x":
        result = firstOperand * secondOperand;
        break;

    case "-":
        result = firstOperand - secondOperand;
        break;

    case "/":
        if (secondOperand === 0) {
            return "Error";
        }
        result = firstOperand / secondOperand;
        break;
    default:
        return secondOperand;
}
firstOperand = null;
operator = null;
secondOperand = null;
return result;




