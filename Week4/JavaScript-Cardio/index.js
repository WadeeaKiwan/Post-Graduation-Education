// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  const args = Array.from(arguments);
  return args.reduce((acc, number) => acc + number, 0);
  //--------------------------------------------------//
  //------- ES5 arguments & for loop -----------------//
  // const args = Array.prototype.slice.call(arguments); // turn into array
  // let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  // return total;
}

// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach((number) => (total += number));
//   return total;
//   //---------------------------------------------//
//   return numbers.reduce((total, number) => (total += number), 0);
//   //---------------------------------------------//
// }

const output1 = addAll(2, 5, 6, 7);
console.log(output1);

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(number) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= number; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

const output2 = sumAllPrimes(10);
console.log(output2);

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(array, ...rest) {
  return array.filter((item) => !rest.includes(item));
  // ----------------------------------------------------- //
  // const args = Array.from(arguments);
  // function filterArr(array) {
  //   // Return true if NOT in array
  //   return args.indexOf(array) === -1;
  // }
  // return array.filter(filterArr);
}

const output3 = seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
console.log(output3);

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  let arr1 = [];
  let arr2 = [];

  arr.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortedArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));

  return sortedArr;
}

const output4 = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(output4);

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

const output5 = missingLetters("abcdefghijklmnopqrstvwxyz");
console.log(output5);

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((number) => (number % 2 === 0 ? (evenSum += number) : (oddSum += number)));

  return [evenSum, oddSum];
}

const output6 = evenOddSums([50, 60, 60, 45, 71]);
console.log(output6);
