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
        inquirer.prompt
    }
}