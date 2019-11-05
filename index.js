// Calls word.js functions via word.js module
var Word = require("./word.js");
// Calls npm package Inquirer
var inquirer = require("inquirer");

function playGame() {
    var wordArr = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

    var usedArray = [];

    var letterCheck = /^[a-z]$/;

    var totalGuesses = 20;

    console.log("\nThe Solar System Game. There are " totalGuesses + " Attempts to guess the planets names\n");
    var chosenWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    var gameWord = new Word(chosenWord)
    gameWord.makeWord();

    for (var i=0; i < gameWord.letterArr.length; i++) {
        if (!letterCheck.test(gameWord.letterArr[i].letter)) {
            console.log(gameWord.letterArr[i].letter);
            gameWord.letterArr[i].guessed = true;
        }
    }

    gameWord.dispWord()

    promptUser();

    function promptUser() {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose letter",
                name: "guess"
            }
        ]) .then(function (response){

            if (totalGuesses >= 1) {
                gameWord.makeGuess(response.guess);
            }

            var usedIndex = -1;
            var alreadyGuessed = false;
            usedIndex = usedArray.indexOf(response.guess);
            if (usedIndex > -1) {
                alreadyGuessed = true;
            }

            usedArray.push(response.guess);

            var letterInWord = false;

            for (var i = 0; i < gameWord.letterArr.length; i++) {
                if (response.guess === gameWord.letterArr[i].letter && !alreadyGuessed) {
                letterInWord = true;
            }
         }
         
         if (letterInWord) {
             console.log("Correct, you have " + totalGuesses + "Guesses left.\n") 
         }
         else {
             totalGuesses--;

             if (alreadyGuessed) {
                 if (totalGuesses === 0) {
                     console.log("Letter already guessed\n");
                 } else {
                     console.log("letter already guessed, next chance, you have " + totalGuesses + "Guesses left.\,n");
                 }
             } else {
                if (totalGuesses === 0) {
                    console.log("wrong\n");
                } else {
                    console.log("Wrong, next chance, you have " + totalGuesses + "Guesses left\n.");
                }
             }
         }

         var matchLetter = false;
         for (i=0; i < gameWord.letterArr.length; i++){
             if (gameWord.letterArr[i].guessed === false) {
                 matchLetter = true;
             }
         }

         if (!matchLetter) {
             gameWord.dispWord();
             console.log("\nWinner Winner\n");
             replayGame();
         } else {
             gameWord.dispWord()

             if (totalGuesses === 0) {
                 console.log("\n You are a L0SER! The right answer is: " + chosenWord.toUpperCase() + "\n");
                 replayGame();
             } else {
                 promptUser();
             }
         }
        });
    }
}
