let name = prompt("Nhap ten: ");
let passWord;
if (name == "ADMIN") {
    passWord = prompt("Nhap mat khau: ");
    if (passWord =="TheMaster") {
        document.write("Welcome");
    } else if (passWord==null) {
        document.write("Cancelled");
    } else {
        document.write("I Don't know you");
    }
} else if (name==null) {
    document.write("Cancelled");
} else {
    document.write("I Don't know you");
}