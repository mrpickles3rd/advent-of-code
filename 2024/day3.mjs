import { input } from './day3.input.mjs';

// var input = 'where()(< }when()mul(678,62)%mul(747,584)from';

const regex = /mul\(\d{1,3},\d{1,3}\)/g;
const matches = input.match(regex);
const matchesArray = matches ? Array.from(matches) : [];
// console.log("DB ... 🚀 ~ file: day3.mjs:6 ~ matchesArray ~~~", matchesArray);

const resultsArray = matchesArray.map(match => {
  const [a, b] = match.match(/\d+/g).map(value => parseInt(value, 10));
  return a * b;
});
// console.log("DB ... 🚀 ~ file: day3.mjs:10 ~ resultsArray ~~~", resultsArray);

const total = resultsArray.reduce((sum, value) => sum + value, 0);
console.log("DB ... 🚀 ~ file: day3.mjs:14 ~ total ~~~", total);
