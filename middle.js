const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (const i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);