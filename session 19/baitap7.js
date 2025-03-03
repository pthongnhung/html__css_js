let a = +prompt("Nhap so a: ");
let b = +prompt("Nhap so b: ");
let c = +prompt("Nhap so c: ");

let maxNum = a > b ? (a > c ? a : c) : (b > c ? b : c);
document.write("So lon nhat la: " + maxNum);
