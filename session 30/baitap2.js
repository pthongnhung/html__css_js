let books = [
    { id: 1, name: "Sách A", price: 50000, quantity: 10, category: "tieu thuyet" },
    { id: 2, name: "Sách B", price: 30000, quantity: 15, category: "hu cau" },
    { id: 3, name: "Sách C", price: 40000, quantity: 5, category: "tieu thuyet" },
    { id: 4, name: "Sách D", price: 20000, quantity: 20, category: "khoa hoc vien tuong" }
];
let choice;
let cart = [];
do {
    choice = +prompt(`
    1.Hiển thị danh sách sách theo thể loại 
    2.Thêm sách mới vào kho
    3.Tìm kiếm sách theo tên hoặc id.
    4.Mua sách 
    5.Sap xep sach theo gia
    6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
    7.Hiển thị tổng số lượng sách trong kho.
    8.Thoát chương trình.
    `)
    switch (choice) {
        case 1:
            showList(books);
            break;
        case 2:
            addBook(books);
            break;
        case 3:
            foundBook(books)
            break;
        case 4:
            buyBook(books)
            break;
        case 5:
            arrangeBook(books);
            break;
        case 6:
            calculatePrice();
            break;
        case 7:
            totalBook(books);
            break;
        case 8:
            break;
        default:
            break;
    }
} while (choice !==8 );
function showList(arr) {
    let choose = +prompt("1.thieu thuyet-2.hu cau-3.khoa hoc vien tuong");
    if (choose === 1) {
        let show = arr.filter((item) => item.category == "tieu thuyet");
        console.log(show);
    } else if (choose === 2) {
        let show = arr.filter((item) => item.category == "hu cau");
        console.log(show);
    } else if (choose == 3) {
        let show = arr.filter((item) => item.category == "khoa hoc vien tuong");
        console.log(show);
    } else {
        console.log("The loai khong hop le vui long nhap lai");
    }
}
function addBook(arr) {
    let n = +prompt("Ban muon them vao kho may quyen sach: ");
    for (let i = 0; i < n; i++){
        let id = arr[arr.length - 1].id++;
        let name = prompt("Nhap ten sach");
        let price=+prompt("Nhap gia sach")
        let quantity=prompt("Nhap so luong:")
        let category = prompt("Nhap the loai sach: ");
        books.push({id:id,name:name,price:price,quantit:quantity,category:category})
    }
}
function foundBook(arr) {
    let choose=prompt("1.Tim theo id-2.Tim theo ten")
    if (choose == 1) {
        let foundId = +prompt("Nhap id can tim kiem: ");
        let filterr = arr.filter((item) => item.id == foundId);
        if (filterr.length == 0) {
            console.log("Khong ton tai sach");
        } else {
            console.log(filterr);
        }
    } else if (choose == 2) {
        let foundName = prompt("Nhap ten sach: ");
        let filterr = arr.filter((item) => item.name == foundName);
        if (filterr.length == 0) {
            console.log("Khong ton tai sach");
        } else {
            console.log(filterr);
        }
    } else {
        console.log("vui long nhap lai");
    }
}
function buyBook(arr) {
    let inputId = +prompt("Nhap id sach can mua: ")
    let index = arr.findIndex((item) => item.id == inputId);
    if (index == -1) {
        console.log("Khong ton tai sach");
    } else {
        let n = +prompt("Nhap so luong sach can mua");
        if (n > arr[index].quantity || arr[index].quantity == 0) {
            console.log(`So luong sach con trong kho ${arr[index].quantity} la `);
        } else {
            arr[index].quantity -= n;
            let result = cart.findIndex((item) => item.id == arr[index].id);
            if (result == -1) {
                cart.push({ id: inputId, name: arr[index].name, price: arr[index].price, category: arr[index].category, quantity: n })
            } else {
                cart[result].quantity += n;
            }
            console.log("Gio hang hien tai: ",cart);
        }
    }
}
function arrangeBook(arr) {
    let choice = +prompt("1.Tang dan-2.Giam dan");
    if (choice == 1) {
        arr.sort((a, b) => a.price - b.price);
        console.log(`san pham sau khi duoc sap xep theo gia tang dan`);
        for (let key of arr) {
            console.log(`id: ${key.id}\nname:${key.name}\nprice:${key.price}\nquantity:${key.quantity}\nquantity:${key.category}\n\n`);
        }
    } else if (choice == 2) {
        arr.sort((a, b) => b.price - a.price);
        console.log(`san pham sau khi duoc sap xep theo gia giam dan`);
        for (let key of arr) {
            console.log(`id: ${key.id}\nname:${key.name}\nprice:${key.price}\nquantity:${key.quantity}\nquantity:${key.category}\n\n`);
        }
    } else {
        console.log("lua chon khong hop le");
    }
}
function calculatePrice() {
    let total = cart.reduce((sum, item) => sum += item.price * item.quantity, 0)
    console.log("cai gia phai tra: ", total);
}
function totalBook(arr) {
    let total = arr.reduce((acc, item) => acc += item.quantity);
    console.log("Tong so sach con lai: ",total);
}
