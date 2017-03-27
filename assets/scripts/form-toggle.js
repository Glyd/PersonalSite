$( document ).ready(function() {
  $('.form-show').hide();
});

$('.form-show').after('<input type="submit" class="button show-form-button" value="Show Form" /> <br/>');

$(function() {
  $(".show-form-button").click( function(e) {
    e.preventDefault();
    $('.form-show').slideToggle('50', function() {
      $('.show-form-button').fadeOut('1', function() {
        $('.show-form-button').remove();
      });
    });
  });
});
