$(document).ready(function(){
 
    $("#menu").click(function(){
        $("header .navbar").toggleClass("nav-toggle");
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });

    $(".scroll-top").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0}, 800);
    });
});
