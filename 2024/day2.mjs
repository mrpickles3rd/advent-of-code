import { input } from './day2.input.mjs';

const inputArray = input.split('\n').map(
  line => line.split(' ').map(
    value => parseInt(value, 10),
  ),
);
// console.log("DB ... 🚀 ~ file: day2.mjs:11 ~ inputArray ~~~", inputArray);

let validCount = 0;
let validCountWithRemoval = 0;

function isValidReport(levels) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if (diff < -3 || diff > 3 || diff === 0) {
      return false;
    }
    if (diff < 0) {
      increasing = false;
    } else if (diff > 0) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

inputArray.forEach((levels, index) => {
  // console.log("DB ... 🚀 ~ file: day2.mjs:15 ~ Report levels ~~~", levels);
  if (isValidReport(levels)) {
    // console.log("DB ... 🚀 ~ file: day2.mjs:25 ~ Report is valid ~~~", levels);
    validCount++;
    validCountWithRemoval++;
  } else {
    let foundValid = false;
    for (let i = 0; i < levels.length; i++) {
      const newLevels = levels.slice(0, i).concat(levels.slice(i + 1));
      if (isValidReport(newLevels)) {
        foundValid = true;
        break;
      }
    }
    if (foundValid) {
      validCountWithRemoval++;
    }
    // console.log("DB ... 🚀 ~ file: day2.mjs:27 ~ Report is invalid ~~~", levels);
  }
});

console.log("DB ... 🚀 ~ file: day2.mjs:31 ~ Number of valid reports ~~~", validCount);
console.log("DB ... 🚀 ~ file: day2.mjs:32 ~ Number of valid reports with removal ~~~", validCountWithRemoval);
