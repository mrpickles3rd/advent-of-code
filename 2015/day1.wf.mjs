import { input } from './day1.wf.input.mjs';

const testInput = `(()(()(`;

function calculateFloor(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === '(') {
            counter++;
        } else if (char === ')') {
            counter--;
        }
        if (counter === -1) {
            return i + 1; // Return the 1-based index

        }
    }
    return counter;
}

const result = calculateFloor(testInput);
console.log(result);
const result2 = calculateFloor(input);
console.log(result2);

