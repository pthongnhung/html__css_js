let num = +prompt("Nhap vao mot so nguyen: ");
let Flag = true;
if (!Number.isInteger(num)) {
    console.log("Nhap lai so nguyen");
} else {
    for (i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            Flag = false;
            console.log("Day khong phai so nguyen to");
            break;
        }
    }
    if (Flag) {
        console.log("Day la so nguyen to");
    }
}