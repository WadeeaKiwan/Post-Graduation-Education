/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.
*/
function sumAll(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];

  let summedAll = 0;
  if (first < last) {
    for (let i = first; i <= last; i++) {
      summedAll += i;
    }
  } else if (first > last) {
    for (let i = first; i >= last; i--) {
      summedAll += i;
    }
  } else {
    summedAll = first;
  }
  return summedAll;
  //------------------------------------------//
  // const max = Math.max(arr[0], arr[arr.length - 1]);
  // const min = Math.min(arr[0], arr[arr.length - 1]);
  // if (min === max) {
  //   return min;
  // }
  // let summedAll = 0;
  // for (let i = min; i <= max; i++) {
  //   summedAll += i;
  // }
  // return summedAll;
  //--------------------------------------------//
  // // Buckle up everything to one!
  // const startNum = arr[0];
  // const endNum = arr[1];
  // // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  // const numCount = Math.abs(startNum - endNum) + 1;
  // // Using Arithmetic Progression summing formula
  // const sum = ((startNum + endNum) * numCount) / 2;
  // return sum;
  //--------------------------------------------//
  // let sum = 0;
  // for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
  //   sum += i;
  // }
  // return sum;
}

// function sumAll([first, last]) {
//   const step = first - last < 0 ? 1 : -1;
//   return first !== last ? first + sumAll([first + step, last]) : first;
// }

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));

/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  newArr = newArr.filter((item) => {
    if (!arr1.includes(item) || !arr2.includes(item)) {
      return item;
    }
  });
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
);

/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/
function destroyer(arr) {
  let args = Array.from(arguments);
  const newArr = arr.filter((item) => !args.includes(item));
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  const sourceKeysArr = Object.keys(source);

  arr = collection.filter((item) => {
    return sourceKeysArr.every((key) => {
      return item.hasOwnProperty(key) && item[key] === source[key];
    });
  });
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
console.log(
  whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2
  })
);
console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));

/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // Replace low-upper case to low-space-uppercase

  str = str.replace(/\s+/g, "-").toLowerCase(); // Replace space and underscore with -

  return str;
  //------------------------------------------------------//
  // str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // return str
  //   .toLowerCase()
  //   .split(/(?:_| )+/) // Split on whitespace and underscores
  //   .join("-");
  //-------------------------------------------------------//
  // return str
  //   .split(/\s|_|(?=[A-Z])/) // \s whitespace (?=[A-Z]) is follows bu an uppercase letter
  //   .join("-")
  //   .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
