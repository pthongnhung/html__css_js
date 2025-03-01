let year = +prompt("Nhap mot nam bat ky:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.write(year + " la nam nhuan");
} else {
    document.write(year + " khong phai la nam nhuan");
}