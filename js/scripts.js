//back-end business time
var vowels = ['A','E','I','O','U']

//returns the index of the first vowel in a string that begins with a consonant
var firstVowel = function(string){
  var firstVowelIndex;
  var splitUp = string.split("");
  for (var i = 0; i < splitUp.length; i++) {
    if (isVowel(splitUp[i])) {
      return i;
    }
  }
}
//returns true if letter is a vowel
var isVowel = function(letter){
  letter = letter.toUpperCase()
  bool = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter){
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
  debugger
  if (!isLetter(firstChar)){
    translated = input;
  } else if (isVowel(firstChar)){
    translated = input.concat("way");
  } else {
    var vowelIndex = firstVowel(input);
    var prefix = input.slice(0,vowelIndex).concat("ay");
    translated = input.slice(vowelIndex, input.length).concat(prefix);
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
