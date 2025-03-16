let choice;
let employees = [];
do {
    console.log("1.Them nhan vien moi");
    console.log("2.Xoa nhan vien theo id");
    console.log("3.Cap nhat muc luong theo id");
    console.log("4.Tim kiem nhan vien theo ten");
    console.log("5.Hien thi danh sach nhan vien");
    console.log("6.Thoat");
    choice = +prompt("Nhap lua chon cua ban: ")
    switch (choice) {
        case 1:
            ///Them nhan vien moi
            addEmployee();
            break;
        case 2:
            deleteEmployee(employees);
            //Xoa nhan vien theo id
            break;
        case 3:
            //Cap nhat muc luong theo id
            salary(employees);
            break;
        case 4:
            //Tim nhan vien theo ten
            searchName(employees);
            break;
        case 5:
            console.log("Danh sach nhan vien");
            employees.forEach((item) => {
                console.log(`ID: ${item.id}-Ten: ${item.name}-luong: ${item.salary}`);
            })
            break;
        case 6:
            break;
        default:
            console.log("Vui long chon lua chon hop le");
            break;
    }
    
} while (choice != 6);
function addEmployee() {
    let quantity = +prompt("Ban muon them may nhan vien: ");
    for (let i = 0; i < quantity; i++){
        const id = prompt("Nhap ID nguoi thu "+(i+1)+": ");
        const name = prompt("Nhap ten: ");
        const position = prompt("Nhap vi tri: ");
        const salary = prompt("Nhap luong: ");
        employees.push({ id, name, position, salary });
    }
    
}
function deleteEmployee(arr) {
    let found = prompt("Nhap id can tim kiem: ");
    let flag = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id == found) {
            flag = 0;
            alert(confirm("Ban co muon xoa nhan vien co vi tri " + found + " khong?"));
            if (confirm) {
                arr.splice(arr[i], 1);
            }
        }
    }
    if (flag == 1) {
        console.log("Khong tim thay nhan vien co Id nhu tim kiem");
    }
}
function salary(arr) {
    let found = prompt("Nhap id can sua luong: ");
    let updateSalary=prompt("Muon sua thanh bao nhieu: ")
    let flag = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == found) {
            flag = 0;
            arr[i].salary = updateSalary;
        }
    }
    if (flag == 1) {
        console.log("Khong tim thay nhan vien co Id nhu tim kiem");
    }
}
function searchName(arr) {
    let found = prompt("Nhap ten can tim kiem: ");
    let flag = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == found) {
            flag = 0;
            console.log("Nhien vien co trong danh sach tim kiem");
            break;
        }
    }
    if (flag == 1) {
        console.log("Khong tim thay nhan vien co ten nhu tim kiem");
    }
}


