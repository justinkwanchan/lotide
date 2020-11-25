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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const jk = { a: [1, 'e', 3], b: 2 };
const kj = { b: 2, a: [1, 'e', 3] };
console.log(eqObjects(jk, kj));