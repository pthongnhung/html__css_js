let arr = [2, 5, 7, 4, 1, 8, 6];
let search = +prompt("Nhap vao mot so bat ki: ");
if (arr.includes(search)) {
    console.log("Bingo")
} else {
    console.log("Chuc ban may man lan sau");
}