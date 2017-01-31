var formShown = false;

$(function() {
$(".show-button").click( function() {
       if (formShown) {
         $('.show-button').val("Show Form");
         $('#contact .container-content .content').addClass("form-hide");
         $('#contact .container-content .content').removeClass("form-show");
         formShown=false;
       } else {
         $('.show-button').val("Hide Form");
         $('#contact .container-content .content').addClass("form-show");
         $('#contact .container-content .content').removeClass("form-hide");
         formShown=true;
       }
     }
);
});
