let numOdd = 0;
let numEven = 0;

for (let i = 1; i <=5; i++){
    let n = +prompt(`Nhap vao so nguyen thu ${i}`);
    if (n % 2 == 0) {
        numEven++;
    } else {
        numOdd++;
    }
}
console.log(`co ${numEven} chan`);

console.log(`co ${numOdd} le`);
