let number = [];
let newNumber = [];
let flag = true;
let input;
for (let i = 0; i < 10; i++) {
     input = +prompt("Nhap vao so nguyen thu " + (i + 1) + ": ");
    number.push(input);
};

for (let i = 0; i < number.length; i++) {
    if (number[i] >= 10) {
        newNumber.push(number[i]);
    }
}
if (flag) {
    console.log(newNumber);
} else {
    console.log(("Khong co so nao lon hon 10"));
    
}
