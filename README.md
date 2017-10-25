# Pig Latin Translator

#### Translates your garbage words into pig latin, 10-25-2017

#### By **Luke Bertram** & **Shane Ryan**

## Specifications

* Does nothing to non-alphabetical characters
 * Input: 3  
 * Output: 3  

* Adds "ay" to single-letter words beginning with a vowel.  
 * Input: a
 * output: away

* Adds "ay" to multiple-letter words beginning with a vowel.  
 * Input: apple
 * Output: appleway

* For words beginning with one or more consonants, moves all of first consecutive consonants to the end and add "ay."  
 * Input: travesty
 * Output: avestytray

* For words whose first consonants include "qu," move the "u" along with the "q."
 * Input: squeal
 * Output: ealsquay

* For words beginning with "y," treat "y" as a consonant.
 * Input: yurt
 * Output: urtyay

* Translates entire sentences, applying the above rules to individual words.
 * Input: "the quick brown fox jumped over the lazy dog"
 * Output: "ethay ickquay ownbray oxfay umpedjay overway ethay azylay ogday."

* Apply previous rules to words starting with uppercase letters, outputting a pig latin word with an uppercased first letter.
 * Input: Hammer
 * Output: Ammerhay

## Description

It does what I said!

## Setup/Installation Requirements

For greatest ease of use, simply visit [this website](http://lukebertram.github.io/track-suggester) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

* Visit the github page for [this project](http://github.com/lukebertram/track-suggester)
* Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/track-suggester.git
* Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
>$cd ~

* Next, cast the following, more advanced spell:  
>$git clone https://github.com/lukebertram/track-suggester.git

* Finally, open the project in your system's default web browser with the following final incantation:
>$open track-suggester/index.html

## Known Bugs



## Support and contact details



## Technologies Used

The bulk of this project consists of a radio-button-heavy HTML form and branching logic written in JQuery/JavaScript. When the form is submitted, the usual post request is suppressed by javascript, and the answers are gathered from the form via JQuery.

### License

MIT License

Copyright (c) 2017 Luke Bertram
