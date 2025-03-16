let bookManagement = [];
let choice;
do {
    console.log("1.Them sach moi");
    console.log("2.Hien thi danh sach sach");
    console.log("3.Tim kiem sach theo tieu de");
    console.log("4.Cap nhat trang thai muon/tra sach theo ID sach");
    console.log("5.Xoa sach theo id sach ra khoi danh sach");
    console.log("6.Sap xep sach theo gia tang dan");
    console.log("7.Thoat");
    choice = +prompt("Moi nhap lua chon cua ban");
    switch (choice) {
        case 1:
            //them sach moi
            addBook(bookManagement);
            break;
        case 2:
            //hien thi danh sach
            showList(bookManagement)
            break;
        case 3:
            //tim kiem sach theo ten
            console.log(foundName(bookManagement));
            break;
        case 4:
            updateAvailable(bookManagement);
            break;
        case 5:
            deteteBook(bookManagement);
            break;
        case 6:
            softPrice(bookManagement);
            break;
        case 7:
            break;
        default:
            console.log("VUi long nhap lua chon hop le");
    }
} while (choice != 7);
function addBook(arr) {
    let quantity = prompt("Ban muon them may quyen sach: ");
    for (let i = 0; i < quantity; i++) {
        const id=i+1;
        const title = prompt("Nhap ten sach cua quyen thu " + (i + 1) + ": ");
        const author = prompt("Nhap ten tac gia: ");
        const year = +prompt("Nhap nam xuat ban: ");
        const price = +prompt("Nhap gia tien: ");
        const isAvailable = prompt("Trang thai muon sach: ");
        bookManagement.push({ id, title, author, year, price, isAvailable });
    }
}
function showList(arr) {
    arr.map((item) => console.log(`id:${item.id}-ten sach:${item.title}-tac gia:${item.author}-nam xuat ban:${item.year}-gia sach:${item.price}-trang thai muon sach: ${item.isAvailable}`));
}
function foundName(arr) {
    let found = prompt("Nhap ten sach muon tim: ").trim();
    return arr.filter((item) => {
        return item.title.toLowerCase().includes(found.toLowerCase());
    })
}
function updateAvailable(arr) {
    let foundID = +prompt("Nhap ID sach ban muon cap nhat: ");
    let flag = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id == foundID) {
            flag = 1;
            if (arr[i].isAvailable == "true") {
                arr[i].isAvailable = "false";
            } else {
                arr[i].isAvailable = "true";
            }
        }
        if (flag == 0) {
            console.log("Khong tim thay sach");
        }
    }
}
function deteteBook(arr) {
    let searchID = +prompt("Nhap ID sach ma ban muon xoa");
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == searchID) {
            flag = 1;
            arr.splice(searchID, 1);
        }
        if (flag == 0) {
            console.log("Khong tim thay sach");
        }
    }
}
function  softPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
}