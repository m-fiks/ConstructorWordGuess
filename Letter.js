
function Letter (letter){
  this.letter = letter;
  //console.log(letter);
  //default to false to display underscore
  this.letterGuessed = false;
  
  this.displayLetter = function (letter) {
    if (this.letterGuessed === false){
      this.letter = '_';
      return this.letter;
    }
  }
}

// const bee = new Letter('b');
// bee.displayLetter();

module.exports = Letter;