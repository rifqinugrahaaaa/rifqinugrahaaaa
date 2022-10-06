$(document).ready(function () {
    var currentSection = 0;
    $("#konten").hide();
    $("li a").click(function () {
      $("li a").removeClass("Navigation");
      $(this).addClass("Navigation");
  
      var href = $(this).attr("href");
      $("#isikonten>div").hide();
  
      $(href).show();
  
      if (currentSection == 0) {
        $("#konten").slideToggle(200);
        currentSection = href;
      } else if (currentSection == href) {
        $("#konten").slideToggle(200);
        currentSection = 0;
      } else {
        currentSection = href;
      }
      return false;
    });
  });