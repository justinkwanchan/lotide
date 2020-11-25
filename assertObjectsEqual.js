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

const eqObjects = (obj1, obj2) => {
  const objLength1 = Object.keys(obj1).length;
  const objLength2 = Object.keys(obj2).length;
  if (objLength1 !== objLength2) {
    return false;
  }
  for (const objKey in obj1) {
    if (Array.isArray(obj1[objKey]) && Array.isArray(obj2[objKey])) {
      return (eqArrays(obj1[objKey], obj2[objKey]));
    }
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const jk = { a: [1, 'e', 3], b: 2 };
const kj = { b: 2, a: [1, 'e', 3] };
assertObjectsEqual(jk, kj);