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

const btn1 = numberButtons[6];
const btn2 = numberButtons[7];
const btn3 = numberButtons[8];
const btn4 = numberButtons[3];
const btn5 = numberButtons[4];
const btn6 = numberButtons[5];
const btn7 = numberButtons[0];
const btn8 = numberButtons[1];
const btn9 = numberButtons[2];
const btn0 = numberButtons[9];
const btnac = operatorButtons[1];
const btnc = operatorButtons[0];
const btnadd = operatorButtons[4];
const btnsub = operatorButtons[5];
const btnmul = operatorButtons[2];
const btndiv = operatorButtons[3];


btn1.addEventListener("click", function () {
    updateDisplay("1");
});
btn2.addEventListener("click", function () {
    updateDisplay("2");
});
btn3.addEventListener("click", function () {
    updateDisplay("3");
});
btn4.addEventListener("click", function () {
    updateDisplay("4");
});
btn5.addEventListener("click", function () {
    updateDisplay("5");
});
btn6.addEventListener("click", function () {
    updateDisplay("6");
});
btn7.addEventListener("click", function () {
    updateDisplay("7");
});
btn8.addEventListener("click", function () {
    updateDisplay("8");
});
btn9.addEventListener("click", function () {
    updateDisplay("9");
});
btn0.addEventListener("click", function () {
    updateDisplay("0");
});
btnadd.addEventListener("click", function () {
    updateDisplayForOp("+");
});
btnsub.addEventListener("click", function () {
    updateDisplayForOp("-");
});
btnmul.addEventListener("click", function () {
    updateDisplayForOp("x");
});
btndiv.addEventListener("click", function () {
    updateDisplayForOp("/");
});
decimelButton.addEventListener("click", function () {
    updateDisplay(".");
});
equalButton.addEventListener("click", calculation);
btnac.addEventListener("click", resetDisplay);
btnc.addEventListener("click", clearEntry);

function updateDisplay(value) {
    var length
    if (display.value === "0") {
        display.value = value;
    }
    else {
        display.value += value;
    }
    if (secondOperandAlert === true) {
        secondOperand = display.value.substring(1, length)
    }
}

function updateDisplayForOp(value2) {
    firstOperand = display.value
    display.value = value2;
    operator = value2;
    if (operator === "x") {
        operator = "*";
    }
    secondOperandAlert = true;
}

function resetDisplay() {
    display.value = 0;
    firstOperand = null;
    operator = null;
    secondOperand = null;
    secondOperandAlert = false;
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
    secondOperandAlert = false;
}

function calculation() {
    if (operator === "+") {
        var calculation = +firstOperand + +secondOperand
        console.log(calculation)
        display.value = calculation
    }
    if (operator === "-") {
        var calculation = +firstOperand - +secondOperand
        console.log(calculation)
        display.value = calculation
    }
    if (operator === "*") {
        var calculation = +firstOperand * +secondOperand
        console.log(calculation)
        display.value = calculation
    }
    if (operator === "/") {
        var calculation = +firstOperand / +secondOperand
        console.log(calculation)
        display.value = calculation
    }
    firstOperand = calculation
    operator = null
    secondOperand = null
    secondOperandAlert = false;
}