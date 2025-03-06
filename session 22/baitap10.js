let choice;
let arr = [];
do {
    console.log("1. Nhap vao mang");
    console.log("2. Hien thi mang");
    console.log("3. Them phan tu");
    console.log("4. Sua phan tu");
    console.log("5. Xoa phan tu");
    console.log("6. Thoat");
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            let length = +prompt("Ban muon nhap may phan tu vao mang: ");
            for (let i = 1; i <= length; i++) {
                let element = +prompt("Nhap phan tu thu "+(i)+": ");
                arr.push(element);
            }
            break;
        case 2:
            if (arr.length == 0) {
                console.log("Mang rong");
            } else {
                console.log("Cac phan tu trong mang: ", arr);
            }
            break;
        case 3:
            let add = +prompt("Ban muon them phan tu nao vao trong mang: ");
            arr.push(add);
            break;
        case 4:
            let update = +prompt("Ban muon sua phan tu o vi tri nao: ");
            let value = +prompt("ban muon sua thanh: ");
            arr.splice(update, 1, value);
            break;
        case 5:
            let deletee = +prompt("Ban muon xoa phan tu o vi tri nao: ");
            arr.splice(deletee, 1);
            break;
        case 6:
            break;
        default:
            console.log("vui long nhap lai tu 1-6: ");
    }
} while (choice != 6);