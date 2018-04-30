const Letter = require('./Letter.js');


function Word (currentWord){
  this.currentWord = currentWord;
  let letterArray = currentWord.split('');
  let newArray = [];
  let letters;
  let secLetterArray = [];
  for(let i =0; i<letterArray.length; i++){
    newArray.push(new Letter(letterArray[i]));
    
  }

  newArray.forEach((elem) => {
    if (newArray.length > 1){
      elem.display = true;
    }
    secLetterArray.push(elem.displayLetter());
  });

  console.log(secLetterArray)
  

//end constructor func
}

let vari = new Word('pinecone');
