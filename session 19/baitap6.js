let a = parseFloat(prompt("nhap a: "));
let b = parseFloat(prompt("nhap b: "));
let c = parseFloat(prompt("nhap c: "));

let denta = b * b - 4 * a * c;

if (a == 0) {
    document.write("day khong phai phuong trinh bac 2");
} else {
    if (denta < 0) {
        document.write("Phuong trinh vo nghiem");
    } else if (denta == 0) {
        let x = -b / (2*a);
        document.write("Phuong trinh co nghiem kep x= ", x);
    } else {
        let x1 = ((-b + Math.sqrt(denta)) / (2 * a));
        let x2 = ((-b - Math.sqrt(denta)) / (2 * a));
        document.write("Phuong trinh co 2 nghiem phan biet x1=" + x1+ "; x2 = "+x2+"");
    }
}
