let firstNumber;
let secondNumber;
let operator;

let displayContent;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        console.log(firstNumber, operator, secondNumber);
        return firstNumber + secondNumber;
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber,secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    }

}

function sum(firstNumber,secondNumber) {
    console.log(firstNumber, operator, secondNumber);
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber,secondNumber) {
    return firstNumber / secondNumber;
}

function multiply(firstNumber,secondNumber) {
    return firstNumber * secondNumber;
}

//UI
const buttonDot = document.querySelector(".button-dot");
const buttonEquels = document.querySelector(".button-equals");
const plusButton = document.querySelector(".button-plus");
const minusButton = document.querySelector(".button-minus");
const devideButton = document.querySelector(".button-devide");
const multiplyButton = document.querySelector(".button-multiply");
const clearButton = document.querySelector(".ac-buttom");
const backButton = document.querySelector(".backspace");
const numbers = document.querySelector(".numbers");
const inputNumbers = document.querySelector(".input-numbers");
const operationButtons = document.querySelector(".operation");

clearButton.addEventListener("click", () => {
    inputNumbers.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})

numbers.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className) {
        case 'button-0 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 0;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-1 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 1;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-2 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 2;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-3 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 3;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-4 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 4;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-5 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 5;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-6 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 6;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-7 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 7;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-8 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 8;
            inputNumbers.textContent += displayContent;
            break;
        case 'num-9 calc-button':
            if (inputNumbers.textContent === "0") inputNumbers.textContent = "";
            displayContent = 9;
            inputNumbers.textContent += displayContent;
            break;
        case 'button-dot calc-button':
            if (inputNumbers.textContent === "" || inputNumbers.textContent === "0") break;
            inputNumbers.textContent += ".";
            break;
    }
});

operationButtons.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className) {
        case "button-devide calc-button":
            if (inputNumbers.textContent === "0") break;
            if (inputNumbers.textContent !== "") {
                firstNumber = inputNumbers.textContent;
                operator = "/"
                inputNumbers.textContent = "";
            }
            break;
        case "button-multiply calc-button":
            if (inputNumbers.textContent !== "") {
                firstNumber = inputNumbers.textContent;
                operator = "*"
                inputNumbers.textContent = "";
            }
            break;
        case "button-minus calc-buttons":
            if (inputNumbers.textContent !== "") {
                firstNumber = inputNumbers.textContent;
                operator = "-"
                inputNumbers.textContent = "";
            }
            break;
        case "button-plus calc-button":
            if (inputNumbers.textContent !== "") {
                firstNumber = inputNumbers.textContent;
                operator = "+ "
                inputNumbers.textContent = "";
            }
            break;

    }
});

buttonEquels.addEventListener("click", () => {
    secondNumber = inputNumbers.textContent;
    console.log(operate(operator, firstNumber, secondNumber));
});