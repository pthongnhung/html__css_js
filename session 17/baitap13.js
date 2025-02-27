let monney = +prompt("Nhap vao so tien gui: ");
let month = +prompt("Nhap vao so thang gui: ");
let interest = (monney * month *4.3) / (100*12);
document.write("so tien lai sau khi gui: ",interest.toFixed(2));