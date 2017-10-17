$(document).ready(function(){
    $("h1").slideDown("slow");
    $("h1").mouseenter(function(){
        $("h1").css("color", "blue");
    }).mouseleave(function(){
        $("h1").css("color", "black");
    });
    $("#yellow").mouseenter(function(){
        $("#yellow").css("color", "yellow");
    }).mouseleave(function(){
        $("#yellow").css("color", "black");
    });
    $("#yellow").slideDown("slow");
    $("button").slideDown("slow");

    $("button").click(function(){
        $("#text_1").show();
    });
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });

});
