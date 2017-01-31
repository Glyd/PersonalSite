$(".theme-toggle").on('click',function() {
  if ($(".theme-toggle-light").hasClass('theme-toggle-light')) {
    $("link[href=\"styles/theme_light.css\"]").attr({href : "styles/theme_dark.css"});
    $(".theme-toggle-light").removeClass("theme-toggle-light").addClass("theme-toggle-dark");
  } else {
    $("link[href=\"styles/theme_dark.css\"]").attr({href : "styles/theme_light.css"});
    $(".theme-toggle-dark").removeClass("theme-toggle-dark").addClass("theme-toggle-light");
  }
});
