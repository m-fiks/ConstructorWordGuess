this.getLetters = function (){
    for(let i=0; i<this.chosenWord.length; i++){
      let newLetter = new Letter(this.chosenWord[i])
      this.arrayArray.push(newLetter);
    }
  }

  this.finder = function(letterGuessed) {
    for(let i=0; i<this.guessArray.length; i++){
      if (letterGuessed == this.guessArray[i]){
        return true;
      }
    }
    console.log(letterGuessed);

    for(let i=0; i< this.arrayArray.length; i++){
      if(this.arrayArray[i].letterin(letterGuessed)){
        this.arrayArray[i].display = true;
      }
    }
  }

  //old word.js file
  //dependent on letter.js
const Letter = require('./Letter.js');
//return underscores for letters
function Word(chosenWord) {
  this.chosenWord = chosenWord;
  this.arrayArray = [];
  this.guessArray = [];
  this.letters;
  //need another param so that it can trigger the if statement below?
  const arrayOfLetters = chosenWord.split('');
  //console.log(arrayOfLetters)

  this.testUnderscore = function () {
    for (let i=0; i< arrayOfLetters.length; i++){
      this.letters = new Letter (arrayOfLetters[i])
      //console.log(this.letters)
      let letterOnFunc = this.letters.displayLetter();
      this.arrayArray.push(letterOnFunc);
    }
    
    console.log(this.arrayArray)
    // arrayOfLetters.forEach(element => {
    //   this.letters = new Letter(element);

    this.checkLetter = function (letterGuessed){
      for(let i=0; i<this.arrayArray.length; i++){
        console.log(letterGuessed)
         if(this.arrayArray[i] == letterGuessed){
           console.log('same')
         }
        }
      this.testUnderscore();
     }
  }
}

const vari = new Word ('pinecone');
vari.testUnderscore();
vari.checkLetter('e');

module.exports = Word;