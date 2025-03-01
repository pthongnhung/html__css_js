let a = +prompt("Moi ban nhap so a: ");
let b = +prompt("Moi ban nhap so b: ");
let operation = prompt("Moi ban nhap cac phep tinh (+,-,*,/): ");
let result;
if (operation == "+") {
    result = a + b;
} else if (operation == "-") {
    result = a - b;
} else if(operation == "*"){
    result = a * b;
} else {
    result = a / b;
}
alert("ket qua cua phep tinh tren: "+ result);
