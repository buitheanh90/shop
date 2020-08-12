$(document).ready(function () {
  $(".validate")
    .focus(function () {
      $(this).next("label").addClass("active");
      $(this).prev("i").addClass("active");
    })
    .blur(function () {
      $(this).next("label").removeClass("active");
      $(this).prev("i").removeClass("active");
    });
});
