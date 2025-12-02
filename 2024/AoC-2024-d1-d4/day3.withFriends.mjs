import { input } from './day3.input.mjs';

const testInput = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

function cleanInput(input) {
    const matches = input.match(/mul\(\d+,\d+\)/g);
    if (!matches) return 0;
    return matches.reduce((acc, match) => {
        const [a, b] = match.match(/\d+/g).map(Number);
        return acc + (a * b);
    }, 0);
}

// const result = cleanInput(testInput);
const result = cleanInput(input);
console.log(result); // For testing purposes


