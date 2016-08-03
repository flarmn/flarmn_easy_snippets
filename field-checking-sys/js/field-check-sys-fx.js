

// FOCUS-IN FIELDS OVERRIDER
$(document).on('focusin',"input,textarea",function() {
$(this).removeClass( "inputfield-unselected" );
$(this).addClass( "inputfield-selected" );
// ---------------------------------
});


$(document).on('focusout',"input,textarea",function(picked_field_ID) {

var picked_field_ID = $(this).attr('id');
    picked_field_ID = "#"+picked_field_ID;

var loginpattern = /^[a-z0-9_-]{2,30}$/i;



// LIST of PAGES to ignore INPUT 
if ($(document).find("title").text() != "Авторизация" && $(document).find("title").text() != "Контакты"){
//alert("not authorization");


  if ($(this).attr('id')!="email-inputfield" ){
  //alert("not email field");

  
    if ($(this).val().search(loginpattern) != 0){
    //IF FIELD NOT EMAIL AND IS EMPTY
//alert("BAD");
$(this).removeClass( "inputfield-selected" );
$(this).addClass( "inputfield-unselected-error" );
$(this).closest(".form-group").find('label').addClass( "error-label" );

}// login pattern

else // IF FIELD NOT EMAIL AND NOT EMPTY
{
//alert("GOOD");
$(this).removeClass( "inputfield-unselected-error" );
$(this).addClass( "inputfield-unselected" );
$(this).closest(".form-group").find('label').removeClass( "error-label" );

}


}// EMAIL ID

else // IF FIELD IS EMAIL! - RUN EMAIL ROUTIN 
{ 
    //alert("EMAIL FIELD");
    email_field_check(picked_field_ID);
}


if ($(this).attr('id')=="phone-inputfield" ){ // IF FIELD IS EMAIL! - RUN EMAIL ROUTIN 

    //alert("EMAIL FIELD");
    phone_field_check(picked_field_ID);
}


}// authorization // ---------------------------------

}); // focusout





// ----------------- FUNCTIONS SECTION ------------------------- //

function email_field_check(picked_field_ID){

var emailpattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

// CHECKING If this is login with enouf charecters
if ($("#email-inputfield").val().search(emailpattern) != 0){

// ALL BAD
//alert("FOO email");
$(picked_field_ID).removeClass( "inputfield-selected" );
$(picked_field_ID).addClass( "inputfield-unselected-error" );
$(picked_field_ID).closest(".form-group").find('label').addClass( "error-label" );

}

else{
// ALL OK
//alert("CORRECT email");

$(picked_field_ID).removeClass( "inputfield-unselected-error" );
$(picked_field_ID).addClass( "inputfield-unselected" );
$(picked_field_ID).closest(".form-group").find('label').removeClass( "error-label" );
}


//---------------------
}


function phone_field_check(picked_field_ID){

var phonepattern = /^[0-9]{10,10}$/i;

$(this).removeClass( "inputfield-selected" );
$(this).addClass( "inputfield-unselected" );
// CHECKING If this is login with enouf charecters
if ($("#phone-inputfield").val().search(phonepattern) != 0){

// ALL BAD
//alert("FOO email");
$(picked_field_ID).removeClass( "inputfield-selected" );
$(picked_field_ID).addClass( "inputfield-unselected-error" );
$(picked_field_ID).closest(".form-group").find('label').addClass( "error-label" );

}

else{
// ALL OK
//alert("CORRECT email");

$(picked_field_ID).removeClass( "inputfield-unselected-error" );
$(picked_field_ID).addClass( "inputfield-unselected" );
$(picked_field_ID).closest(".form-group").find('label').removeClass( "error-label" );
}


//---------------------
}

