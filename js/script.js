$(document).ready(function(){
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
});


