function tinhTongLuong() {
  let tienLuong = document.getElementById("tienLuong1h").value;
  let soGioLam = document.getElementById("soGioLam").value;

  // console.log = ('tien luong',tienLuong);
  // console.log = ('Số giờ làm',soGioLam);
  let tongLuong = 0;
  tongLuong = tienLuong * soGioLam;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

function tinhGiaTriTrungBinh() {
  let soThu1 = document.getElementById("nhapSoThu1").value * 1;
  let soThu2 = document.getElementById("nhapSoThu2").value * 1;
  let soThu3 = document.getElementById("nhapSoThu3").value * 1;
  let soThu4 = document.getElementById("nhapSoThu4").value * 1;
  let soThu5 = document.getElementById("nhapSoThu5").value * 1;
  let tong = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;
  let giaTriTrungBinh = tong / 5;
  document.getElementById("giaTriTrungBinh").innerHTML = giaTriTrungBinh;
}

function quyDoiTien() {
  let soTienUSD = document.getElementById("soTienUSD").value;
  const tigia = 23500;
  let quyDoiTien = soTienUSD * tigia;

  document.getElementById("doiTien").innerHTML = quyDoiTien;
}

function tinhChuVi() {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("chuVi").innerHTML = chuVi;
}

function tinhDienTich() {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let dienTich = chieuDai * chieuRong;
  document.getElementById("dienTich").innerHTML = dienTich;
}

function tinhTong() {
  let soCoHaiChuSo = document.getElementById("soCoHaiChuSo").value * 1;
  let ten = Math.floor(soCoHaiChuSo / 10);
  let unit = soCoHaiChuSo % 10;
  let tinhTong = ten + unit;
  document.getElementById("tinhTong").innerHTML = tinhTong;
}
