$(document).ready(function(){
  
  // Cookie popup logic
if (!localStorage.getItem('cookieAccepted')) {
  $('.cookie-popup').fadeIn(); // Show the popup if not accepted
}

$('#accept-cookie').click(function() {
  localStorage.setItem('cookieAccepted', 'true'); // Set localStorage to remember choice
  $('.cookie-popup').fadeOut(); // Hide the popup
});

  // Runs this code only after the whole page (DOM) is fully loaded

  $('#menu').click(function(){
    // When the element with id 'menu' is clicked

    $(this).toggleClass('fa-times');
    // Toggle the class 'fa-times' on the clicked menu icon (adds or removes the class)

    $('.navbar').toggleClass('nav-toggle');
    // Toggle the class 'nav-toggle' on the navigation bar to show/hide menu

    
  });

  $(window).on('scroll load',function(){
    // When the window is scrolled or initially loaded, run this function

    $('#menu').removeClass('fa-times');
    // Remove 'fa-times' class from menu icon (reset menu icon state)

    $('.navbar').removeClass('nav-toggle');
    // Remove 'nav-toggle' class from navbar (close the navbar menu)

    if($(window).scrollTop() > 0){
      // If the page is scrolled down from the top (scroll position > 0)

      $('.scroll-top').show();
      // Show the "scroll to top" button
    }else{
      $('.scroll-top').hide();
      // Otherwise hide the "scroll to top" button when at top of page
    }

    // scroll spy functionality to highlight nav links based on scroll position

    $('section').each(function(){
      // For each <section> element on the page

      let height = $(this).height();
      // Get the height of the current section

      let offset = $(this).offset().top - 200;
      // Get the vertical position of the section relative to top of page, minus 200px buffer

      let id = $(this).attr('id');
      // Get the id attribute of this section

      let top = $(window).scrollTop();
      // Get current scroll position from top of the window

      if(top > offset && top < offset + height){
        // If the scroll position is inside this section's area

        $('.navbar ul li a').removeClass('active');
        // Remove 'active' class from all nav links

        $('.navbar').find(`[href="#${id}"]`).addClass('active');
        // Add 'active' class to the nav link that points to this section id

        
      }
    });
  });

  // smooth scrolling when clicking nav links with anchors (#)

  $('a[href*="#"]').on('click',function(e){
    // When any anchor link with href containing '#' is clicked

    e.preventDefault();
    // Prevent the default jump to anchor behavior

    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
      // Animate scrolling to the top position of the target section
    },
      500,   // Duration of animation in milliseconds (0.5 seconds)
      'linear' // Animation easing type (linear speed)
    );
  });
});
