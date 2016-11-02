

$(document).ready(function(){
first_item_left = $(".main-menu").position().left;

$(".main-menu li>.dropdown-toggle").on("mouseover", function(e){
$(this).dropdown("toggle");

e.stopPropagation();
e.preventDefault();


setTimeout(function(){
  //alert("Boom!");
var zrt = $(".lulu").height();
$(".megamenu").height(zrt);
}, 200);

$(".megamenu-container").width($(".devider").width());

if ($(window).width()<=1024) {
$(".megamenu-drop-down").css("margin-left", first_item_left +15);
}
else{
$(".megamenu-drop-down").css("margin-left", first_item_left -10);
}

});



$('.megamenu .nav-item').on("mouseenter",function (e) {

setTimeout(function(){

}, 1000);

rr = $(this).text();

$(this).find('.nav-link').tab('show');


setTimeout(function(){
var zrt = $(".lulu").height();
$(".megamenu").height(zrt);
}, 200);


e.stopPropagation();
e.preventDefault();
});  



$(".megamenu-container").on("mouseleave",function (event) {
$(".main-menu").dropdown("toggle");
});

///////////////////////////////////////////
});