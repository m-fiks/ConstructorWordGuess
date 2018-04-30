
function Letter (letter){
  this.letter = letter;
  this.display = false;
  this.displayLetter = function () {
    if (this.display){
      return this.letter;
    }
    return '_';
  }
}

// const bee = new Letter('a');
// console.log(bee.displayLetter());

module.exports = Letter;