let num = +prompt("Nhap mot so bat ki: ");
if (num % 3 == 0 && num % 5 == 0) {
    console.log("So "+num+" chia het cho ca 3 va 5 ");
} else {
    console.log("So " + num + " khong chia het cho ca 3 va 5 ");
}