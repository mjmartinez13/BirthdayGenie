

$(document).ready(() => {

  // $(".spinner").show();
  // $(".overlay").show();
  //
  //   setTimeout(function() {
  //     $(".spinner").hide();
  //     $(".navbar-default").addClass('navbar-fixed-top');
  //  }, 4000);
  //
  //   setTimeout(function() { $(".overlay").hide(); }, 4000);

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

$('.dropdown-btn').hover(() => {
    $('.dropdown').fadeIn(300);
    $('.parent i').css('background-color', '#9a5cb4');
  }, () => {
    $('ul.dropdown').fadeOut(200);
    $('.dropdown-btn i').css('background-color', '#1b95e0');
  });


  $('.family').css({
    'background-color': '#39ca74',
    'background-image': '-webkit-linear-gradient(top, #39ca74, #62879e)',
    'background-image': '-moz-linear-gradient(top, #39ca74, #62879e)',
    'background-image': '-o-linear-gradient(top, #39ca74, #62879e)',
    'background-image': 'linear-gradient(to bottom, #39ca74, #62879e)',
    // '-webkit-border-radius': '28',
    // '-moz-border-radius': '28',
    // 'border-radius': '28px',
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
    // '-webkit-border-radius': '28',
    // '-moz-border-radius': '28',
    // 'border-radius': '28px',
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
    // '-webkit-border-radius': '28',
    // '-moz-border-radius': '28',
    // 'border-radius': '28px',
    'color': '#ffffff',
    'padding': '10px',
    'text-decoration': 'none'
  });

});
