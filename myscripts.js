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

var display = document.getElementById('display');
var digitButton = document.querySelectorAll('.digit');
var operatorButton = document.querySelectorAll('.operator');
var functionButton = document.querySelectorAll('.function');
var equalButton = document.querySelectorAll('.equal');



digitButton.forEach(button => {
    button.addEventListener('click', function () {
        if (display.textContent === '0') {
            display.textContent = '';
            display.textContent = button.textContent;
            firstNumber = parseInt(display.textContent);
            console.log(firstNumber)
        }
        else {
            display.textContent += button.textContent;
            firstNumber = display.textContent;
            console.log(firstNumber)
        }
    })
    operatorButton.forEach(operatorButton => {
        operatorButton.addEventListener('click', function () {
            operator = operatorButton.textContent;

            digitButton.forEach(button => {
                button.addEventListener('click', function () {
                    display.textContent = '';
                    display.textContent += button.textContent;
                    secondNumber = parseInt(display.textContent);
                    console.log(secondNumber)
                })
            })
        })
    })
})

    equalButton.forEach(button => {
        button.addEventListener('click', function () {
            console.log(operate(parseInt(firstNumber), operator, parseInt(secondNumber)));
        })
    })



    // operatorButton.forEach(button => {
    //     button.addEventListener('click', function () {
    //         const operator = button.textContent;
    //     })
    // })

    functionButton.forEach(button => {
        button.addEventListener('click', function () {
            switch (button.textContent) {
                case 'AC': display.innerHTML = 0;
                    break;
                case '+/-': display.innerHTML *= -1;
                    break;
                case '%': display.innerHTML /= 100;
            }
        })
    })
