import { input } from './day3.input.mjs';

const testInput = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
const testInput2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

function cleanInput(input) {
    let cleanedInput = input.replace(/don't\(\)[\s\S]*?do\(\)|don't\(\)[\s\S]*$/g, '');

    const matches = cleanedInput.match(/mul\(\d+,\d+\)/g);
    if (!matches) return 0;
    return matches.reduce((acc, match) => {
        const [a, b] = match.match(/\d+/g).map(Number);
        return acc + (a * b);
    }, 0);
}

console.time('Performance Test');
console.log(process.memoryUsage());
for (let i = 0; i < 10000; i++) {
    cleanInput(input);
}
console.timeEnd('Performance Test');
console.log(process.memoryUsage());
