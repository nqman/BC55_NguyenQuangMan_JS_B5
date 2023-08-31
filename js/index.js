// FUNCTION DOM ID
function domID(id) {
  return document.getElementById(id);
}

// BÀI TẬP 1: QUẢN LÝ TUYỂN SINH
domID("btnTinhDiem").onclick = function () {
  var diemChuan = domID("diemChuan").value * 1;
  var khuVuc = domID("khuVuc").value * 1;
  var doiTuong = domID("doiTuong").value * 1;
  var diemMon_1 = domID("diemMon_1").value * 1;
  var diemMon_2 = domID("diemMon_2").value * 1;
  var diemMon_3 = domID("diemMon_3").value * 1;
  var tongDiem = diemMon_1 + diemMon_2 + diemMon_3 + khuVuc + doiTuong;
  if (
    diemChuan <= 0 ||
    diemChuan > 30 ||
    diemMon_1 < 0 ||
    diemMon_1 > 10 ||
    diemMon_2 < 0 ||
    diemMon_2 > 10 ||
    diemMon_3 < 0 ||
    diemMon_3 > 10
  ) {
    alert("Vui lòng nhập đúng điểm chuẩn và điểm thi");
  } else {
    if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0) {
      domID("ketQua").innerHTML = "Bạn đã trượt. Do có điểm 0.";
    } else if (tongDiem >= diemChuan) {
      domID("ketQua").innerHTML =
        "Chúc mừng bạn đã đậu." + " Tổng điểm: " + tongDiem;
    } else {
      domID("ketQua").innerHTML = "Bạn đã trượt." + " Tổng điểm: " + tongDiem;
    }
  }
};

// BÀI TẬP 2: TÍNH TIỀN ĐIỆN

domID("btnTinhTienDien").onclick = function () {
  var hoTen = domID("hoTen").value;
  var soKW = domID("soKW").value * 1;
  const GIADIEN_1 = 500;
  const GIADIEN_2 = 650;
  const GIADIEN_3 = 850;
  const GIADIEN_4 = 1100;
  const GIADIEN_5 = 1300;
  if (soKW < 0) {
    alert("Số kW không hợp lệ. Vui lòng nhập số kW lớn hơn 0.");
  } else if (0 <= soKW && soKW <= 50) {
    var tienDien1 = soKW * GIADIEN_1;
    tongTienDien = tienDien1;
  } else if (50 < soKW && soKW <= 100) {
    var tienDien1 = 50 * GIADIEN_1;
    var tienDien2 = (soKW - 50) * GIADIEN_2;
    tongTienDien = tienDien1 + tienDien2;
  } else if (100 < soKW && soKW <= 200) {
    var tienDien1 = 50 * GIADIEN_1;
    var tienDien2 = 50 * GIADIEN_2;
    var tienDien3 = (soKW - 100) * GIADIEN_3;
    tongTienDien = tienDien1 + tienDien2 + tienDien3;
  } else if (200 < soKW && soKW <= 350) {
    var tienDien1 = 50 * GIADIEN_1;
    var tienDien2 = 50 * GIADIEN_2;
    var tienDien3 = 100 * GIADIEN_3;
    var tienDien4 = (soKW - 200) * GIADIEN_4;
    tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4;
  } else {
    var tienDien1 = 50 * GIADIEN_1;
    var tienDien2 = 50 * GIADIEN_2;
    var tienDien3 = 100 * GIADIEN_3;
    var tienDien4 = 150 * GIADIEN_4;
    var tienDien5 = (soKW - 350) * GIADIEN_5;
    tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;
  }
  xuatThongTin(hoTen, tongTienDien);
};

// FUNCTION IN HỌ TÊN VS SỐ TIỀN ĐIỆN
function xuatThongTin(hoTen, tongTienDien) {
  domID("inHoTen").innerHTML = "Họ và tên: " + hoTen + ".";
  domID("inTienDien").innerHTML =
    " Tiền điện: " + tongTienDien.toLocaleString() + " VND.";
}

// BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
domID("btnTinhTienThue").onclick = function () {
  var hoTenNopThue = domID("hoTenNopThue").value;
  var thuNhapNam = domID("thuNhapNam").value * 1;
  var nguoiPhuThuoc = domID("nguoiPhuThuoc").value * 1;
  var thueThuNhap = 0;
  if (thuNhapNam <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
  } else if (thuNhapNam <= 60e6) {
    thueThuNhap = (5 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (60e6 < thuNhapNam && thuNhapNam <= 120e6) {
    thueThuNhap = (10 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (120e6 < thuNhapNam && thuNhapNam <= 210e6) {
    thueThuNhap = (15 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (210e6 < thuNhapNam && thuNhapNam <= 384e6) {
    thueThuNhap = (20 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (384e6 < thuNhapNam && thuNhapNam <= 624e6) {
    thueThuNhap = (25 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (624e6 < thuNhapNam && thuNhapNam <= 960e6) {
    thueThuNhap = (30 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  } else if (thuNhapNam > 960e6) {
    thueThuNhap = (35 / 100) * (thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5);
  }
  xuatThongTinThue(hoTenNopThue, thueThuNhap);
};

// FUNCTION IN HỌ TÊN VS TIỀN THUẾ THU NHẬP CÁ NHÂN
function xuatThongTinThue(hoTenNopThue, thueThuNhap) {
  domID("inHoTenNopThue").innerHTML = "Họ và tên: " + hoTenNopThue + ".";
  domID("inTienThue").innerHTML =
    " Tiền thuế thu nhập cá nhân: " + thueThuNhap.toLocaleString() + " VND";
}

// BÀI TẬP 4: TÍNH TIỀN CÁP
const XULI_1 = 4.5;
const XULI_2 = 15;
const DVCOBAN_1 = 20.5;
const DVCOBAN_2 = 75;
const THUEKENH_1 = 7.5;
const THUEKENH_2 = 50;
var tienCap = 0;
domID("btnTinhTienCap").onclick = function () {
  var maKhachHang = domID("maKhachHang").value;
  var soKenhCaoCap = domID("soKenhCaoCap").value * 1;
  var loaiKhachHang = domID("loaiKhachHang").value;
  switch (loaiKhachHang) {
    case "nhaDan":
      tienCap = XULI_1 + DVCOBAN_1 + THUEKENH_1 * soKenhCaoCap;
      xuatThongTinCap(maKhachHang, tienCap);
      break;
    case "doanhNghiep":
      soKetNoi = domID("soKetNoi").value * 1;
      if (soKetNoi < 0) {
        alert("Vui lòng nhập đúng số kết nối");
      } else if (soKetNoi <= 10) {
        tienCap = XULI_2 + DVCOBAN_2 + THUEKENH_2 * soKenhCaoCap;
      } else {
        tienCap =
          XULI_2 + DVCOBAN_2 + THUEKENH_2 * soKenhCaoCap + 5 * (soKetNoi - 10);
      }
      xuatThongTinCap(maKhachHang, tienCap);
      break;
    default:
      alert("Vui lòng chọn loại khách hàng");
      break;
  }
};

// FUNCTION IN MÃ KHÁCH HÀNG VS TIỀN CÁP
function xuatThongTinCap(maKhachHang, tienCap) {
  domID("inMaKhachHang").innerHTML = "Mã khách hàng: " + maKhachHang + ".";
  domID("inTienCap").innerHTML =
    " Tiền cáp: " + tienCap.toLocaleString() + " $";
}

// function VISIBLE Số kết nối
function hienSoKetNoi() {
  var soKetNoi = domID("soKetNoi");
  var loaiKhachHang = domID("loaiKhachHang").value;
  switch (loaiKhachHang) {
    case "doanhNghiep":
      soKetNoi.classList.remove("d-none");
      break;
    default:
      soKetNoi.classList.add("d-none");
      break;
  }
}
