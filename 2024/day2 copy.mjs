import { input } from './day2.input.mjs';

const inputArray = input.split('\n').map(line => line.split(' ').map(Number));
// console.log("DB ... 🚀 ~ file: day2.mjs:11 ~ inputArray ~~~", inputArray);

let validCount = 0;

inputArray.forEach((levels, index) => {
  // console.log("DB ... 🚀 ~ file: day2.mjs:15 ~ Report levels ~~~", levels);
  let isValid = true;
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if (diff < -3 || diff > 3 || diff === 0) {
      isValid = false;
      break;
    }
    if (diff < 0) {
      increasing = false;
    } else if (diff > 0) {
      decreasing = false;
    }
  }

  if (isValid && (increasing || decreasing)) {
    // console.log("DB ... 🚀 ~ file: day2.mjs:25 ~ Report is valid ~~~", levels);
    validCount++;
  } else {
    // console.log("DB ... 🚀 ~ file: day2.mjs:27 ~ Report is invalid ~~~", levels);
  }
});

console.log("DB ... 🚀 ~ file: day2.mjs:31 ~ Number of valid reports ~~~", validCount);
