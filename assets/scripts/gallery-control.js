$(document).ready(function(){
  galleryControl();

  function galleryControl() {
    if( window.matchMedia('(max-width:768px)').matches ) {
      $( '.image-gallery' ).not( '.slick-initialized' ).slick({
        adaptiveHeight: true,
        prevArrow: ''
      });
    } else if ($( '.image-gallery' ).hasClass( '.slick-initialized' )) {
      $( '.image-gallery' ).slick( 'unslick' );
    }
  }

  $( window ).resize(function() {
    galleryControl();
  });
});
