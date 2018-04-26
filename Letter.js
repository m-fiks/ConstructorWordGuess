//return underscores for letters
function Letter(word) {
  this.underscore = function () {
    const lettersArray = word.split('');
    const underScores = lettersArray.map(elem => '_');
    return underScores;
  };
}

// const thingy = new Letter('Pinecone');
// console.log(thingy.underscore());

module.exports = Letter;
