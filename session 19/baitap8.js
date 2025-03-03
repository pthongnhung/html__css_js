let month = +prompt("Nhap vao mot thang bat ki trong nam: ");
if (month < 0 || month > 12) {
    document.write("Thang khong hop le");
} else {
    if (month >= 1 && month <= 3) {
        document.write("Mua xuan");
    } else if (month >= 4 && month <= 6) {
        document.write("Mua ha");
    } else if (month >= 7 && month <= 9) {
        document.write("Mua thu");
    } else {
        document.write("Mua dong");
    }
}
