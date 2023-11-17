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
        var digitButton = document.querySelectorAll('.digit');


            digitButton.forEach(button => {
                button.addEventListener('click', function() {
                    display.innerHTML = '';
                        display.innerHTML += button.textContent
                        var number = display.textContent
                        console.log(operate(number,5))
                })
            })
    
    })

