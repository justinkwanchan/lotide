const middle = inputArray => {
  const length = inputArray.length;
  if (length < 3) {
    return [];
  }
  let middle = Math.floor(length / 2);
  if (length % 2 === 1) {
    return inputArray.slice(middle, middle + 1);
  } else {
    return inputArray.slice(middle - 1, middle + 1);
  }
};

module.exports = middle;