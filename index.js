//require Letter.js
const Letter = require('./Letter.js');
const Word = require('./Word.js');
const inquirer = require('inquirer');
//word bank - Marvel characters
const wordBank = ['Spiderman', 'Hawkeye', 'Black Widow', 'Captain America', 'Iron Man', 'Hulk', 'Thor', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant Man', 'Falcon', 'Captain Marvel', 'Scarlet Witch', 'Quicksilver', 'Vision', 'War Machine'];
//choose random word for game play
let chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
//take out spaces and make all letters UPPERCASE
chosen = chosen.replace(/\s+/g, '').toUpperCase();

let guessesRemaining = (chosen.length) + 2;

let correctGuesses = [];
//plug chosen into constructor and display underscores
const theWord = new Word(chosen);
theWord.displayLet();
//console.log(theWord.currentWord)

//prompt user to guess a letter
function prompt () {
    console.log(`Guesses Remaining: ${guessesRemaining}`);
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }
    ]).then(answers => {
        let currentGuess = (answers.letterGuess).toUpperCase()
        //check to see if letter is in word chosen
        if(chosen.includes(currentGuess)){
            //took out console.log from below
            theWord.checkLetter(currentGuess);
            theWord.displayLet();
            correctGuesses.push(currentGuess);
            guessesRemaining--;
            gameOver();
        }
        else{
            //prompt user to guess again
            console.log('incorrect guess. try again!')
            guessesRemaining--;
            gameOver();
        }
    })
}
prompt();

function gameOver (){
    if (guessesRemaining === 0){
        console.log(`You ran out of guesses! The word was ${chosen}.`);
    }
    else if(theWord.newArray.indexOf('_') === -1){
        console.log('Good job! You win!')
    }
    else{
        prompt();
    }
}