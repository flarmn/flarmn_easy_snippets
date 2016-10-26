 $(document).ready(function(){
framenumber = 0;
firststart=0;


var carouselDefaultAnim = setInterval(function(){
caruselMoveUp();
//alert("started");
}, 5000);


$(document).on('click',"#vertical-carousel-posts .carusel-up-button",function() {
	clearInterval(carouselDefaultAnim);
	//alert("down clicked");
	caruselMoveUp();
});


$(document).on('click',"#vertical-carousel-posts .carusel-down-button",function() {
	clearInterval(carouselDefaultAnim);
	//alert("down clicked");
	caruselMoveDown();
});


//--------------------------------------
});



function caruselMoveUp(){

framenumber = framenumber + 1;

if (framenumber > 2 && framenumber < 4 && firststart == 0){
//alert("first time!")
$(".vertical-carousel-cine-film").find('li').eq(0).clone().appendTo($(".vertical-carousel-cine-film")).find('li').eq(1) ;
}


if (framenumber > 5){
$("#vertical-carousel-posts .vertical-carousel-cine-film").css("top","0px");
//$(".vertical-carousel-cine-film").find('li').eq(3).remove();
firststart=1;
framenumber = 0;
}



if (framenumber < 7){
$("#vertical-carousel-posts .vertical-carousel-cine-film")
.animate({top: '+=-130px'  }, 700); 
}


////////////////////
}


function caruselMoveDown(){



framenumber = framenumber - 1;

if (framenumber > 2 && framenumber < 4 && firststart == 0){
//alert("first time!")
$(".vertical-carousel-cine-film").find('li').eq(0).clone().appendTo($(".vertical-carousel-cine-film")).find('li').eq(1) ;
}


if (framenumber > 5 ){
$("#vertical-carousel-posts .vertical-carousel-cine-film").css("top","0px");
//$(".vertical-carousel-cine-film").find('li').eq(3).remove();
firststart=1;
framenumber = 0;
}



if ( framenumber < 7 && framenumber >= 0){
$("#vertical-carousel-posts .vertical-carousel-cine-film")
.animate({top: '-=-130px'  }, 700); 
}

if (framenumber <= 0){
	//alert("fgfgfg");
	framenumber = 0;

}
////////////////////
}
