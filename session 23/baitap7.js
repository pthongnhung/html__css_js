let arr = [];
let n = +prompt("Ban muon them may phan tu vao mang: ");
if (n > 0) {
    for (let i = 0; i < n; i++){
        let input = +prompt("Nhap ki tu thu " + (i + 1) + ": ");
        arr.push(input);
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        max2 = arr.at(-2);
    }
    console.log(max2);
    
} else if (n == 0) {
    console.log("Mang khong co phan tu nao");
} else {
    console.log("So luong phan tu khong duoc nho hon 0");
}