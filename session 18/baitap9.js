let hour = +prompt("Nhap gio(0-23): ");
let minute = +prompt("Nhap phut(0-59): ");
let second = +prompt("Nhap giay(0-59): ");
let period = hour > 12 ? "PM" : "AM";
if (hour > 12) {
    hour -= 12;
} else if (hour == 0) {
    hour = 12;
}
let formattime = hour + ":" +(minute < 10 ? "0"+ minute: minute) + ":" + (second < 10 ? "0" + second : second) + period;
alert(formattime);
