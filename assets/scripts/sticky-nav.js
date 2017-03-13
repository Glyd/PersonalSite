var nav = $(".page-nav");
var navScrolled = "page-nav-scrolled";
var header = $('header').height();

$(window).scroll(function() {
if( $(this).scrollTop() > header ) {
  nav.addClass(navScrolled);
} else {
  nav.removeClass(navScrolled);
}
});
