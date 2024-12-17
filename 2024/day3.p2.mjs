import { input } from './day3.input.mjs';

const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

console.time('Performance Test');
console.log(process.memoryUsage());
for (let i = 0; i < 10000; i++) {
    // TODO: Move to func' and see if the performance is the same?
    const matches = input.match(regex);
    let adding = true;
    let total = 0;

    if (matches) {
        for (const match of matches) {
            if (match === "do()") {
                adding = true;
            } else if (match === "don't()") {
                adding = false;
            } else if (adding) {
                const [a, b] = match.match(/\d+/g).map(value => parseInt(value, 10));
                total += a * b;
            }
        }
    }
}
console.timeEnd('Performance Test');
console.log(process.memoryUsage());
console.log();
console.log('-=-=-=-=-');
console.log();
