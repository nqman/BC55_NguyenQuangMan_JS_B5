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
function domID(id) {
  return document.getElementById(id);
}
