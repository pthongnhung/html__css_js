let number = +prompt("Nhap vao mot so nguyen N: ");
let sum=0;
if (number >= "A" && number <= "Z" || number >= "a" && number <= "z" || number <= 0
) {
    alert("Du lieu nhap khong hop le");
} else {
    for (let n = 1; n <= number; n++) {
        if (Number.isInteger(n)) {
            sum += n;
        }
    }
        document.write(" Tong cac so tu 1 den " + number + " la: ", sum);
}