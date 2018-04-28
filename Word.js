//dependent on letter.js
const Letter = require('./Letter.js');
//return underscores for letters
function Word(chosenWord) {
  this.chosenWord = chosenWord;
  this.arrayArray = [];
  this.testUnderscore = function () {
    const arrayOfLetters = chosenWord.split('');
    arrayOfLetters.forEach(element => {
      const garbage = new Letter(element)
    //console.log(garbage.letter);
      console.log(garbage.displayLetter(garbage.letter));
      this.arrayArray.push(garbage.letter);
      
      });
      console.log(this.arrayArray)
    };
  
    // this.underscore = function () {
    //   let arrayChosen = chosenWord.toLowerCase().split('');
    //   //if letter not guessed use underscore
    //   const underScores = arrayChosen.map(elem => '_');
    //   console.log(underScores);
      //else display letter
    //}
    // this.correctArray = function (elem){
    //   push correct letter into array?
    // }
  }
  const mouse = new Word('apple');
 mouse.testUnderscore();

  module.exports = Word;