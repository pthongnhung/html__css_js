let arr = [];
let n = +prompt("ban muon them vao mang may ki tu: ");
let number = [];
let sum = 0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhap vao ki tu thu " + (i + 1) + ": ");
        arr.push(input);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i])
        if (Number.isInteger(num)) {
            number[i] = arr[i];
            
        }
    }
} else if (n==0) {
    console.log("Mang khong co phan tu");
    
} else {
    console.log("So phan tu khong duoc am");
}
if (number.length > 0) {
    for (let i = 0; i < number.length; i++) {
        let numbers = parseInt(number[i]);
        sum += numbers;
    }
    console.log(sum);
} else {
    console.log("Khong co phan tu nao la so");
}