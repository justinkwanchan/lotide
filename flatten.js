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

const flatten = arrays => {
  let newArray = [];
  for (const value of arrays) {
    if (Array.isArray(value)) {
      for (const arrayValue of value) {
        newArray.push(arrayValue);
      }
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};

console.log(flatten([[3, 'e', 1], 1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([[3, 'e', 1], 1, 2, [3, 4], 5, [6]]), [3, 'e', 1, 1, 2, 3, 4, 5, 6]);