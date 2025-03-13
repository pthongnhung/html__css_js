let test1 = [5, 6, 8, 3, 4, 2, 7];
let test2 = [5, 9, 6, 4, 1, 8, 3];
let test3 = "abc"
function softArr(arr) {
    if (Array.isArray(arr)) {
        let even = arr.filter((item) => item % 2 == 0);
        even.sort((a, b) => a - b);
        let evenIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                arr[i] = even[evenIndex++]
            }
        }
        console.log(arr);
    } else {
        console.log("Du lieu khong hop le");
   }
}
softArr(test1);
softArr(test2);
softArr(test3);
