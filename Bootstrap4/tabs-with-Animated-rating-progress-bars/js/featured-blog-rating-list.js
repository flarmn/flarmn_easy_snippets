$(document).ready(function(){
barcount = 0;
countercontainerval = 0;
blograting = 0;
divider = 0;
i = 0;
z= 0;
 

//blog_rating_animate();


//--------------------------------------
});

 function blog_rating_animate(){

barcount = barcount +1;

countercontainerval = $("#bar" + barcount).find(".counter-container").text();
blograting = (($("#most-read-right-tab").width()+3)/6300)*countercontainerval;

var bubu = setInterval(function(){
z = (countercontainerval/8);
if(i<z*8){
  i = (i + z);
  $("#bar" + barcount).find(".counter-container").text(i);
}
else{i = 0;clearInterval(bubu);
//$("#bar" + barcount).find(".counter-container").text(countercontainerval);
}
}, 
  50);



$("#bar" + barcount).find(".bar-background-animated")
.animate({
      width: blograting
    }, {
      duration: 500,
      easing: "swing",
      //start: countups(),
      done: function(){
//$("#bar" + barcount).find(".counter-container").text();

        if (barcount<5){

        blog_rating_animate();
        //countups();
      }//if
      else{
barcount = 0;
countercontainerval = 0;
blograting = 0;
divider = 0;
i = 0;
z= 0;

      }



      }//function done

});//animate

//countups();
//---------------------------------------------------------
}//function blog_rating_animate

