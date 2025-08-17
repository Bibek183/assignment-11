$(document).ready(function(){

  // --- Cookie popup logic ---
  $('.cookie-popup').fadeIn(); // Always show popup on page load

  $('#accept-cookie').click(function() {
    localStorage.setItem('cookieAccepted', 'true'); // Optional: remember if accepted
    $('.cookie-popup').fadeOut();
  });

  $('#decline-cookie').click(function() {
    localStorage.setItem('cookieAccepted', 'false'); // Optional: remember if declined
    $('.cookie-popup').fadeOut();
  });

  // --- Menu toggle ---
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // --- Scroll and scroll spy ---
  $(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    } else {
      $('.scroll-top').hide();
    }

    $('section').each(function(){
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // --- Smooth scroll ---
  $('a[href*="#"]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

});
