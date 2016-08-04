// =============================================== POPUP WINDOW HORIZONTAL =======================================>

// MODAL POPUP MENU-WINDOW SHOW
$(document).on('mouseenter',"#popup-launch-button",function() {
  if($( window ).width() > 768){
$('#popup-launch-button').css('margin-left','0px');
$(window).resize(function() {
$('#popup-launch-button').text("MOVE MOUSE OVER ME TO LAUNCH POPUP WINDOW");
});

 $( "#popupwindow_horizontal" )

.css({top:0,position:'absolute',opacity:0.0})

 .animate({
  
    top: "150px",
    opacity: 1.0,
  }, 1200 );

$('#popupwindow_horizontal').css('visibility','visible');
$('#popupwindow_horizontal').show();



}


if($( window ).width() < 768){

$('#popupwindow_vertical').css('visibility','visible');
$('#popupwindow_vertical').show();
$('#popup-launch-button').text("CLICK ME TO CLOSE POPUP");
$('#popup-launch-button').css('margin-left','12%');
$('#popup-launch-button').css('margin-top','-25px');

$(window).resize(function() {
$('#popupwindow_vertical').hide();
});


}

});






$(document).mousemove(function(event){

// IF POPUP WINDOW HIDE if SHOWN and MOUSE EXIT BORDERS
    if($("#popupwindow_horizontal").css('visibility') !== 'hidden'){

var popupwindow = $("#popupwindow_horizontal").offset();
var popupwindow_right_border = popupwindow.left+$("#popupwindow_horizontal").width();
var popupwindow_bottom_border = popupwindow.top+$("#popupwindow_horizontal").height();


  if ( event.pageX > popupwindow_right_border || event.pageX < popupwindow.left || event.pageY > popupwindow_bottom_border){
//alert("Out of popupwindow right border = " + event.pageX + " " + event.pageY);
$("#popupwindow_horizontal").hide();
  $('#popupwindow_horizontal').css('visibility','hidden');
    }
}
//////////////////////////////////
   
});


$(document).on('click',"#popup-launch-button",function() {
$("#popupwindow_horizontal").hide();
$("#popupwindow_vertical").hide();
});