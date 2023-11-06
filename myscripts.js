const containerKeyBordMid = document.getElementById('keyboard-mid')
const containerKeyBordLeft = document.getElementById('keyboard-left')
const containerKeyBordRight = document.getElementById('keyboard-right')

const digitCode = [1,2,3,4,5,6,7,8,9] 
const digitCodeSorted = digitCode.sort((a,b) => b-a);
const operatorLeft = ['%',')','(','AC']
const operatorRight = ['+','-','/','x']
const operatorBottom = ['=','.',0]


/*for (let index = 0; index < (4*5); index++) {
    const digit = document.createElement('div');
    digit.classList.add('keycap');
    containerKeyBord.appendChild(digit); 
}*/

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