// Require called with fs package to grab functions from letter.js using modularzation.
var letter = require("./letter.js");
// Constructor function that depends on the letter constructor
function Word(char) {
    //this is used to create an ob
    this.getWord = char;
    this.letterArr =[];
    this.makeWord = function() {
        var gameArr = this.getWord.split("");
        for (var i=0; i < gameArr.length; i++) {
            this.letterArr.push(new letter(gameArr[i]));
        }
    };



}