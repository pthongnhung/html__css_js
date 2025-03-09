let arr = ["", false, 0, 5, 10, "Hello word!"];
let arrTruthy = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i]) {
        arrTruthy.push(arr[i]);
    }
}
console.log(arrTruthy);

