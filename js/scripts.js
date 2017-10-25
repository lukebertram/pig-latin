//back-end business time
var vowels = ['A','E','I','O','U']
var vowelsy = ['A','E','I','O','U','Y']

//returns the index of the first vowel in a string that begins with a consonant
var firstVowel = function(string){
  var firstVowelIndex;
  var splitUp = string.split("");
  for (var i = 0; i < splitUp.length; i++) {
    if (isVowel(splitUp[i], vowelsy)) {
      return i;
    }
  }
}
//returns true if letter is a vowel
var isVowel = function(letter, vowelSet){
  letter = letter.toUpperCase()
  bool = false;
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
    var output = latinize(userInput);
    $('#result').text(output);
  });
});
