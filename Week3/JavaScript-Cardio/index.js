// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // If multiple words, put into array:
  const longestWordArr = sorted.filter((word, index, array) => word.length === array[0].length);
  // Return a string if only one word is the longest and an array of strings of the longest words
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;
  // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length and push on the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }
  return chunkedArr;
  //------------------------------------------//

  // // Init chunked Array
  // const chunkedArr = [];
  // // Loop through arr
  // arr.forEach((val) => {
  //   // Get last element
  //   const last = chunkedArr[chunkedArr.length - 1];

  //   // Check if last and if last length is equal to chunk len
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push(val);
  //   }
  // });

  // return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.reduce((flattedArr, item) => {
    flattedArr.push(...item);
    return flattedArr;
  }, []);
  //----------------------------------------------//
  // return arrays.reduce((acc, item) => acc.concat(item));
  //----------------------------------------------//
  // return [].concat.apply([], arrays);
  //----------------------------------------------//
  // return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

  return newStr;
}

// Call Function
const output = longestWord("Hello there, my name is Brad");
console.log(output);

const output2 = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output2);

const output3 = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output3);

// const output4 = isAnagram("elbow", "below");
const output4 = isAnagram("Dormitory", "dirty room##");
console.log(output4);

const output5 = letterChanges("Hello There");
console.log(output5);
