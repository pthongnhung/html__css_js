let passWord = "123456";
let login = prompt("Nhap mat khau de dang nhap: ");
    if (passWord === login) {
        console.log("Dang nhap thanh cong mat khau la: ", passWord);
    } else {
        console.log("Dang nhap khong thanh cong");
    }