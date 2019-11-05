//The RegExp test() Method in JavaScript is used to test for match in a string. If there is a match this method returns true else it returns false. Where str is the string to be searched. 
// Here it is used to check for correct Letter input
// the - between a-z allows for spaces in words
var letterCheck = /^[a-z]$/


function Letter(char) {
    this.guessed = false;
    this.letter = char;
    this.showLetter = function() {
        if (this.guessed || !(letterCheck.test(this.letter))) {
            return this.letter.toUpperCase();
        } else {
            return "_";
        }
    }
    this.checkLetter = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;