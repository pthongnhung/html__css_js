let choice;
let num = [];
let n = 0;
do {
    console.log("1.Nhap mang so nguyen");
    console.log("2.Hien thi mang");
    console.log("3.Tim phan tu chan va le");
    console.log("4.Tinh trung binh cong cua mang");
    console.log("5.Xoa phan tu tai vi tri chi dinh");
    console.log("6.Tim phan tu lon thu 2 trong mang");
    console.log("7.Thoat chuong trinh");
    choice = +prompt("Moi nhap lua chon: ");
    switch (choice) {
        case 1:
            n = +prompt("Ban muon nhap may phan tu vao mang: ");
            for (let i = 0; i < n; i++) {
                let input = +prompt("Nhap phan tu thu " + (i + 1) + ": ")
                num.push(input);
            }
            break;
        case 2:
            if (n == 0) {
                console.log("Mang rong");
            } else {
                console.log("Cac phan tu trong mang la: ", num);
            }
            break;
        case 3:
            let odd = [];
            let even = [];
            if (n == 0) {
                console.log("Mang rong");
            } else {
                for (let i = 0; i < num.length; i++) {
                    if (num[i] % 2 == 0) {
                        even.push(num[i])
                    } else {
                        odd.push(num[i]);
                    }
                }
                console.log("Cac phan tu chan trong mang la: ", even);
                console.log("Cac phan tu le trong mang la: ", odd);
            }
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                sum += num[i];
            }
            let average = sum / num.length;
            console.log("Trung binh cong cua mang la: ", average);
            break;
        case 5:
            let deletee = +prompt("Ban muon xoa phan tu nao trong mang: ")
            num.splice(deletee, 1);
            break;
            break;
        case 6:
            num.sort((a, b) => a - b);
            console.log("Phan tu lon thu 2 trong mang la: ",num.at(-2));
            break;
        case 7:
            break;
        default:
            console.log("Nhap lua chon hop le: ");
            break;
    }

} while (choice != 7);