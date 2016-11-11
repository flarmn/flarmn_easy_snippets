

$(document).ready(function(){
barcount_auth = 0;
countercontainerval_auth = 0;
blograting_auth = 0;
divider_auth = 0;
i_auth = 0;
z_auth= 0;

authors_rating_animate();

//--------------------------------------
});

 function authors_rating_animate(){
barcount_auth = barcount_auth + 1;


  if (barcount_auth == 0){
//$("#top-authors-right-panel .vertical-bar").css("margin-top","100px");
  }

countercontainerval_auth = $("#auth" + barcount_auth).find(".vertical-progress-bar-container > label").text();
blograting_auth = (10/100)*countercontainerval_auth;

var bubuiz = setInterval(function(){

//stoping interval
if(barcount_auth<5){
i_auth = 100 - countercontainerval_auth;

$("#auth" + barcount_auth).find(".vertical-bar").css("margin-top",i_auth+"px");
authors_rating_animate();
}
else{
clearInterval(bubuiz);
}

}, 
  500);
//---------------------------------------------------------
}//function blog_rating_animate