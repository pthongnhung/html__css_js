let experience = +prompt("Nhap so nam kinh nghiem cua nhan vien:");
if (experience < 1) {
    document.write("Moi vao nghe");
} else if (experience >= 1 && experience <= 3) {
    document.write("Nhan vien co kinh nghiem");
} else if (experience >= 4 && experience <= 6) {
    document.write("Chuyen vien");
} else if (experience > 6) {
    document.write("Quan ly");
} else {
    document.write("Vui long nhap so hop le");
}