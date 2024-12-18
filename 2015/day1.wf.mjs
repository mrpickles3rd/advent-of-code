import { input } from './day1.wf.input.mjs';

const testInput = `(()(()(`;

function calculateFloor(input) {
    let counter = 0;
    for (const char of input) {
        if (char === '(') {
            counter++;
        } else if (char === ')') {
            counter--;
        }
    }
    return counter;
}

const result = calculateFloor(testInput);
console.log(result);
const result2 = calculateFloor(input);
console.log(result2);

