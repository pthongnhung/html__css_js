let math = parseFloat(prompt("Moi nhap diem toan: "));
let physics = parseFloat(prompt("Moi nhap diem vat ly: "));
let chemistry = parseFloat(prompt("Moi nhap diem hoa hoc: "));
let averageScore = (math + physics + chemistry) / 3;
document.write("Diem trung binh 3 mon hoc la: ", averageScore);