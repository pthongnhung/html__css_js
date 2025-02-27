let number = +prompt("Hay nhap vao 1 so bat ki: ");
let sqrt;
let result;
if (isNaN(number) || number < 0) {
    document.write("so ban nhap khong hop le");
} else {
    sqrt = Math.sqrt(number);
    result = sqrt.toFixed(2);
    document.write("can bac 2 cua so do la: ", result);
}