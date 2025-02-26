let firstNumber = parseFloat(prompt("nhap so thu 1: "));
let secondNumber = parseFloat(prompt("nhap so thu 2: "));

if (firstNumber > secondNumber) {
    let temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
}

let numRandom = Math.random() * (secondNumber - firstNumber) + firstNumber;
console.log(numRandom);