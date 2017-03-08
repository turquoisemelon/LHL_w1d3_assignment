function countLetters (str) {
  var letters = {};
  var words = str.replace(/ /g,"").split("");
  for (var i = 0; i < words.length; i++) {
    if (words[i] in letters) {
      letters[words[i]]++;
    } else {
      letters[words[i]] = 1;
    }

  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));
