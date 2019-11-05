// Require called with fs package to grab functions from letter.js using modularzation.
var letter = require("./letter.js");
// Constructor function that depends on the letter constructor
function Word(char) {
    //This.getWord is used to create an object representing the current word the user is attempting to guess.
    this.getWord = char;
    //This.letterArr sets an array equal to the new letter.
    this.letterArr = [];
    //This defines an array of new letter objects representing the letters from the underlying words.
    this.makeWord = function() {
        var gameArr = this.getWord.split("");
        for (var i=0; i < gameArr.length; i++) {
            this.letterArr.push(new letter(gameArr[i]));
        }
    };

    this.dispWord = function() {
        var dispArr = [];
        for (var i = 0; i < this.letterArr.length; i++) {
            dispArr.push(this.letterArr[i].showLetter());
        }
        console.log(dispArr.join(" "));
    }
}