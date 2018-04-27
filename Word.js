//dependent on letter.js
const Letter = require('./Letter.js');

//return underscores for letters
function Word(word) {
    this.underscore = function () {
      const lettersArray = word.split('');
      const underScores = lettersArray.map(elem => '_');
      return underScores;
    };
  }
  
  // const thingy = new Letter('Pinecone');
  // console.log(thingy.underscore());
  
  module.exports = Word;