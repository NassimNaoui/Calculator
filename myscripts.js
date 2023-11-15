const containerKeyBordMid = document.getElementById('keyboard-mid')
const containerKeyBordLeft = document.getElementById('keyboard-left')
const containerKeyBordRight = document.getElementById('keyboard-right')

const digitCode = [1,2,3,4,5,6,7,8,9] 
const digitCodeSorted = digitCode.sort((a,b) => b-a);
const operatorLeft = ['%',')','(','AC']
const operatorRight = ['+','-','/','x']
const operatorBottom = ['=','.',0]

digitCodeSorted.forEach(digit => {
    const button = document.createElement('button');
    button.textContent = digit
    button.classList.add('keycap');
    containerKeyBordMid.appendChild(button);
});

operatorBottom.forEach(digit => {
    const button = document.createElement('button');
    button.textContent = digit
    button.classList.add('keycap');
    containerKeyBordMid.appendChild(button);
});


operatorRight.forEach(digit => {
    const button = document.createElement('button');
    button.textContent = digit
    button.classList.add('keycap');
    containerKeyBordRight.appendChild(button);
});

operatorLeft.forEach(digit => {
    const button = document.createElement('button');
    button.textContent = digit
    button.classList.add('keycap');
    containerKeyBordLeft.appendChild(button);
});


const add = function (a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}


var operator = multiply

function operate (firstNumber,secondNumber) {
    switch (operator) {
        case add : return add(firstNumber,secondNumber);
        break;
        case subtract : return subtract(firstNumber,secondNumber);
        break;
        case multiply : return multiply(firstNumber,secondNumber);
        break;
        case divide : return divide(firstNumber,secondNumber);
        break;
        default:
    }
}



document.addEventListener('DOMContentLoaded',function() {

        var display = document.getElementById('display');
        var digitButton = document.querySelectorAll('#keyboard-mid .keycap');
    
    // displaying the first number
    
        digitButton.forEach(button => {
            button.addEventListener('click', function() {
                    display.value += button.textContent
                    var number = display.value
                    console.log(operate(number,5))
            })
        })
    })

