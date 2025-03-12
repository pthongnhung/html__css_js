let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let test2 = [];
let test3 = "abc";
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
            return;
        }
        let totalEven = arr.filter((item) => {
            return item % 2 === 0;
        }).reduce((accumulator, item) => {
            return ((accumulator + item))
        },0);
        let totalOdd = arr.filter((item) => {
            return item % 2 !== 0;
        }).reduce((accumulator, item) => {
            return ((accumulator + item));
        },0);
        console.log("totalEven: ",totalEven);
        console.log("totalOdd: ",totalOdd);
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);
