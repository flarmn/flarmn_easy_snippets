

slider =1;
 $(document).ready(function(){
//alert("hello!");
animatebar();


$("#carousel-text-multiframe").on("mouseover", function(){
	//alert("hover");
	animateBarStop();
});

$("#carousel-text-multiframe").on("mouseout", function(){
	//alert("hover");
	//$("#carousel-text-multiframe").carousel('cycle');
	animatebar();
});

  //--------------------------------------
});

 function animatebar(){

 	$("#carousel-slide" + slider).find(".carousel-link").css("color","rgb(37, 40, 42)");
 	$("#carousel-slide" + slider).find(".carousel-animated-background")
.animate({
      width: "280px"
    }, {
      duration: 5000,
      easing: "linear",
     //step: function(x) {
     //   $("#demo").text(Math.round(x * 100 / 300)  + "%");  
     // },
      done: function() {
      	$("#carousel-slide" + slider).find(".carousel-animated-background").css("width","0px");
      	$("#carousel-slide" + slider).find(".carousel-link").css("color","rgb(124, 124, 124)");
        slider = slider + 1;  


if (slider == 5 || slider == 9 ){
//$("#carousel-frame" + slider).find(".carousel-animated-background").css("width","0px");
$("#carousel-text-multiframe").carousel('next');
}

if (slider>8){
//$("#carousel-frame" + slider).find(".carousel-animated-background").css("width","0px");
slider = 1;
$("#carousel-text-multiframe").carousel('next');
}
animatebar();
      }
  
});
 }

 function animateBarStop(){
 	$("#carousel-slide" + slider).find(".carousel-animated-background").clearQueue();
	$("#carousel-slide" + slider).find(".carousel-animated-background").stop();

	//$("#carousel-text-multiframe").carousel('pause');
 }