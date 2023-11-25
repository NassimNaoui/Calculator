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
const contentDisplay2 = document.createElement('div');
const displayFirstNumber = document.querySelectorAll('firstNumber');
const displaySecondNumber = document.querySelectorAll('secondNumber');

//// code initial

var typingOperatorNotCalled = true;


function typingFirstnumber() {
    firstNumber = ''
    digitButton.forEach(button => {
        button.addEventListener('click', function () {
            display.textContent = '';
            firstNumber += button.textContent;
            contentDisplay.classList.add('firstNumber');
            contentDisplay.textContent = firstNumber;
            display.appendChild(contentDisplay)
            console.log('1er Nb:', firstNumber);
            typingOperator();
        })
    })
}

// function typingFirstnumberReverse() {
//     // firstNumber = contentDisplay.textContent
//     digitButton.forEach(button => {
//         button.addEventListener('click', function () {
//             displayFirstNumber.remove();
//         })
//     })
// }


function typingOperator(operator) {
    typingOperatorNotCalled = false;
    operator = ''
    operatorButton.forEach(button => {
        button.addEventListener('click', function () {
            operator = button.textContent;
            console.log('operator :', operator);
            typingSecondnumber();
        })
    })
}

function typingSecondnumber(secondNumber) {
    secondNumber = ''
    digitButton.forEach(button => {
        button.addEventListener('click', function () {
            if (contentDisplay) {
                display.removeChild(contentDisplay);
            } else {
                secondNumber += button.textContent;
                contentDisplay2.classList.add('secondNumber');
                contentDisplay2.textContent = secondNumber;
                display.appendChild(contentDisplay2)
                console.log('2nd Nb :', secondNumber);
            }
        })
    })
}

typingFirstnumber()

/// autres fonctions du code initial

// operatorButton.forEach(operatorButton => {
//         operatorButton.addEventListener('click', function () {
//             operator = operatorButton.textContent;


// equalButton.forEach(button => {
//         button.addEventListener('click', function () {
//             console.log(operate(parseInt(firstNumber), operator, parseInt(secondNumber)));
//         })
//  })

//  functionButton.forEach(button => {
//         button.addEventListener('click', function () {
//             switch (button.textContent) {
//                 case 'AC': display.innerHTML = 0;
//                     break;
//                 case '+/-': display.innerHTML *= -1;
//                     break;
//                 case '%': display.innerHTML /= 100;
//             }
//         })
//  })