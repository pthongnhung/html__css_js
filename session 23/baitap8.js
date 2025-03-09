let arr = [];
let n = +prompt("Ban muon them may phan tu vao mang: ");
let isFibonacci = true;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhap ki tu thu " + (i + 1) + ": ");
        arr.push(input);
    }
    for (let i = 2; i < arr.length; i++){
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }
} else if (n == 0) {
    console.log("Mang khong co phan tu nao");
} else {
    console.log("So luong phan tu khong duoc nho hon 0");
}
if (isFibonacci) {
    console.log("La day finonacci");
} else {
    console.log("Khong phai day fibonacci");
}