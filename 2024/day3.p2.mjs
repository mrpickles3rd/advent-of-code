import { input } from './day3.input.mjs';

// var input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
const matches = input.match(regex);
const matchesArray = [];
let adding = true;

if (matches) {
  for (const match of matches) {
    // console.log("DB ... 🚀 ~ file: day3.p2.mjs:12 ~ match ~~~", match);
    if (match === "do()") {
      adding = true;
    } else if (match === "don't()") {
      adding = false;
    } else if (adding) {
      matchesArray.push(match);
    }
  }
}
// console.log("DB ... 🚀 ~ file: day3.mjs:6 ~ matchesArray ~~~", matchesArray);

const resultsArray = matchesArray.map(match => {
  const [a, b] = match.match(/\d+/g).map(value => parseInt(value, 10));
  return a * b;
});
// console.log("DB ... 🚀 ~ file: day3.mjs:10 ~ resultsArray ~~~", resultsArray);

const total = resultsArray.reduce((sum, value) => sum + value, 0);
console.log("DB ... 🚀 ~ file: day3.mjs:14 ~ total ~~~", total, 95411583);
