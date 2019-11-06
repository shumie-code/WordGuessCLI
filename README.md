# WordGuessCLI
Node.js command line game using constructor functions

This coding game presents a word guess game played in the command line. 
The game uses node.js & node package manager in conjucntion with inquirer and fs package modules to run.


This is a Node.js Command Line Interface (CLI) Word Guessing Game built using JavaScript object constructors. The index.js runs the actual game with a dependency on the constructor, Word.js, which also has a dependency on the Letter.js constructor.
The game starts with a random word selected from the word bank

Each player is allowed 20 guesses

    if the player guesses correctly, the letter is revealed
    if the player guesses incorrectly, failed attemps is reduced by one
    the player can only input one letter at a time
    the player can only guess a letter once

When the player failed attempts reaches zero

    the game is over
    the game reloads a new word for player to guess

When the player guesses the word correctly

    the player wins
    the answer is displayed
    the player can choose to guess a new word
