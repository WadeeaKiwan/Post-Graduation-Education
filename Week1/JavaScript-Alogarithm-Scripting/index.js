/* Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return `${fahrenheit} °F`;
}

convertToF(30);
console.log(convertToF(30));
convertToF(-30);
console.log(convertToF(-30));
convertToF(0);
console.log(convertToF(0));

/* Reverse a String
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/
function reverseString(str) {
  str = Array.from(str); // str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");
console.log(reverseString("hello"));
reverseString("Greetings from Earth");
console.log(reverseString("Greetings from Earth"));

/* Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
 */
function factorialize(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return (num = total);
}

factorialize(5);
console.log(factorialize(5));
factorialize(0);
console.log(factorialize(0));
factorialize(20);
console.log(factorialize(20));

/* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {
  const strArray = str.split(" ");
  strArray.sort((a, b) => b.length - a.length);
  const longestWordLength = strArray[0].length;
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

/* Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let largestFourArr = [];
  for (let i = 0; i < arr.length; i++) {
    const sortedArr = arr[i].sort((a, b) => b - a);
    largestFourArr.push(sortedArr[0]);
  }
  return largestFourArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10]
]);
console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);
