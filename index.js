//require Letter.js
const Letter = require('./Letter.js');
//word bank - Marvel characters
const wordBank = ['Spiderman', 'Hawkeye', 'Black Widow', 'Captain America', 'Iron Man', 'Hulk', 'Thor', 'Loki', 'Black Panther', 'Deadpool', 'Doctor Strange', 'Ant-Man', 'Falcon', 'Captain Marvel', 'Scarlet Witch', 'Quicksilver', 'Vision', 'War Machine'];
//choose random word for game play
const chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(chosen);

