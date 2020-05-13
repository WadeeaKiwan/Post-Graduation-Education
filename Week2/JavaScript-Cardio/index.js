// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split("").reverse().join("");

  //--------------------------------------------//
  // let revStr = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revStr += str[i];
  // }
  // return revStr;
  //--------------------------------------------//
  // let revStr = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revStr = str[i] + revStr;
  // }
  // return revStr;
  // -------------------------------------------//
  // let revStr = "";
  // for (let char of str) {
  //   revStr = char + revStr;
  // }
  // return revStr;
  // -------------------------------------------//
  // let revStr = "";
  // str.split("").forEach((char) => {
  //   return (revStr = char + revStr);
  // });
  // return revStr;
  //--------------------------------------------//
  // return str.split("").reduce((revStr, char) => char + revStr, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // if (str.toLowerCase() === str.split("").reverse()) {
  //   return true;
  // } else {
  //   return false;
  // }
  //---------------------------------------------//
  return str.toLowerCase() === str.split("").reverse().join("");
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const str = int.toString().split("").reverse().join("");

  return parseInt(str) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const words = str.split(" ");
  const firstLettersCapitalized = words.reduce((acc, word) => {
    acc += ` ${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    return acc.trim();
  }, "");
  return firstLettersCapitalized;
  //----------------------------------------------------------//
  // const strArr = str.toLowerCase().split(" ");
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(" ");
  // ---------------------------------------------------------//
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
  //   .join(" ");
  // --------------------------------------------------------- //
  // return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const sumEachLetter = str.split("").reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter]++;
    return obj;
  }, {});

  let maxLetter = "";
  let maxNumber = 0;
  for (let letter in sumEachLetter) {
    if (sumEachLetter[letter] > maxNumber) {
      maxLetter = letter;
      maxNumber = sumEachLetter[letter];
    }
  }
  return maxLetter;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let numbers = [];
  for (let number = 1; number <= 100; number++) {
    if (number % 15 === 0) {
      numbers.push("FizzBuzz");
    } else if (number % 3 === 0) {
      numbers.push("Fizz");
    } else if (number % 5 === 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(number);
    }
  }
  return numbers;
}

// Call Function
const output = reverseString("hello");
console.log(output);

const output2 = isPalindrome("racecar");
console.log(output2);

const output3 = reverseInt(-521);
console.log(output3, typeof output3);

const output4 = capitalizeLetters("i love javascript");
console.log(output4);

const output5 = maxCharacter("javascript");
console.log(output5);

const output6 = fizzBuzz();
console.log(output6);
