import { input, inputTest } from './day2.input.mjs';

/*/
const reports = inputTest.split('\n');
/*/
const reports = input.split('\n');
//*/

const numericalValues = reports.map(report => {
  return report.match(/\d+/g).map(Number);
});

const isValidSequence = (row) => {
  if (row.length < 2) return true;
  let isIncreasing = null;

  for (let i = 1; i < row.length; i++) {
    const diff = row[i] - row[i - 1];
    if (diff === 0) return false;
    if (isIncreasing === null) {
      isIncreasing = diff > 0;
    } else if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
      return false;
    }
    if (isIncreasing && (diff < 1 || diff > 3)) return false;
    if (!isIncreasing && (diff > -1 || diff < -3)) return false;
  }
  return true;
};

const isValidWithOneRemoval = (row) => {
  for (let i = 0; i < row.length; i++) {
    const newRow = row.slice(0, i).concat(row.slice(i + 1));
    if (isValidSequence(newRow)) {
      return true;
    }
  }
  return false;
};

numericalValues.forEach(row => {
  console.log(isValidSequence(row) || isValidWithOneRemoval(row));
});

const validCount = numericalValues.filter(row => isValidSequence(row) || isValidWithOneRemoval(row)).length;
console.log(validCount);
