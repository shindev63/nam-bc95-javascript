// nhap 5 so thuc tinh gia tri trung binh va xuat ket qua
// nhap 5 so thuc
var soThuc1 = parseFloat(prompt("Nhap so thuc 1: "));
var soThuc2 = parseFloat(prompt("Nhap so thuc 2: "));
var soThuc3 = parseFloat(prompt("Nhap so thuc 3: "));
var soThuc4 = parseFloat(prompt("Nhap so thuc 4: "));
var soThuc5 = parseFloat(prompt("Nhap so thuc 5: "));
// tinh gia tri trung binh
var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
// xuat ket qua
document.write("Gia tri trung binh la: " + trungBinh);