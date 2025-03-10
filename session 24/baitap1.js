let choice;
let num = [];
let n=0;
do {
    console.log("1.Nhap mang");
    console.log("2.Hien thi mang");
    console.log("3.Tim phan tu lon nhat va nho nhat trong mang");
    console.log("4.Tinh tong cac phan tu trong mang");
    console.log("5.Tim so lan xuat hien cua mot phan tu trong mang");
    console.log("6.Sap xep mang tang dan");
    console.log("7.Thoat chuong trinh");
    choice = +prompt("Moi nhap lua chon: ");
    switch (choice) {
        case 1:
            n = +prompt("Ban muon nhap may phan tu vao mang: ");
            for (let i = 0; i < n; i++){
                let input = +prompt("Nhap phan tu thu " + (i + 1) + ": ")
                num.push(input);
            }
            break;
        case 2:
            if (n == 0) {
                console.log("Mang rong");
            } else {
                console.log("Cac phan tu trong mang la: ",num);
            }
            break;
        case 3:
            let min;
            let max;
            num.sort((a, b) => a - b);
            for (let i = 0; i < num.length; i++){
                min = num[0];
                max = num.at(-1);
            }
            console.log("Phan tu nho nhat trong mang: ", min);
            console.log("Phan tu lon nhat trong mang: ", max);
            break;
        case 4:
            let sum = 0;
            if (n == 0) {
               console.log("Mang rong");
            } else {
                for (let i = 0; i < num.length; i++) {
                    sum += num[i];
                }
                console.log("Tong cac phan tu trong mang la: ", sum);
           }
            break;
        case 5:
            let search = +prompt("Nhap phan tu ma ban muon tim so lan xuat hien");
            let appear = 0;
            for (let i = 0; i < num.length; i++){
                if (search == num[i]) {
                    appear++;
                }
            }
            console.log("So lan xuat hien cua phan tu "+search+" la: ",appear);
            break;
        case 6:
            num.sort((a,b) => a - b);
            console.log("Mang sau khi duoc sap xep tang dan: ",num);
            break;
        case 7:
            break;
        default:
            console.log("Nhap lua chon hop le: ");
            
            break;
    }
    
} while (choice!=7);