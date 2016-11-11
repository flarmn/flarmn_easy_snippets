

$(document).ready(function(){
barcounti = 0;
countercontainervali = 0;
blogratingi = 0;
divideri = 0;
ii = 0;
zi= 0;

$("#featured-blog-rating-list-commented .bar-background-animated").css("width","100px");
 //alert("start0");
//alert("ghgh");
//$("#featured-blog-rating-list-commented .bar-background-animated").css("width","0px");
//blog_rating_animate2();


//--------------------------------------
});

 function blog_rating_animate2(){
barcounti = barcounti + 1;


  if (barcounti == 0){
$("#featured-blog-rating-list-commented .bar-background-animated").css("width","50px");
  }

  //clearInterval(bubu);
//alert("start");
//alert(barcounti);

//alert(barcounti);
countercontainervali = $("#bir" + barcounti).find(".counter-container").text();
blogratingi = ($("#commented-right-tab").width()/70)*countercontainervali;

//alert($("#commented-right-tab").width());
//alert("barcounti = " + barcounti);
//alert("countercontainervali = " +countercontainervali);
//alert("width = " + $("#featured-blog-rating-list-commented").width());

//alert("blogratingi = " + blogratingi);

var bubui = setInterval(function(){

//alert("start2");

zi = (countercontainervali/8);
if(ii<zi*8){
  ii = (ii + zi);
  $("#bir" + barcounti).find(".counter-container").text(ii);
}
else{ii = 0;clearInterval(bubui);
//$("#bar" + barcount).find(".counter-container").text(countercontainerval);
}
}, 
  50);

//alert(barcounti);

$("#bir" + barcounti).find(".bar-horizontal-text .bar-background-animated")
.animate({
      width: blogratingi
    }, {
      duration: 500,
      easing: "swing",
      //start: countups(),
      done: function(){
//$("#bar" + barcount).find(".counter-container").text();

        if (barcounti<5){
//alert("end" + barcounti);

        blog_rating_animate2();
        //countups();
      }//if
      else{
barcounti = 0;
countercontainervali = 0;
blogratingi = 0;
divideri = 0;
ii = 0;
zi= 0;

      }
      }//function done

});//animate

//countups();
//---------------------------------------------------------
}//function blog_rating_animate

