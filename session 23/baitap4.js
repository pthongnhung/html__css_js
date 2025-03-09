let arr = [];
let n = +prompt("ban muon them vao mang may ki tu: ");
let number = [];
if (n > 0) {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhap vao ki tu thu " + (i + 1) + ": ");
        arr.push(input);
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let num =parseInt(arr[i])
        if (Number.isInteger(num)) {
            number[i] = arr[i];
        }
    }
} else {
    console.log("Khong co ki tu so");
}
if (number.length > 0) {
    console.log(number);
} else {
    console.log("Khong co ki tu so");
}