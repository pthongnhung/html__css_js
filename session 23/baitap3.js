let n = +prompt("Nhap vao so phan tu cua mang: ");
let number = [];
let count = 0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        input = +prompt("Nhap vao so nguyen thu " + (i + 1) + ": ");
        number.push(input);
    }
} else {
    console.log("So luong phan tu khong hop le");   
}
for (let i = 0; i < number.length; i++){
    if (number[i] < 0) {
        count++;
    }
}
if (number.length > 0) {
    console.log(count);
} else if (number.length < 0 || n == 0) {
    console.log("Mang khong co phan tu");
}