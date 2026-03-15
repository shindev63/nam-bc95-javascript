var chieuDai = parseFloat(prompt("Nhap chieu dai: "));
var chieuRong = parseFloat(prompt("Nhap chieu rong: "));
var dienTich = chieuDai * chieuRong;
var chuVi = 2 * (chieuDai + chieuRong);
document.write("Dien tich hinh chu nhat la: " + dienTich);
document.write("<br>Chu vi hinh chu nhat la: " + chuVi);
