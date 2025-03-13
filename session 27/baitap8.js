let test1 = 2914;
let test2 = 3875;
let test3 = "1h8t";
function maxNumber(num) {
    if (Number.isInteger(num)) {
        let str = num.toString();
        let arr = str.split("");
        let max = arr.sort((a, b) => b - a).join("");
        console.log(max);
    } else {
        console.log("Du lieu khong hop le");
    }
}
maxNumber(test1);
maxNumber(test2);
maxNumber(test3);
