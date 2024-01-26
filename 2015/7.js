const { input7 } = require('./7.input');

const testInput = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

const testTwo = `123 -> e
e RSHIFT 1 -> d
d LSHIFT 2 -> c
432 -> cc
c OR cc -> bb
42 -> b
b AND bb -> aa
NOT aa -> a`;

function AND(left, right) {
  console.log("DB ... 🚀 ~ AND ~ AND(left, right:", left, right)
  return left & right;
}
function OR(left, right) {
  console.log("DB ... 🚀 ~ OR ~ OR(left, right:", left, right)
  return left | right;
}
function LSHIFT(left, right) {
  console.log("DB ... 🚀 ~ LSHIFT ~ LSHIFT(left, right:", left, right)
  return left << right;
}
function RSHIFT(left, right) {
  console.log("DB ... 🚀 ~ RSHIFT ~ RSHIFT(left, right:", left, right)
  return left >> right;
}
const run = { AND, OR, LSHIFT, RSHIFT };
function NOT(val) {
  console.log("DB ... 🚀 ~ NOT ~ NOT(val:", val)
  // return 65535 - a;
  const prefixArr = Array(16).fill('0');
  const binaryArr = [...(val >>> 0).toString(2)];
  const binary_16_bit = prefixArr.slice(0, prefixArr.length - binaryArr.length).concat(binaryArr).map(
      v => v === '0' ? '1' : '0',
  ).join('');
  // console.log('??? ', a, parseInt(binary_16_bit, 2));

  return parseInt(binary_16_bit, 2);
}

const map = {};
const JAM = testInput.split('\n').forEach(v => {
  const [vals, key] = v.split(' -> ');
  let [a, b, c] = vals.split(' ');
  if (!Number.isNaN(Number.parseInt(a, 10))) {
    a = Number.parseInt(a, 10);
  }
  if (!Number.isNaN(Number.parseInt(b, 10))) {
    b = Number.parseInt(b, 10);
  }
  if (!Number.isNaN(Number.parseInt(c, 10))) {
    c = Number.parseInt(c, 10);
  }

  map[key] = [a, b, c].filter(val => val !== undefined);
});

console.log("DB ... 🚀 ~ map:", map)

