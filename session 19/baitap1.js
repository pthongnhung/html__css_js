let month = +prompt("Nhap thang: ");
if (month < 0 || month > 12) {
    alert("Thang khong hop le");
} else {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        alert("Thang " + month + "co 30 ngay");
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 12) {
        alert("Thang " + month + " co 31 ngay");
    } else {
        alert("Thang " + month +" co 28 hoac 29 ngay nam nhuan");
    }
}