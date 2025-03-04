let str = prompt("Nhap vao mot chuoi: ");
let search = prompt("Nhap vao tu can tim kiem: ");
let found = false;
for (let i = 0; i < str.length; i++){
    if (search == str[i]) {
        found = true;
    }
}
if (found) {
    document.write("Ton tai tu can tim kiem");
} else {
    document.write("khong ton tai tu can tim kiem");
}