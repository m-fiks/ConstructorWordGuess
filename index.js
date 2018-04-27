//require Letter.js
const Letter = require('./Letter.js');
const Word = require('./Word.js');
const inquirer = require('inquirer');
//console.log(Letter);
//word bank - Marvel characters
const wordBank = ['Spiderman', 'Hawkeye', 'Black Widow', 'Captain America', 'Iron Man', 'Hulk', 'Thor', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant-Man', 'Falcon', 'Captain Marvel', 'Scarlet Witch', 'Quicksilver', 'Vision', 'War Machine'];
//choose random word for game play
const chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(chosen);

//plug chosen into constructor
const theWord = new Word(chosen);
console.log(chosen);
console.log(theWord.underscore());

function prompt () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }
    ]).then(answers => {
        console.log(answers.letterGuess);
        if (chosen.includes(answers.letterGuess)){
            console.log('yes');
        }
        const newbie = new Letter(answers.letterGuess, false)
        console.log(newbie);
    })
}

prompt();


