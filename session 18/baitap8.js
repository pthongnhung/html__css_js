let a = +prompt("Nhap do dai canh a: ");
let b = +prompt("Nhap do dai canh b: ");
let c = +prompt("Nhap do dai canh c: ");

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giac deu");
    } else if (a === b || b === c || a === c) {
        alert("Tam giac can");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Tam giac vuong");
    } else {
        alert("Tam giac thuong");
    }
} else {
    alert("Khong phai tam giac hop le");
}