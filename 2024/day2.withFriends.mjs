import { input, inputTest } from './day2.input.mjs';

const reports = inputTest.split('\n');

const numericalValues = reports.map(report => {
    return report.match(/\d+/g).map(Number);
});

const isValidSequence = (row) => {
    if (row.length < 2) return true;
    const isIncreasing = row[1] > row[0];
    for (let i = 1; i < row.length; i++) {
        const diff = row[i] - row[i - 1];
        if (isIncreasing) {
            if (diff < 1 || diff > 3) return false;
        } else {
            if (diff > -1 || diff < -3) return false;
        }
    }
    return true;
};

const validCount = numericalValues.filter(isValidSequence).length;
console.log(validCount);

numericalValues.forEach(row => {
    console.log(isValidSequence(row));
});


