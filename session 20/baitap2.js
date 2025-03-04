let number = prompt("Nhap vao mot so nguyen N: ");
if (number >= "A" && number <= "Z" || number >= "a" && number <= "z" || number <= 0
) {
    alert("Du lieu nhap khong hop le");
} else {
    document.write("Cac so chia het cho 5 tu 1 den " + number + " la: ");
    for (let n = 1; n < number; n++){
        if (n % 5 == 0) {
            document.write(" ", n  );
        }
    }
}