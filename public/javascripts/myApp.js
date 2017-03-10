

$(document).ready(() => {

  $(".spinner").show();
  $(".overlay").show();

    setTimeout(function() {
      $(".spinner").hide();
      $(".navbar-default").addClass('navbar-fixed-top');
   }, 4000);

    setTimeout(function() { $(".overlay").hide(); }, 4000);




$(".features").on("click", function( e ) {
   e.preventDefault();
   $("body, html").animate({
     scrollTop: $('#feature-section').offset().top
   }, 700);
 });
 $(".home").on("click", function( e ) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $('#hero-section').offset().top
    }, 700);
  });
  $(".contact").on("click", function( e ) {
     e.preventDefault();
     $("body, html").animate({
       scrollTop: $('#contact').offset().top
     }, 700);
   });

// $('.dropdown-btn').hover(() => {
//     $('.dropdown').fadeIn(300);
//     $('.parent i').css('background-color', '#9a5cb4');
//   }, () => {
//     $('ul.dropdown').fadeOut(200);
//     $('.dropdown-btn i').css('background-color', '#1b95e0');
//   });

$('.dropdown-btn').click( () => {
  $('.dropdown').toggle();
});



  $('.family').css({
    'background-color': '#39ca74',
    'background-image': '-webkit-linear-gradient(top, #39ca74, #62879e)',
    'background-image': '-moz-linear-gradient(top, #39ca74, #62879e)',
    'background-image': '-o-linear-gradient(top, #39ca74, #62879e)',
    'background-image': 'linear-gradient(to bottom, #39ca74, #62879e)',
    'color': '#ffffff',
    'padding': '10px',
    'text-decoration': 'none'
  });




  $('.coworker').css({
    'background-color': '#e54e42',
    'background-image': '-webkit-linear-gradient(top, #e54e42, #692c2c)',
    'background-image': '-moz-linear-gradient(top, #e54e42, #692c2c)',
    'background-image': '-o-linear-gradient(top, #e54e42, #692c2c)',
    'background-image': 'linear-gradient(to bottom, #e54e42, #692c2c)',
    'color': '#ffffff',
    'padding': '10px',
    'text-decoration': 'none'
  });



  $(' .friend ').css({
    'background-color': '#1b95e0',
    'background-image': '-webkit-linear-gradient(top, #1b95e0, #2b5870',
    'background-image': '-moz-linear-gradient(top, #1b95e0, #2b5870',
    'background-image': '-o-linear-gradient(top, #1b95e0, #2b5870',
    'background-image': 'linear-gradient(to bottom, #1b95e0, #2b5870',
    'color': '#ffffff',
    'padding': '10px',
    'text-decoration': 'none'
  });

  $('.btn-default.submit').click( () => {
    let nameInput = $('#name-input').val();
    let descriptionInput = $('#description').val();
    if ( nameInput === 'undefined' || nameInput === '' || descriptionInput === 'undefined' || descriptionInput === '') {
      $('.contact-error').css('visibility', 'visible');
      $('#name-input').css('border', '2px solid #e54e42');
      $('#email-input').css('border', '2px solid #e54e42');
      $('#description').css('border', '2px solid #e54e42');
    }
    else {
      $('.contact-error').css('visibility', 'hidden');
      $('.contact-form').fadeOut(100);
      $('.success-contact-form').show(500);
    }
  });


});
