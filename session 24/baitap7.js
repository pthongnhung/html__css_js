let str = "";  // Biến để lưu chuỗi
let option;

do {
    // Hiển thị menu cho người dùng chọn
    option = +prompt(`Chọn chức năng:
    1. Nhập chuỗi
    2. Hiển thị chuỗi
    3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
    4. Đảo ngược chuỗi ký tự
    5. Đếm số lượng từ trong chuỗi
    6. Tìm kiếm và thay thế các ký tự trong chuỗi
    7. Thoát chương trình`);

    switch (option) {
        case 1:
            // Nhập chuỗi
            str = prompt("Nhập chuỗi: ");
            break;

        case 2:
            // Hiển thị chuỗi
            console.log("Chuỗi hiện tại: ", str);
            break;

        case 3:
            // Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
            let trimmedStr = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng ở đầu và cuối: ", trimmedStr);
            break;

        case 4:
            // Đảo ngược chuỗi ký tự
            let reversedStr = str.split("").reverse().join("");  // Đảo ngược chuỗi
            console.log("Chuỗi sau khi đảo ngược: ", reversedStr);
            break;

        case 5:
            // Đếm số lượng từ trong chuỗi
            let wordCount = str.split(" ").filter(word => word !== "").length;
            console.log("Số lượng từ trong chuỗi là: ", wordCount);
            break;

        case 6:
            // Tìm kiếm và thay thế các ký tự trong chuỗi
            let searchChar = prompt("Nhập ký tự cần tìm: ");
            let replaceChar = prompt("Nhập ký tự thay thế: ");
            let updatedStr = str.split(searchChar).join(replaceChar);  // Tìm và thay thế
            console.log("Chuỗi sau khi thay thế: ", updatedStr);
            break;

        case 7:
            // Thoát chương trình
            alert("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (option !== 7);
