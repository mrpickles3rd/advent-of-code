import { input1 } from './day1.input.mjs';

const lefts = [];
const rights = [];

input1.split('\n').forEach(v => {
  const [left, right] = v.split('   ');
  lefts.push(parseInt(left, 10));
  rights.push(parseInt(right, 10));
});

lefts.sort((a, b) => a - b);
rights.sort((a, b) => a - b);

const res1 = lefts.reduce((acc, val, idx) => {
  return acc += Math.abs(rights[idx] - val);
}, 0);

const res2 = lefts.reduce((acc, val, idx) => {
  const fir = rights.indexOf(val);
  const sec = rights.lastIndexOf(val);
  if (fir === -1) {
    return acc;
  }

  console.log("DB ... 🚀 ~ file: day1.p1.mjs:27 ~ res2 ~ fir - sec ~~~", fir, sec, fir - sec)
  return acc += val * (Math.abs(fir - sec) + 1);
}, 0);

console.log("DB ... 🚀 ~ file: day1.p1.mjs:15 ~ res1 ~~~", res1)
console.log("DB ... 🚀 ~ file: day1.p1.mjs:19 ~ res2 ~~~", res2)
