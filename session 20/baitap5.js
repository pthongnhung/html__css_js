let a = +prompt("Nhap so a: ");
let b = +prompt("Nhap so b: ");
let result=1;
if (isNaN(a) || isNaN(b)) {
    document.write("khong hop le");
} else {
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    document.write(result);
}

