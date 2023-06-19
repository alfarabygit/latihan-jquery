//fucntion utama jquery wajib koneksi internet dan sudah ada cdn jquery di html
$(document).ready(function () {
  //membuat function event ketika tombol diklik
  $("#click").click(function () {
    alert("Sedang Belajar JQuery!");
  });
  $("#dblclick").dblclick(function () {
    $(this).css("background-color", "crimson");
  });

  //membuat event mouse
  $("#mouse").mouseleave(function () {
    $(this).css("background-color", "orange");
  });
  $("#mouse").mouseenter(function () {
    $(this).css("background-color", "darkkhaki");
  });

  //event dengan input type
  $("#keydown").keydown(function () {
    $("#message-keydown").text($(this).val());
  }); //ketika mengetikkan sesuatu ada 1 huruf terakhir yg tidak akan ditampilkan
  $("#keyup").keyup(function () {
    $("#message-keyup").text($(this).val());
  }); //tanpa meninggalkan 1 huruf terakhir
});
