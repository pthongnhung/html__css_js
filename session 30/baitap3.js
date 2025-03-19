let phones = [
    { id: 1, name: "Samsung Galaxy S21", price: 20000, quantity: 10, brand: "Samsung" },
    { id: 2, name: "iPhone 13", price: 25000, quantity: 5, brand: "Apple" },
    { id: 3, name: "Xiaomi Mi 11", price: 15000, quantity: 8, brand: "Xiaomi" },
    { id: 4, name: "Samsung Galaxy Note 20", price: 22000, quantity: 12, brand: "Samsung" }
];

let cart = [];

function showPhonesByBrand(brand) {
    let result = phones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
    console.log(`Danh sách điện thoại của hãng ${brand}:`);
    console.log(result);
}

function addPhoneToStore() {
    let id = +prompt("Nhập ID điện thoại:");
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng điện thoại:");
    let brand = prompt("Nhập hãng điện thoại:");

    phones.push({ id, name, price, quantity, brand });
    console.log("Điện thoại đã được thêm vào cửa hàng.");
}

function searchPhone() {
    let searchTerm = prompt("Nhập tên hoặc ID của điện thoại:");
    let result = phones.find(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.id == searchTerm);

    if (result) {
        console.log("Điện thoại tìm thấy:", result);
    } else {
        console.log("Không tìm thấy điện thoại với thông tin đã nhập.");
    }
}

function buyPhone() {
    let inputId = +prompt("Nhập ID điện thoại cần mua:");
    let index = phones.findIndex(phone => phone.id === inputId);

    if (index === -1) {
        console.log("Không tồn tại điện thoại với ID này.");
    } else {
        let quantityToBuy = +prompt("Nhập số lượng điện thoại cần mua:");
        if (quantityToBuy > phones[index].quantity || phones[index].quantity === 0) {
            console.log(`Số lượng điện thoại còn trong kho là: ${phones[index].quantity}`);
        } else {
            phones[index].quantity -= quantityToBuy;
            let cartIndex = cart.findIndex(item => item.id === phones[index].id);

            if (cartIndex === -1) {
                cart.push({ id: phones[index].id, name: phones[index].name, price: phones[index].price, quantity: quantityToBuy });
            } else {
                cart[cartIndex].quantity += quantityToBuy;
            }
            console.log("Giỏ hàng hiện tại:", cart);
        }
    }
}

function checkout() {
    let totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("Tổng tiền giỏ hàng:", totalAmount);
    cart = []; // Xóa toàn bộ giỏ hàng sau khi thanh toán
    console.log("Thanh toán thành công, giỏ hàng đã được xóa.");
}

function sortPhonesByPrice() {
    let choice = +prompt("1. Sắp xếp theo giá tăng dần\n2. Sắp xếp theo giá giảm dần\nChọn: ");

    if (choice === 1) {
        phones.sort((a, b) => a.price - b.price);
        console.log("Điện thoại đã được sắp xếp theo giá tăng dần:");
    } else if (choice === 2) {
        phones.sort((a, b) => b.price - a.price);
        console.log("Điện thoại đã được sắp xếp theo giá giảm dần:");
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }

    console.log(phones);
}

function showTotalMoneyInStore() {
    let totalMoney = phones.reduce((sum, phone) => sum + (phone.price * phone.quantity), 0);
    console.log("Tổng số tiền của các điện thoại trong kho:", totalMoney);
}

function showTotalQuantityByBrand() {
    let brandSummary = phones.reduce((acc, phone) => {
        acc[phone.brand] = (acc[phone.brand] || 0) + phone.quantity;
        return acc;
    }, {});

    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let brand in brandSummary) {
        console.log(`${brand}: ${brandSummary[brand]}`);
    }
}

// Menu chương trình
let choice;
do {
    console.log("1. Hiển thị danh sách điện thoại theo hãng");
    console.log("2. Thêm điện thoại mới vào cửa hàng");
    console.log("3. Tìm kiếm điện thoại theo tên hoặc ID");
    console.log("4. Mua điện thoại");
    console.log("5. Thanh toán tất cả điện thoại trong giỏ hàng");
    console.log("6. Sắp xếp điện thoại theo giá");
    console.log("7. Hiển thị tổng số tiền của các điện thoại trong kho");
    console.log("8. Hiển thị tổng số lượng điện thoại theo từng hãng");
    console.log("9. Thoát");

    choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            let brand = prompt("Nhập tên hãng (Samsung, Apple, Xiaomi...): ");
            showPhonesByBrand(brand);
            break;
        case 2:
            addPhoneToStore();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhonesByPrice();
            break;
        case 7:
            showTotalMoneyInStore();
            break;
        case 8:
            showTotalQuantityByBrand();
            break;
        case 9:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 9);
