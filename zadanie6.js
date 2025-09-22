function toWeirdCase(inputText) {
  let wordList = inputText.split(' ');
  let transformedWords = [];

  for (let currentWord of wordList) {
    let weirdWord = '';
    for (let position = 0; position < currentWord.length; position++) {
      weirdWord += position % 2 === 0
        ? currentWord[position].toUpperCase()
        : currentWord[position].toLowerCase();
    }
    transformedWords.push(weirdWord);
  }

  return transformedWords.join(' ');
}
