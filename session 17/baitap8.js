const date1 = new Date(prompt("Moi ban nhap ngay thu 1 duoi dang YYYY-MM-DD: "));
const date2 = new Date(prompt("Moi ban nhap ngay thu 1 duoi dang YYYY-MM-DD: "));
let differenceInTime = Math.abs(date2 - date1);
let differenceInDay = differenceInTime / (1000 * 3600 * 24);
console.log("Do lech giua 2 ngay la: ", differenceInDay);
