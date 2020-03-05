$(document).ready(function() {
  $(".giesel-popup").click(function() {
    $(".giesel-hover").show();
  });
  $(".giesel-hover").click(function() {
    $(".giesel-hover").hide();
  });
  $(".giesel-closeButton").click(function() {
    $(".giesel-hover").hide();
  });

  $(".sun-god-popup").click(function() {
    $(".sun-god-hover").show();
  });
  $(".sun-god-hover").click(function() {
    $(".sun-god-hover").hide();
  });
  $(".sun-god-closeButton").click(function() {
    $(".sun-god-hover").hide();
  });
});
