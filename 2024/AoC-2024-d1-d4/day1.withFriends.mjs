import { input1 } from './day1.input.mjs';

const testInput = `3 4
4 3
2 5
1 3
3 9
3 3`;

const lines = input1.split('\n');
const col1 = [];
const col2 = [];

lines.forEach(line => {
  const [a, b] = line.match(/\d+/g).map(Number);
  col1.push(a);
  col2.push(b);
});

col1.sort((a, b) => b - a);
col2.sort((a, b) => b - a);

console.log('Column 1:', col1);
console.log('Column 2:', col2);

console.log('Column 1 Length:', col1.filter(Boolean).length);
console.log('Column 2 Length:', col2.filter(Boolean).length);

const differences = col1.map((num, index) => Math.abs(num - col2[index]));

console.log('Differences:', differences);

const totalDifference = differences.reduce((sum, value) => sum + value, 0);

console.log('Total Difference:', totalDifference);

