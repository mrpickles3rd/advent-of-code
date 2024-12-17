import { input } from './day3.input.mjs';

const testInput = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
const testInput2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

function cleanInput(input) {
    let cleanedInput = input.replaceAll(/don't\(\)[\s\S]*?do\(\)/g, '');

    const lastDontIndex = cleanedInput.lastIndexOf("don't()");
    const lastDoIndex = cleanedInput.lastIndexOf("do()");

    if (lastDontIndex > lastDoIndex) {
        cleanedInput = cleanedInput.substring(0, lastDontIndex);
    }

    const matches = cleanedInput.match(/mul\(\d+,\d+\)/g);
    if (!matches) return 0;
    return matches.reduce((acc, match) => {
        const [a, b] = match.match(/\d+/g).map(Number);
        return acc + (a * b);
    }, 0);
}

// const result = cleanInput(testInput);
// const result = cleanInput(testInput2);
const result = cleanInput(input);
console.log(result); // For testing purposes
