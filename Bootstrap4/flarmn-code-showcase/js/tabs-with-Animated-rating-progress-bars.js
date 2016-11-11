

$(document).ready(function(){

$("#most-readed .nav-tab-arrow").css("opacity","1.0");

$("#most-readed").on('click',function(){
$("#most-readed .nav-tab-arrow").css("opacity","1.0");
$("#most-commented .nav-tab-arrow").css("opacity","0.0");
barcount = 0;
countercontainerval = 0;
blograting = 0;
divider = 0;
i = 0;
z= 0;
$("#featured-blog-rating-list .bar-background-animated").css("width","0px");
blog_rating_animate();
});


$("#most-commented").on('click',function(){
$("#most-readed .nav-tab-arrow").css("opacity","0.0");
$("#most-commented .nav-tab-arrow").css("opacity","1.0");
barcounti = 0;
countercontainervali = 0;
blogratingi = 0;
divideri = 0;
ii = 0;
zi= 0;
//$("#featured-blog-rating-list-commented .bar-background-animated").css("z-index","30");
$("#featured-blog-rating-list-commented .bar-background-animated").css("width","0px");

blog_rating_animate2();
});

//--------------------------------------
});