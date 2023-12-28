const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
            break;
        case '-': return subtract(firstNumber, secondNumber);
            break;
        case '*': return multiply(firstNumber, secondNumber);
            break;
        case '/': return divide(firstNumber, secondNumber);
            break;
        default:
    }
}

const display = document.getElementById('display');
const digitButton = document.querySelectorAll('.digit');
const operatorButton = document.querySelectorAll('.operator');
const functionButton = document.querySelectorAll('.function');
const equalButton = document.querySelectorAll('.equal');
const contentDisplay = document.createElement('div');

let dataStored = [];
let firstNumber = [];
let secondNumber = [];
let numbers = [];
let operator = [];
var isFirstNumberNotCompleted = true;

function typingNumber() {
    digitButton.forEach(button => {
        button.removeEventListener('click', handleNumberClick);
    });

    if (isFirstNumberNotCompleted) {
        digitButton.forEach(button => {
            button.addEventListener('click', handleNumberClick);
        });
    } else {
        digitButton.forEach(button => {
            button.addEventListener('click', handleSecondNumberClick);
        });
    }
}

function addNumbers(arr) {
    arr.push(event.target.textContent);
}

function handleNumberClick(event) {
    display.textContent = '';
    addNumbers(dataStored);
    firstNumber.push(dataStored.join(""));
    firstNumber = firstNumber.slice((firstNumber.length -1))
    contentDisplay.classList.add('firstNumber');
    contentDisplay.textContent = firstNumber
    display.appendChild(contentDisplay);
    console.log('1er Nb:', firstNumber)
}

function handleSecondNumberClick(event) {
    display.textContent = '';
    addNumbers(dataStored);
    secondNumber.push(dataStored.join(""));
    secondNumber = secondNumber.slice((secondNumber.length -1))
    contentDisplay.classList.add('secondNumber');
    contentDisplay.textContent = secondNumber;
    display.appendChild(contentDisplay);
    console.log('2nd Nb:', secondNumber);
}


function typingOperator() {
    operatorButton.forEach(button => {
        button.addEventListener('click', function () {
            dataStored = [];
            isFirstNumberNotCompleted = false;
            operator.push(button.textContent);
            console.log('operator :', operator);
            console.log('firstNumber.length :', firstNumber.length);
            console.log('secondNumber.length :', secondNumber.length);
            isOperatorCompleted = true;
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                result = operate(parseFloat(firstNumber), operator[(operator.length - 2)], parseFloat(secondNumber));
                firstNumber[0] = result
                console.log('1er Nb:', firstNumber)
                contentDisplay.textContent = result;
                display.appendChild(contentDisplay);
                console.log(result);
            } else {
                typingNumber();
            }
        });
    });
}

function typingEqual() {
    equalButton.forEach(button => {
        button.addEventListener('click', function () {
            if (display.textContent != 0) {
            display.textContent = '';
            result = operate(parseFloat(firstNumber), operator[(operator.length - 1)], parseFloat(secondNumber));
            firstNumber[0] = result;
            secondNumber = [];
            contentDisplay.textContent = result;
            display.appendChild(contentDisplay);
            console.log(result);
            }
        });
    });
}

functionButton.forEach(button => {
    button.addEventListener('click', function () {
        switch (button.textContent) {
            case 'AC': location.reload()
                break;
            case '+/-': if (isFirstNumberNotCompleted) {
                firstNumber *= -1
                contentDisplay.textContent = firstNumber;
                console.log(firstNumber);
            } else {
                secondNumber *= -1;
                contentDisplay.textContent = secondNumber;
                console.log(secondNumber);
            }
                break;
            case '%': if (isFirstNumberNotCompleted) {
                firstNumber /= 100;
                contentDisplay.textContent = firstNumber;
                console.log(firstNumber);
            } else {
                secondNumber /= 100;
                contentDisplay.textContent = secondNumber;
                console.log(secondNumber);
            }
                break;
        }
    })
})


typingNumber();
typingOperator();
typingEqual();

