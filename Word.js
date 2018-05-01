const Letter = require('./Letter.js');


function Word (currentWord){
  this.currentWord = currentWord;
  this.newArray = [];

  for(let i =0; i<this.currentWord.length; i++){
    this[i] = new Letter(this.currentWord[i]);
    //console.log(this[i])
  }

  this.displayLet = function () {
    for (const letter in this){
        
      if(this[letter].displayLetter){
        
        this.newArray.push(this[letter].displayLetter())
        // console.log(this.newArray)
      }
    }
    console.log(this.newArray.join(' '))
  }

    this.checkLetter = function (guessedLetter){
      for (let letter in this){
        if(this[letter].isLetterGuessed){
          this[letter].isLetterGuessed(guessedLetter);
        }
      }
    }

//end constructor func
}

// let vari = new Word('pinecone');
// vari.displayLet()

module.exports = Word;