$( document ).ready(function() {
  $('.show-button').removeClass("form-hide");
  $('#contact .container-content .content').removeClass("form-show");
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