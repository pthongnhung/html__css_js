let number = [];
let input;
let index=0;
for (let i = 0; i < 10; i++) {
    input = +prompt("Nhap vao so nguyen thu " + (i + 1) + ": ");
    number.push(input);
};
let maxNumber = 0;
for (let i = 0; i < number.length; i++){
    if (number[i] > maxNumber) {
        maxNumber = number[i];
        index = i;
    }
}
if (number.length > 0) {
    console.log("So lon nhat: ",maxNumber);
    console.log("Vi tri: ",index);
} else {
    console.log("Khong co so lon nhat");
   
}