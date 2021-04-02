$(document).ready(function(){

$(window).scroll(function(){
    console.log("hii")
    if($(window).scrollTop() > 100)
    {
        $("main").addClass("shrink");
    }
    else
    {
        $("main").removeClass("shrink");
    }
});
});