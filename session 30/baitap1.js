let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category:"Món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category:"món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category:"món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category:"món ăn dân tôc Kinh"
    }
]
let cart = [];
let choice;
do {
    console.log("1.Hiển thị các sản phẩm theo tên danh mục");
    console.log("2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm");
    console.log("3.Sắp xếp các sản phẩm trong cửa hàng theo giá");
    console.log("4.Tính số tiền thanh toán trong giỏ hàng")
    console.log("5.Thoát");
    choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            showList(products)
            break;
        case 2:
            choiceProduct(products)
            break;
        case 3:
            arrangeProduct(products)
            break;
        case 4:
            calculatePrice();
            break;
        case 5:
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ");
            break;
    }
} while (choice !== 5);
function showList(arr) { //Hiển thị sản phẩm theo danh mục
    let choice = +prompt(`1: Các món ăn dân tộc Kinh-2: Các món ăn dân tộc Mông`);
    if (choice == 1) {
        let result = arr.filter((item) => item.category == "món ăn dân tộc Kinh");
        console.log(result);
    } else if (choice == 2) {
        let resultt = arr.filter((item) => item.category == "món ăn dân tộc Mông");
        console.log(resultt);
    } else {
        console.log("Lựa chọn không hợp lệ")
    }
}
function choiceProduct(arr) { 
    let inputId = +prompt("Nhap id can tim kiem: ");
    let result = arr.findIndex((item) => item.id == inputId);
    if (result==-1) {
        console.log("San pham khong co trong cua hang");
    } else {
        let quantityy = +prompt("Nhap so luong muon mua");
        if (quantityy > arr[result].quantity || arr[result].quantity==0) {
            console.log(`San pham chi con lai ${arr[result].quantity} `);
        } else {
            arr[result].quantity = arr[result].quantity - quantityy;
            //them vao gio hang
            //kiem tra xem san pham da co trong cua hang hay chua neu co thi cap nhat so luong con neu khong co thi them vao bthuong
            let index = cart.findIndex((item) => item.id == inputId);
            if (index == -1) {//san pham chua co tron gio hang
                cart.push({ id: inputId, name: arr[inputId].name,price:arr[inputId].price, quantity: quantityy })
                // cart.push({ ...arr[result], quantity: quantityy });
                console.log(cart);
            } else {//sp da co trong gio hang
                //chi can cap nhat so luong
                cart[index].quantity += quantityy;
                console.log(cart);
            }
        }
    }
}
function arrangeProduct(arr) {
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
    console.log("cai gia phai tra: ",total);
}
