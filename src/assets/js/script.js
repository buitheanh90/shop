//login/register
$(document).ready(function () {
  $(".validate")
    .focus(function () {
      $(this).next("label").addClass("active");
      $(this).prev("i").addClass("active");
    })
    .blur(function () {
      $(this).next("label").removeClass("active");
      $(this).prev("i").removeClass("active");
      if ($(this).val()) {
        $(this).next("label").addClass("active");
      }
    });
});

$(document).on("click", ".current", function (e) {
  e.preventDefault();
  $(this).next(".qty-options").toggle();
});

$(document).on("click", function (e) {
  e.preventDefault();
  if (!$(e.target).closest(".current").length) {
    $(".qty-options").hide();
  }
});

$(document).on("mouseup", ".current", function (e) {
  e.preventDefault();
  var container = $(".qty-options");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
  }
});
