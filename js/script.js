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