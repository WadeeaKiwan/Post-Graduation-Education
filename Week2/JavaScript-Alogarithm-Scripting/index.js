/* Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;

  // ---------------------------------------------------- //
  // let regExp = new RegExp(target + "$", "i");
  // return regExp.test(str);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(
  confirmEnding(
    "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
    "mountain"
  )
);

/* Repeat a String Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);

/* Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  let truncatedString;
  if (num && num < str.length) {
    truncatedString = str.slice(0, num).concat("...");
    return truncatedString;
  }
  return (truncatedString = str);
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);

/* Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  const elements = arr.filter(func);
  if (elements.length > 0) {
    return elements[0];
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});

/* Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
  return bool === true || bool === false;
}

booWho(null);
booWho([].slice);
booWho("false");
booWho(NaN);

/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(" ");
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

/* Slice and Splice
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
  let newArr2 = arr2.slice(0); // Slice() doesn't mutate the original array, it makes a new one
  newArr2.splice(n, 0, ...arr1); // Splice() mutates the original array
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3], [4, 5], 1);
