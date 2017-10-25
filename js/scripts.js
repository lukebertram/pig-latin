//back-end business time
var vowels = ['a','e','i','o','u']
var latinize = function(input){
  var translated = input;
  return translated;
}

//front-end funky town
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $('#textInput').val();
    var output = latinize(userInput);
    $('#result').text(output);
  });
});
