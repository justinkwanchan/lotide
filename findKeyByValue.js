const findKeyByValue = (inputObj, inputKey) => {
  for (const i in inputObj) {
    if (inputObj[i] === inputKey) {
      return i;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));