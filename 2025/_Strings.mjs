function splitLines(str) {
  return str.split('\n');
}

function leftRight(line) {
  const [direction, ...amount] = [...line]
  return { direction, amount: Number(amount.join('')) };
}

function parseInput(input) {
  return splitLines(input).map(leftRight);
}

export { splitLines, parseInput };