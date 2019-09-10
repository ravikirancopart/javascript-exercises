// array of objects
// iterate each object  using reduce
// compare object with accumulator, return whichever has more age

// how to compare object:
//
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
];

let findTheOldest = people => {
  return people.reduce((accumulator, person) => {
    if (
      calculateAge(accumulator.yearOfBirth, accumulator.yearOfDeath) >
      calculateAge(person.yearOfBirth, person.yearOfDeath)
    ) {
      return accumulator;
    } else {
      return person;
    }
  });
};

console.log(findTheOldest(people).name);
module.exports = findTheOldest;

function calculateAge(birthYear, deathYear) {
  const currentYear = new Date().getFullYear(); //TODO get current year dynamically

  return deathYear ? deathYear - birthYear : currentYear - birthYear;
}
