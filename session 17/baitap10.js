let n = +prompt("Moi ban nhap so n: ");
let nsqrt = Math.sqrt(n);
let result = Number.isInteger(nsqrt) ? `${n} la so chinh phuong` : `${n} khong phai la so chinh phuong`;
document.write(result);
