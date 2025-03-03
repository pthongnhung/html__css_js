let char = prompt("Nhap chu cai: ");
if(char.indexOf(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)!=-1) {
    alert("ky tu " + char + " khong phai chu cai");
}else if ((char >= "A" && char <= "Z") || char >= "a" && char <= "z") {
    alert("Ky tu " + char + " la chu cai");
} else {
    alert("ky tu " + char+" khong phai chu cai");
}