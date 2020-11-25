const countLetters = sentence => {
  const letters = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      letters[letter] ? letters[letter]++ : letters[letter] = 1;
    }
  }
  return letters;
};

console.log(countLetters("lighthouse in the house"));