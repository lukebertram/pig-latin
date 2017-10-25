//back-end business time
var vowels = ['a','e','i','o','u']
var isVowel = function(letter){

  return true;
};

var latinize = function(input){
  var translated;
  var firstLetter = input.charAt(0);

  if (isVowel(firstLetter)){
    translated = input.concat("way");
  }
  return translated;
};


//front-end funky town
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $('#textInput').val();
    var output = latinize(userInput);
    $('#result').text(output);
  });
});
