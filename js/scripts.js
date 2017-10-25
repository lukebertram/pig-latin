//back-end business time
var vowels = ['A','E','I','O','U']
var vowelsy = ['A','E','I','O','U','Y']
//returns the index of the first vowel in a string that begins with a consonant
var firstVowel = function(string){
  var firstVowelIndex;
  var splitUp = string.split("");
  //start looking at index 1 (avoids "y" as first letter case)
  for (var i = 1; i < splitUp.length; i++) {
    if (isVowel(splitUp[i], vowelsy)) {
      return i;
    }
  }
}
//returns true if letter is a vowel
var isVowel = function(letter, vowelSet){
  letter = letter.toUpperCase()
  var bool = false;
  for (var i = 0; i < vowelSet.length; i++) {
    if (vowelSet[i] === letter){
      bool = true;
    }
  }
  return bool;
};
//returns true if character is a letter
var isLetter = function(character){
  return character.length === 1 && character.match(/[a-z]/i);
};
//returns a string translated into pig latin
var latinize = function(input){
  var translated;
  var firstChar = input.charAt(0);
  // if first character is not a letter
  if (!isLetter(firstChar)){
    translated = input;
    // if first character is a vowel
  } else if (isVowel(firstChar, vowels)){
    translated = input.concat("way");
    // if first characters are "squ"
  } else if (input.substring(0,3).toUpperCase() === "SQU"){
    var suffix = "squay";
    translated = input.slice(3, input.length).concat(suffix);
    // if first characters are "qu"
  } else if (input.substring(0,2).toUpperCase() === "QU"){
    var suffix = "quay";
    translated = input.slice(2, input.length).concat(suffix);
    // if first character is any other consonant
  } else {
    var vowelIndex = firstVowel(input);
    var suffix = input.slice(0,vowelIndex).concat("ay");
    translated = input.slice(vowelIndex, input.length).concat(suffix);
  }
  return translated;
};
//front-end funky town
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var userInput = $('#textInput').val();
    var output = "";
    //split sentence up and process one word at a time
    var userSentence = userInput.split(" ");
    for (var i = 0; i < userSentence.length; i++) {
      output = output + " " + latinize(userSentence[i]);
    }
    $('#result').text(output);
  });
});
