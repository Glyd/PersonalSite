$( document ).ready(function() {
  $('.show-button').removeClass("form-hide").addClass("form-show");
  $('#contact .container-content .content').removeClass("form-show").addClass("form-hide");
});

var  nav = $(".page-nav");
  navScrolled = "page-nav-scrolled";
  header = $('header').height();

$(window).scroll(function() {
if( $(this).scrollTop() > header ) {
  nav.addClass(navScrolled);
} else {
  nav.removeClass(navScrolled);
}
});
