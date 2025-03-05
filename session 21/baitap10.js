let n = +prompt("Nhap vao n so nguyen to: ");
let count = 0;
let num = 2;
if (!Number.isInteger(n)) {
    console.log("Nhap lai so nguyen");
} else {
    while (count < n) {
        let Flag = true;
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i == 0) {
                Flag = false;
                break;
            }
        }
        if (Flag) {
            console.log(" ", num);
            count++;
        }
        num++;
    }
}