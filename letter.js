//The RegExp test() Method in JavaScript is used to test for match in a string. If there is a match this method returns true else it returns false. Where str is the string to be searched. 
// Here it is used to check for correct Letter input
// the - between a-z allows for spaces in words
var letterCheck = /^[a-z]$/

//Letter constructor that defines a string value
function Letter(char) {
    //this.letter defines a string value to store the underlying charecter for the letter.
    this.letter = char;
    // this.guessed acts as a boolean value that determines whether the letter has been guessed yet. 
    this.guessed = false;
    //Function that returns the underlying charecter if that letter has been guessed.
    this.showLetter = function() {
        //Call to regex letter check to compare with the letter charecter input and uses the this guessed boolean to determine if it is true or false
        if (this.guessed || !(letterCheck.test(this.letter))) {
            //returns the correctly guessed letter to the screen as an uppercase letter if correctly guessed
            return this.letter.toUpperCase();
            //Establishes a placeholder incase the correct letter has not been guessed.
        } else {
            return "_";
        }
    }
    //Function that takes a charecter as a argument.
    this.checkLetter = function(guess) {
        //Checks charecter against underlying value for match.
        if (guess === this.letter) {
            //Updates stored boolean value to true if guess is correct.
            this.guessed = true;
        }
    }
}
// Object exposes letter as a node module.
module.exports = Letter;