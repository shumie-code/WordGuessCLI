// Calls word.js functions via word.js module
var Word = require("./word.js");
// Calls npm package Inquirer
var inquirer = require("inquirer");
// Array holding the planets in the solar system
function playGame() {
    var wordArr = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
// Array of used letters
    var usedArray = [];
// Check for letter inputs using regex
    var letterCheck = /^[a-z]$/;
// Establishes total guesses 
    var totalGuesses = 20;
// Logs the name of the game along with the total guesses remaining pulled  from the totalGuesses variable
    console.log("\nThe Solar System Game. There are " totalGuesses + " Attempts to guess the planets names\n");
  //Set word array of planets to be random and sets them as a variable stored in chosen word
    var chosenWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    //Sets new chosen word as the variable gameWord
    var gameWord = new Word(chosenWord)
    gameWord.makeWord();
    // Iterates through the game word chosen and the letter array, if the letter is found then boolean will be set to true,
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
             console.log("\nWinner Winner!\n");
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

function replayGame(){
    inquirer.prompt([
        {
            type: "list",
            message: "Play again?",
            choices: ["again", "quit"],
            name: "again"
        }
    ]).then(function(response) {
        if (response.again === "Again") {
            console.log("\n New planet to guess:");
            playGame();
        } else {
            console.log("\nSeeYouLater\m");
        }
    });
}

playGame();