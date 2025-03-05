let num = +prompt("Nhap vao so nguyen bat ki: ");
if (!Number.isInteger(num)) {
    console.log("Vui long nhap vao so nguyen");
} else {
    for (let i = 1; i <= num;i++){
        if (num % i == 0) {
            console.log(i);
        }
    }
}