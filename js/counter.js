$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function() {
  
    // variables 
    var toTop = $('.to-top');
    // logic
    toTop.on('click', function() {
      $('html, body').animate({
        scrollTop: $('html, body').offset().top,
      });
    });
  
  });

 