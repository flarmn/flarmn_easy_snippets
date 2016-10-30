 



$(document).ready(function(){


// STATIC VARS



// GETHERING and SETTING PARAMETERS

// getting window size (width)

// getting frame size

// getting frame proportions

// calculating film strip total length:

// getting total count of list members

// multiplying frame width * list memebers count

// updating carousel geometry according to parameters got

carousel_img_ratio = $(".carousel-frames>li:nth-child(1)").width() / ($(".carousel-frames>li:nth-child(1)").height());

alert(carousel_img_ratio);

striplength = $(".carousel-frames>li:nth-child(1)").width()*3;

frame_strip_position_shift = ($(".carousel-frames>li:nth-child(1)").width()/100)*49.5;

frame_strip_init_position = frame_strip_position_shift - (striplength/2);

frame_strip_position = frame_strip_init_position;

alert(frame_strip_position);

$(".carousel-frames").css("left",frame_strip_position+"px");





var carouselDefaultAnim = setInterval(function(){
//caruselMoveForward();
}, 5000);


$(document).on('click',".carousel-back-control",function() {
//clearInterval(carouselDefaultAnim);
caruselMoveForward();


if(steps > 2){
frame_strip_position = frame_strip_init_position;
 steps = 0;
}


if(distance < -3725){
distance = -1185;
}


});





$(document).on('click',".carousel-forward-control",function() {
clearInterval(carouselDefaultAnim);

//caruselMoveBackward();

if(steps < 0){
 distance = -3725;
 steps = 3;
}


if(distance > -1185){
distance = -3725;
}



});







//--------------------------------------
});





// ---------------------------------------------------------------------------------- ONWINDOW RESIZE FUNCTIONS
 $(window).resize(function(){
 	
window_width = $(window).width();


$(".carousel-container").width(window_width);
$(".carousel-container").height($(".carousel-container li>img").height());


//--------------------------------------
});






// ----------------------------------------------------------------------------------- FUNCTIONS SECTION
function caruselMoveForward(){

frame_strip_position = frame_strip_position + (frame_strip_init_position - 2.5);
steps = steps + 1;

if(steps > 1){
$(".carousel-frame").eq(1).clone().insertAfter($(".carousel-frame").eq(3)); 
$(".carousel-frame").eq(2).clone().insertAfter($(".carousel-frame").eq(4));
}


$(".carousel-frames")
//.css({left:'-1185px', position:'relative'})
.animate({left: frame_strip_position +"px" }, 700); 


//$(".carousel-frame").eq(1).remove(); 

if(steps > 2){
	 
frame_strip_position = frame_strip_init_position;
 steps = 0; 
 $(".carousel-frame:last-child").remove();
 $(".carousel-frame:last-child").remove();
}


}


function caruselMoveBackward(){

distance = distance + 1270;
steps = steps - 1;

/*
if(steps > 1){
$(".carousel-frame").eq(1).clone().insertAfter($(".carousel-frame").eq(3)); 
$(".carousel-frame").eq(2).clone().insertAfter($(".carousel-frame").eq(4));
}
*/

$(".carousel-frames")
.animate({left: distance +"px" }, 700); 


//$(".carousel-frame").eq(1).remove(); 

if(steps < 1){
	 
 distance = -5000;
 steps = 3; 
 //$(".carousel-frame:last-child").remove();
 //$(".carousel-frame:last-child").remove();
}


}