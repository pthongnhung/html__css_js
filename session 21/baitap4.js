console.log("Giai phuong trinh bac 2:  ax^2 + bx + c = 0");
let a = +prompt("Nhap a: ");
let b = +prompt("Nhap b: ");
let c = +prompt("Nhap c: ");
if (a == 0) {
    console.log("Day khong phai phuong trinh bac 2")
} else {
    let denta = b * b - 4 * a * c;
    if (denta<0) {
        console.log("Phuong trinh vo nghiem");
    } else if (denta == 0) {
        let x = -b / (2 * a);
        console.log("Phuong trinh co nghiem kep: ",x)
    } else {
        let x1 = (-b + Math.sqrt(denta) / (2 * a));
        let x2 = (-b - Math.sqrt(denta) / (2 * a));
        console.log("Phuong trinh co 2 nghiem: " + x1 + " ," + x2 + " ");
    }
}