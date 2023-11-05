const containerKeyBord = document.getElementById('keybord')

const digitCode = [0,1,2,3,4,5,6,7,8,9] 
const digitCodeSorted = digitCode.sort((a,b) => b-a);
const operator = ['.','%','(',')','+','-','/','x','AC','=']


/*for (let index = 0; index < (4*5); index++) {
    const digit = document.createElement('div');
    digit.classList.add('keycap');
    containerKeyBord.appendChild(digit); 
}*/

digitCodeSorted.forEach(digit => {
    const button = document.createElement('button');
    button.textContent = digit
    button.classList.add('keycap');
    containerKeyBord.appendChild(button);
});
