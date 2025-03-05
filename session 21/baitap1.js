let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Nhap vao so nguyen thu: " + i))
    if (num % 2 != 0) {
        sum += num;
    }
}
document.write("Tong cac so le: ", sum);


