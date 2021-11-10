$(document).ready(function(){

    $(".qrBtn").click(function(){
        $(".qr_popup").toggleClass("pop_bg");
    });
    $(".planBtn").click(function(){
        $(".plan_popup").toggleClass("pop_bg");
    });
    $(".resumeBtn").click(function(){
        $(".resume_popup").toggleClass("pop_bg");
    });

    $(".top_btn").click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0}, 1000);
    });

});