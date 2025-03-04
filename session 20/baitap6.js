let number = parseInt(prompt("Nhap vao mot so nguyen bat ki: "));
let result = true;

if (number <= 1) {
    result = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i == 0) {
            result = false;
        }
    }
    if (result) {
        document.write(" la so nguyen to")
    } else {
        document.write(" khong la so nguyen to");
    }
}