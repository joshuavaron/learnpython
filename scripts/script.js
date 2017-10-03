$(document).ready(function(){
    $("h1").slideDown("slow");
    $("h1").mouseenter(function(){
        $("h1").css("color", "blue");
    }).mouseleave(function(){
        $("h1").css("color", "black");
    });
    $("p").slideDown("slow");
});
