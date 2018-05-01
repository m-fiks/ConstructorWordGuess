
function Letter (letter){
  this.letter = letter;
  this.display = false;

  this.displayLetter = function () {
    if (this.display){
      return this.letter;
    }
    return '_';
  }

  this.isLetterGuessed = function (guessedLetter){
    if(this.letter === guessedLetter){
      this.display = true;
    }
  }
}

// const bee = new Letter('a');
// console.log(bee.displayLetter());

module.exports = Letter;