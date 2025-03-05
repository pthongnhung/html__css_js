let money = +prompt("Nhap so tien ban dau: ");
let interest = +prompt("Nhapvao lai suat: ");
let month = +prompt("Nhap vao so thang gui: ");
if (isNaN(money) || isNaN(interest) || isNaN(month)) {
    console.log("Vui long nhap lai so");
} else {
    let moneyReceived = money * Math.pow(1 + (interest / 100), month);
    let moneyInterest = moneyReceived - money;
    console.log("Tien lai: ", moneyInterest.toFixed(3));
    console.log("So tien nhan duoc: ",moneyReceived.toFixed(3));
}


