const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 }
];

inventors.forEach((inventor) => {
  console.log(
    `${inventor.first} ${inventor.last} => born in ${inventor.year} and passed ${inventor.passed}`
  );
});

// Array.prototype.filter()
// Filter the list of inventors for those who were born in the 1500's
const inventors1500s = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(inventors1500s);

// Array.prototype.map()
// Give us an array of the inventory first and last names
const firstLastNames = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});
console.table(firstLastNames);

// Array.prototype.sort()
// Sort the inventors by birthdate, oldest to youngest
const sortedBirthdates = [...inventors].sort((a, b) => a.year - b.year);
console.table(sortedBirthdates);

// Array.prototype.reduce()
// How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  total += inventor.passed - inventor.year;
  return total;
}, 0);
console.log("Total Years: ", totalYears);

// Sort the inventors by years lived
const sortedByYearsLived = inventors
  .reduce((newArray, inventor, index, array) => {
    let age = inventor.passed - inventor.year;
    newArray.push({ ...array[index], age });
    return newArray;
  }, [])
  .sort((a, b) => b.age - a.age);
console.table(sortedByYearsLived);

const sortedByYearsLived2 = [...inventors].sort((a, b) => b.passed - b.year - (a.passed - a.year));
console.table(sortedByYearsLived2);

// Create a list of Boulevards in Paris that contains 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")]; // Array.from(category.querySelectorAll("a"))
// const boulevardsInParis = links.map((a) => a.textContent);

const boulevardsInParis = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone"
];

const containingDe = boulevardsInParis.filter((boulevard) => boulevard.includes("de"));
console.table(containingDe);

// Sort exercise
// Sort persons alphabetically by last name;

const persons = [
  "Einstein, Albert",
  "Newton, Isaac",
  "Galilei, Galileo",
  "Curie, Marie",
  "Keppler, Johanne",
  "Corpenicus, Nicolous",
  "Planck, Max"
];

const sortedPersons = persons.sort((a, b) => (a > b ? 1 : -1));
console.table(sortedPersons);

const alpha = persons.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

// Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.table(transportation);

//.some(), .every(), .find() and [...SPREADS]
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
const isPerson19 = people.some((person) => new Date().getFullYear() - person.year === 19);
console.log(isPerson19);
console.log(isPerson19 ? "There is at least of person 19" : "No one is 19");

// Array.prototype.every() // is everyone 19?
const isEveryone19 = people.every((person) => new Date().getFullYear() - person.year === 19);
console.log(isEveryone19);
console.log(isEveryone19 ? "Everyone is 19" : "No one is 19");

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const foundComment = comments.find((comment) => comment.id === 823423);
console.table(foundComment);
console.log(foundComment ? foundComment : "No comment found with this ID");

// Array.prototype.findIndex()
// Find the comment with this ID 2039842
let index = comments.findIndex((comment) => comment.id === 2039842);
console.log(index);
console.log(index !== -1 ? comments[index] : "No comment found with this ID");

// Delete the comment with the ID of 823423
let newCommentsArray;
index = comments.findIndex((comment) => comment.id === 823423);
console.log(index);

if (index !== -1) {
  const deletedComment = [...comments].splice(index, 1);
  console.log("Deleted Comment: ");
  console.table(deletedComment);

  newCommentsArray = [...comments.slice(0, index), ...comments.slice(index + 1)];
}

console.table(comments);
console.table(newCommentsArray);
