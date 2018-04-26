//require Letter.js
const Letter = require('./Letter.js');
//console.log(Letter);
//word bank - Marvel characters
const wordBank = ['Spiderman', 'Hawkeye', 'Black Widow', 'Captain America', 'Iron Man', 'Hulk', 'Thor', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant-Man', 'Falcon', 'Captain Marvel', 'Scarlet Witch', 'Quicksilver', 'Vision', 'War Machine'];
//choose random word for game play
const chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(chosen);

//plug chosen into constructor
const wordWord = new Letter(chosen);
console.log(chosen);
console.log(wordWord.underscore());



