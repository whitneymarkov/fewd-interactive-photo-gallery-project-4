//variables for the input fields and the images

var $textInput = $('#text-input');
var $images = $('img');

//use keyup event for live feedback and loop
$textInput.keyup(function(event) {
    //use .val() method to return an array containing the value of each selected option. Lowercase method
  var value = $textInput.val().toLowerCase();
  //show images if the title matches any input strings
  $images.show();
  //if input field is not empty and does not match any strings then hide images
  if (value !== '') {
    $images.not('[title*="' + value + '"]').hide();
  }
});
