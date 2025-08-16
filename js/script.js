$(document).ready(function(){
    // Menu toggle for mobile
    $("#menu").click(function(){
        $("header .navbar").toggleClass("nav-toggle");
    });

    // Scroll to top button visibility
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });

    // Smooth scroll for scroll-top button
    $(".scroll-top").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0}, 800);
    });
});
