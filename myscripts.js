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

var firstNumber = '';
var isFirstNumberNotCompleted = true;
var operator = '';
var secondNumber = '';

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

function handleNumberClick(event) {
    display.textContent = '';
    firstNumber += event.target.textContent;
    contentDisplay.classList.add('firstNumber');
    contentDisplay.textContent = firstNumber;
    display.appendChild(contentDisplay);
    console.log('1er Nb:', firstNumber);
    typingOperator();
}

function handleSecondNumberClick(event) {
    display.textContent = '';
    secondNumber += event.target.textContent;
    contentDisplay.classList.add('secondNumber');
    contentDisplay.textContent = secondNumber;
    display.appendChild(contentDisplay);
    console.log('2nd Nb:', secondNumber);
}


function typingOperator() {
    operatorButton.forEach(button => {
        button.addEventListener('click', function () {
            isFirstNumberNotCompleted = false;
            operator = button.textContent;
            console.log('operator :', operator);
            isOperatorCompleted = true;
            typingNumber();
        });
    });
}

function typingEqual() {
    equalButton.forEach(button => {
        button.addEventListener('click', function () {
            display.textContent = '';
            result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
            contentDisplay.textContent = result;
            display.appendChild(contentDisplay);
            console.log(result);
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
typingEqual();

