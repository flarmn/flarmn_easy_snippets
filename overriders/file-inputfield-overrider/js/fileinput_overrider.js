/* CODE CREATED BY SVYATOSLAV LEVCHENKO */

$("document").ready(function(){
$('#fileupload-inputtext-overrider').prop( "disabled", true );
$('.fileupload-overrider input[type=file]').change(function () {
var inputfilevalue = $(".fileupload-overrider input[type=file]").val();
$(".fileupload-overrider #fileupload-inputtext-overrider").val(inputfilevalue);
});


$('.fileupload-overrider input[type=file]').click(function(){
$('#fileupload-inputtext-overrider').prop( "disabled", false );
});

$('#fileupload-inputtext-overrider').change(function() {
//alert("clearing");
$(".fileupload-overrider input[type=file]").val("");
//alert($(".fileupload-overrider input[type=file]").val());
});

});