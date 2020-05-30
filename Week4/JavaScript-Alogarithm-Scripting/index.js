/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  let conStr;
  // match returns an array with matched value in the first element if matched and null if not
  if (str[0].match(/a|e|i|o|u/)) {
    return `${str}way`;
  } else {
    // The first sign `^` will look from the beginning of the string for one or more characters with the help of `+` sign at the end. The second `^` sign inside the square brackets will work as `not` the following characters
    conStr = str.match(/^[^a|e|i|o|u]+/)[0];
    return `${str.substring(conStr.length)}${conStr}ay`;
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));

/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const beforeIndex = strArr.indexOf(before);
  let afterChecked = after;
  if (before.match(/^[A-Z]/)) {
    afterChecked = `${after[0].toUpperCase()}${after.substring(1)}`;
  }
  strArr.splice(beforeIndex, 1, afterChecked);
  const newStr = strArr.join(" ");
  return newStr;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

/* DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
  let pairArr = [];
  const strArr = str.split("");
  strArr.map((element) => {
    switch (element) {
      case "G":
        pairArr.push([element, "C"]);
        break;
      case "C":
        pairArr.push([element, "G"]);
        break;
      case "A":
        pairArr.push([element, "T"]);
        break;
      case "T":
        pairArr.push([element, "A"]);
        break;
      default:
        pairArr.push(`No matched pair for ${element}`);
        break;
    }
  });
  return pairArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("CTCTA"));

/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  let compare = str.charCodeAt(0);
  // console.log(compare);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      // console.log(str.charCodeAt(i), compare);
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
function uniteUnique(arr) {
  // let sortedArr = arr.concat(...arguments);
  // return (sortedArr = [...new Set(sortedArr)]);
  // -------------------------------------------------------------- //
  let sortedArr = arr.concat(...arguments);
  // indexOf returns the position of the first occurrence of an array element or a substring.
  return sortedArr.filter((item, index) => sortedArr.indexOf(item) === index);
  // -------------------------------------------------------------- //
  // let sortedArr = arr.concat(...arguments);
  // return sortedArr.reduce((uniqueArr, item) => {
  //   if (uniqueArr.includes(item)) {
  //     // console.log(uniqueArr);
  //     return uniqueArr;
  //   } else {
  //     // console.log(uniqueArr);
  //     return [...uniqueArr, item];
  //   }
  // }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
  //---------------------------------------------------------------//
  // const htmlEntities = {
  //   "&": "&amp;",
  //   "<": "&lt;",
  //   ">": "&gt;",
  //   '"': "&quot;",
  //   "'": "&apos;"
  // };
  // return str.replace(/[&<>\"']/g, (entity) => htmlEntities[entity]);
  //----------------------------------------------------------------//
  // const htmlEntities = {
  //   "&": "&amp;",
  //   "<": "&lt;",
  //   ">": "&gt;",
  //   '"': "&quot;",
  //   "'": "&apos;"
  // };
  // return str
  //   .split("")
  //   .map((entity) => htmlEntities[entity] || entity)
  //   .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("<>"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("abc"));
