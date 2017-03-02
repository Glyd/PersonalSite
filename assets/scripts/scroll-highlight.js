/* Not completely original - adaption to
http://stackoverflow.com/questions/32395988/highlight-menu-item-when-scrolling-down-to-section */

$(window).scroll(function() {
    var position = $(this).scrollTop();

    //highlight the item you are reading on the Navigation

    $('section').each(function() {

        var target = $(this).offset().top;
        var id = $(this).attr('id');

        //highlight earlier to account for minimised contact form
        //otherwise only account for sticky nav bar

        if (id === 'contact'){
          target -= 250;
        }
        else {
          target -= 100;
        }

        if (position >= target) {
            $('.page-nav > ul > li > a').removeClass('active');
            $('.page-nav > ul > li > a[href="#' + id + '"]').addClass('active');
        }
    });

    //remove active highlighting when at the top of the page

    $('.header-image').each(function() {

        var target = $(this).offset().top;

        if (position <= target) {
            $('.page-nav > ul > li > a').removeClass('active');
          }
    });
});
