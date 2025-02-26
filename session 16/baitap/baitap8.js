let firstNumber = prompt("Moi nhap so thu 1: ");
let secondNumber = prompt("Moi nhap so thu 2: ");
let thirdNumber = prompt("Moi nhap so thu 3: ");
let maxNumber;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    maxNumber = firstNumber;
} else if(firstNumber<secondNumber || firstNumber < thirdNumber) {
    if (secondNumber > thirdNumber) {
        maxNumber = secondNumber;
    } else {
        maxNumber = thirdNumber;
    }
}
document.write("So lon nhat trong ba so la: ", maxNumber);