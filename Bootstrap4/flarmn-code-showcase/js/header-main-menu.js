

$(document).ready(function(){

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