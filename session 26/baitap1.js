let test1 = [1, 3, 4, 2, 5, 66, 44, 33, 23];
let test2 = [];
let test3 = "abc";
function filter(arr){
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
        }
        let result = arr.filter((item) => {
            return item >= 10;
        })
        console.log(result
        );
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);
