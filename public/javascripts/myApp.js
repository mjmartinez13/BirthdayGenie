$(document).ready(()=> {
      $('#top-login-btn').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#signup-form").fadeOut(100);
        $('.panel-signup').html('Log In please');
        e.preventDefault();
  });
    $('#signup-form-link').click(function(e) {
      $("#signup-form").delay(100).fadeIn(100);
      $("#login-form").fadeOut(100);
      $('#top-login-btn').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
  });

});
