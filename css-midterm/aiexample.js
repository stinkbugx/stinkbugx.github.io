$(document).ready(function() {
    // Animate navigation on click
    $('nav a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
  
    // Animate project on hover
    $('.project').hover(function() {
      $(this).find('img').animate({
        width: '60%'
      }, 500);
      $(this).find('.project-description').animate({
        paddingLeft: '20px'
      }, 500);
    }, function() {
      $(this).find('img').animate({
        width: '50%'
      }, 500);
      $(this).find('.project-description').animate({
        paddingLeft: '0'
      }, 500);
    });
  });
  