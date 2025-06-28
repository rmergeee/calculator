let firstNumber;
let secondNumber;
let operator;

let displayContent;

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return sum(firstNumber,secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber,secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    }

}

function sum(firstNumber,secondNumber) {
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

const button0 = document.querySelector(".button-0");
const button1 = document.querySelector(".num_1");
const button2 = document.querySelector(".num_2");
const button3 = document.querySelector(".num_3");
const button4 = document.querySelector(".num_4");
const button5 = document.querySelector(".num_5");
const button6 = document.querySelector(".num_6");
const button7 = document.querySelector(".num_7");
const button8 = document.querySelector(".num_8");
const button9 = document.querySelector(".num_9");

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

//buttonEquels.addEventListener("click", () => operate(operator, firstNumber, secondNumber));
clearButton.addEventListener("click", () => inputNumbers.textContent = "")
numbers.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target.className);
    switch(target.className) {
        case 'button-0 calc-button':
            displayContent = 0;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-1 calc-button':
            displayContent = 1;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-2 calc-button':
            displayContent = 2;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-3 calc-button':
            displayContent = 3;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-4 calc-button':
            displayContent = 4;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-5 calc-button':
            displayContent = 5;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-6 calc-button':
            displayContent = 6;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-7 calc-button':
            displayContent = 7;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-8 calc-button':
            displayContent = 8;
            inputNumbers.textContent = displayContent;
            break;
        case 'num-9 calc-button':
            displayContent = 9;
            inputNumbers.textContent = displayContent;
            break;
        case 'dd':
            break;
        case 'report':
            break;
        case 'home':
            break;
        case 'dashboard':
            break;
        case 'report':
            break;
    }
});