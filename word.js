// Require called with fs package to grab functions from letter.js using modularzation.
var letter = require("./letter.js");
// Constructor function that depends on the letter constructor
function Word(char) {
    //This.getWord is used to create an object representing the current word the user is attempting to guess.
    this.getWord = char;
    //This.letterArr sets an array equal to the new letter.
    this.letterArr = [];
    //This defines an array of new letter objects representing the letters from the underlying words.
    this.makeWord = function () {
        var gameArr = this.getWord.split("");
        for (var i = 0; i < gameArr.length; i++) {
            this.letterArr.push(new letter(gameArr[i]));
        }
    };
    //This.display word function for returning a string of the word. 
    this.dispWord = function () {
        //Displays returning word objects in an array.
        var dispArr = [];
        //Iterates through the letter array to check if the word contains the letter guessed.
        for (var i = 0; i < this.letterArr.length; i++) {
            dispArr.push(this.letterArr[i].showLetter());
        }
        //Displays to the console the charecter and or underscore and concatantes them together.
        console.log(dispArr.join(" "));
    }
    // Function that takes a charecter as an argument and calls the guess function on each letter object.
    this.makeGuess = function (char) {
        //Iterates through the second function defined in letter.js
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].checkLetter(char);
        }
    }
}

module.exports = Word;