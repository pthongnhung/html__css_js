let choice = +prompt("ban muon doi sang VND an phim 1, muon doi sang USD an phim 2");
let result;
if (choice == 1) {
    let USD = +prompt("Nhap so USD muon doi sang VND: ");
    result = USD * 23000;
    console.log(result , "USD");
} else if (choice == 2) {
    let VND = +prompt("Nhap so VND muon doi sang USD: ");
    result = VND / 23000;
    console.log(result, "VND");
}