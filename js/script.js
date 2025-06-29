let firstNumber;
let secondNumber;
let operator;

const numberButtons = document.querySelector(".numbers");
const inputField = document.querySelector(".input-numbers");
const clearButton = document.querySelector(".ac-button");
const backspace = document.querySelector(".backspace");
const operatorButtons = document.querySelector(".operation");
const equelsButton = document.querySelector(".button-equals");


function operate(operator, firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "/":
            return firstNumber / secondNumber;
        case "*":
            return firstNumber * secondNumber;
    }
}

numberButtons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.className) {
        case "num-1 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 1;
            break;
        case "num-2 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 2;
            break;
        case "num-3 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 3;
            break;
        case "num-4 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 4;
            break;
        case "num-5 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 5;
            break;
        case "num-6 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 6;
            break;
        case "num-7 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 7;
            break;
        case "num-8 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 8;
            break;
        case "num-9 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 9;
            break;
        case "button-0 calc-button":
            if (inputField.textContent === "0") inputField.textContent = "";
            inputField.textContent += 0;
            break;
        case "button-dot calc-button":
            if (inputField.textContent === "") break;
            if (inputField.textContent.split("").includes(".")) break;
            inputField.textContent += ".";
            break;
    }
})

operatorButtons.addEventListener("click", (event) =>{
    let target = event.target;

    switch (target.className) {
        case "button-devide calc-button":
            if (inputField.textContent === "") break;
            if(firstNumber !== undefined && inputField.textContent !== "") {
                secondNumber = inputField.textContent;
                operator = "/"
                inputField.textContent = Math.round(operate(operator, firstNumber, secondNumber)*1000)/1000;
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
                break;
            }
            firstNumber = inputField.textContent;
            inputField.textContent = "";
            operator = "/"
            break;
        case "button-multiply calc-button":
            if (inputField.textContent === "") break;
            if(firstNumber !== undefined && inputField.textContent !== "") {
                secondNumber = inputField.textContent;
                operator = "*"
                inputField.textContent = Math.round(operate(operator, firstNumber, secondNumber)*1000)/1000;
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
                break;
            }
            firstNumber = inputField.textContent;
            inputField.textContent = "";
            operator = "*"
            break;
        case "button-minus calc-button":
            if (inputField.textContent === "") break;
            if(firstNumber !== undefined && inputField.textContent !== "") {
                secondNumber = inputField.textContent;
                operator = "-"
                inputField.textContent = Math.round(operate(operator, firstNumber, secondNumber)*1000)/1000;
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
                break;
            }
            firstNumber = inputField.textContent;
            inputField.textContent = "";
            operator = "-"
            break;
        case "button-plus calc-button":
            if (inputField.textContent === "") break;
            if(firstNumber !== undefined && inputField.textContent !== "") {
                secondNumber = inputField.textContent;
                operator = "+"
                inputField.textContent = Math.round(operate(operator, firstNumber, secondNumber)*1000)/1000;
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
                break;
            }
            firstNumber = inputField.textContent;
            inputField.textContent = "";
            operator = "+"
            break;
    }
})

equelsButton.addEventListener("click", () => {
    if (inputField.textContent === "") return;
    if (inputField.textContent === "0" && operator === "/") {
        alert("На ноль не делим!");
        return;
    }
    if (firstNumber === undefined) return;
    secondNumber = inputField.textContent;
    inputField.textContent = Math.round(operate(operator, firstNumber, secondNumber)*1000)/1000;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})

clearButton.addEventListener("click", () => {
    inputField.textContent = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})

backspace.addEventListener("click", () => (
    inputField.textContent = inputField
                                    .textContent
                                    .slice(0, inputField.textContent.length - 1)
));