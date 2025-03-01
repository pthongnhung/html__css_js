let Toan = +prompt("Nhap diem toan: ");
let Van = +prompt("Nhap diem van: ");
let Anh = +prompt("Nhap diem anh: ");
let diemTB = (Toan + Van + Anh) / 3;
if (diemTB.toFixed(1) >= 8.0) {
    document.write("Gioi")
} else if (6.5 < diemTB.toFixed(1) && diemTB.toFixed(1) < 7.9) {
    document.write("Kha");
} else if (5.0 < diemTB.toFixed(1) && diemTB.toFixed(1) < 6.4) {
    document.write("Trung binh");
} else {
    document.write("Yeu");
}
