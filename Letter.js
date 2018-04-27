
function Letter (letter, letterGuessed){
  this.letter = letter;
  this.letterGuessed = false;
  this.checkTheLetter = function (elem) {
    return elem;
  }
  this.showtime = function (){
    if (letterGuessed === true){
      //show letter
    }
    else if (letterGuessed === false){
      //show underscore
    }
  }
}

module.exports = Letter;
