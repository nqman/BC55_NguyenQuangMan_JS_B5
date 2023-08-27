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

document.getElementById("btnTinhTienDien").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKW = document.getElementById("soKW").value * 1;
  const giaDien_1 = 500;
  const giaDien_2 = 650;
  const giaDien_3 = 850;
  const giaDien_4 = 1100;
  const giaDien_5 = 1300;
  if (soKW < 0) {
    alert("Số kW không hợp lệ. Vui lòng nhập số kW lớn hơn 0.");
  } else if (0 <= soKW && soKW <= 50) {
    var tienDien1 = soKW * giaDien_1;
    tongTienDien = tienDien1;
  } else if (50 < soKW && soKW <= 100) {
    var tienDien1 = 50 * giaDien_1;
    var tienDien2 = (soKW - 50) * giaDien_2;
    tongTienDien = tienDien1 + tienDien2;
  } else if (100 < soKW && soKW <= 200) {
    var tienDien1 = 50 * giaDien_1;
    var tienDien2 = 50 * giaDien_2;
    var tienDien3 = (soKW - 100) * giaDien_3;
    tongTienDien = tienDien1 + tienDien2 + tienDien3;
  } else if (200 < soKW && soKW <= 350) {
    var tienDien1 = 50 * giaDien_1;
    var tienDien2 = 50 * giaDien_2;
    var tienDien3 = 100 * giaDien_3;
    var tienDien4 = (soKW - 200) * giaDien_4;
    tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4;
  } else {
    var tienDien1 = 50 * giaDien_1;
    var tienDien2 = 50 * giaDien_2;
    var tienDien3 = 100 * giaDien_3;
    var tienDien4 = 150 * giaDien_4;
    var tienDien5 = (soKW - 350) * giaDien_5;
    tongTienDien = tienDien1 + tienDien2 + tienDien3 + tienDien4 + tienDien5;
  }
  xuatThongTin(hoTen, tongTienDien);
};

// FUNCTION IN HỌ TÊN VS SỐ TIỀN ĐIỆN
function xuatThongTin(hoTen, tongTienDien) {
  document.getElementById("inHoTen").innerHTML = "Họ và tên: " + hoTen + ".";
  document.getElementById("inTienDien").innerHTML =
    " Tiền điện: " + tongTienDien.toLocaleString() + " VND.";
}
