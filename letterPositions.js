const letterPositions = function(sentence) {
  const results = {};
  
  for (const i in sentence) {
    if (sentence[i] !== ' ') {
      results[sentence[i]] ? results[sentence[i]].push(parseInt(i)) : results[sentence[i]] = [parseInt(i)];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));