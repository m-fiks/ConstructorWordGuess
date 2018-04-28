//require Letter.js
const Letter = require('./Letter.js');
const Word = require('./Word.js');
const inquirer = require('inquirer');
//word bank - Marvel characters
const wordBank = ['Spiderman', 'Hawkeye', 'Black Widow', 'Captain America', 'Iron Man', 'Hulk', 'Thor', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant-Man', 'Falcon', 'Captain Marvel', 'Scarlet Witch', 'Quicksilver', 'Vision', 'War Machine'];
//choose random word for game play
const chosen = wordBank[Math.floor(Math.random() * wordBank.length)];

//plug chosen into constructor and display underscores
const theWord = new Word(chosen);
theWord.underscore();

//prompt user to guess a letter
function prompt () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Guess a letter',
            name: 'letterGuess'
        }
    ]).then(answers => {
        let currentLetter = answers.letterGuess;
        if (chosen.includes(currentLetter)){
            const newbie = new Letter(currentLetter, true)
            for (let i=0; i<chosen.length;i++){
                if(chosen[i] === currentLetter){
                    console.log('inthere');
                }
            }
        }
        else{
            console.log('o shit');
        }
    })
}

prompt();

function showLetter () {

}


