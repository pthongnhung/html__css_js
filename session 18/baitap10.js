let num = +prompt("Nhap mot so nguyen tu 0 den 999:");

let result = "";

if (num < 0 || num > 999 || isNaN(num)) {
    result = "So nhap vao khong hop le!";
} else {
    let h = Math.floor(num / 100);
    let t = Math.floor((num % 100) / 10);
    let o = num % 10;

    if (h > 0) {
        if (h === 1) {
            result += "Mot Tram ";
        } else if (h === 2) {
            result += "Hai Tram ";
        } else if (h === 3) {
            result += "Ba Tram ";
        } else if (h === 4) {
            result += "Bon Tram ";
        } else if (h === 5) {
            result += "Nam Tram ";
        } else if (h === 6) {
            result += "Sau Tram ";
        } else if (h === 7) {
            result += "Bay Tram ";
        } else if (h === 8) {
            result += "Tam Tram ";
        } else if (h === 9) {
            result += "Chin Tram ";
        }
    }

    if (t > 1) {
        if (t === 2) {
            result += "Hai Muoi ";
        } else if (t === 3) {
            result += "Ba Muoi ";
        } else if (t === 4) {
            result += "Bon Muoi ";
        } else if (t === 5) {
            result += "Nam Muoi ";
        } else if (t === 6) {
            result += "Sau Muoi ";
        } else if (t === 7) {
            result += "Bay Muoi ";
        } else if (t === 8) {
            result += "Tam Muoi ";
        } else if (t === 9) {
            result += "Chin Muoi ";
        }
    } else if (t === 1) {
        result += "Muoi ";
    }

    if (o > 0) {
        if (t === 1) {
            if (o === 1) {
                result += "Mot";
            } else if (o === 5) {
                result += "Lam";
            } else {
                result += "Muoi " + (o === 2 ? "Hai" : o === 3 ? "Ba" : o === 4 ? "Bon" : o === 6 ? "Sau" : o === 7 ? "Bay" : o === 8 ? "Tam" : "Chin");
            }
        } else {
            if (o === 1) {
                result += "Mot";
            } else if (o === 2) {
                result += "Hai";
            } else if (o === 3) {
                result += "Ba";
            } else if (o === 4) {
                result += "Bon";
            } else if (o === 5) {
                result += "Nam";
            } else if (o === 6) {
                result += "Sau";
            } else if (o === 7) {
                result += "Bay";
            } else if (o === 8) {
                result += "Tam";
            } else if (o === 9) {
                result += "Chin";
            }
        }
    }

    if (num === 0) {
        result = "Khong";
    }
}

alert(result);