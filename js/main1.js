//wajib koneksi internet utk menjalankan main function jquery dan sudah ada link cdn di html
$(document).ready(function () {
  //selector tag
  $("h1").css("font-size", "2rem");
  $("p").css("color", "aqua");

  //selector class
  $(".header").css("color", "black");
  $(".paragraf").css("color", "#43A44D");

  //selector id
  $("#head").css("text-align", "center");
  $("#paragraph").css("background-color", "#1D1DC9");

  //selector utk keseluruhan web
  $("*").css("background-color", "salmon");

  //selector berdasarkan index tag html
  $("h4:eq(1)").css("color", "aqua");

  //selector dengan input type
  $(":submit").css("background-color", "yellow");
  $(":button").css("padding", "1rem");
});
