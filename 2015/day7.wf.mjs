import { input } from './day7.wf.input.mjs';

const testInput = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

const wires = {};

function getValue(operand) {
  if (!isNaN(operand)) {
    return parseInt(operand);
  }
  if (wires[operand] === undefined) {
    evaluate(operand);
  }
  return wires[operand];
}

function evaluate(wire) {
  const instruction = input.split('\n').find(line => line.endsWith(` -> ${wire}`));
  const parts = instruction.split(' ');
  if (parts.length === 3) {
    // e.g., 123 -> x
    wires[wire] = getValue(parts[0]) & 0xFFFF;
  } else if (parts.length === 4) {
    // e.g., NOT x -> h
    wires[wire] = (~getValue(parts[1])) & 0xFFFF;
  } else if (parts.length === 5) {
    const [op1, op, op2] = parts;
    switch (op) {
      case 'AND':
        wires[wire] = (getValue(op1) & getValue(op2)) & 0xFFFF;
        break;
      case 'OR':
        wires[wire] = (getValue(op1) | getValue(op2)) & 0xFFFF;
        break;
      case 'LSHIFT':
        wires[wire] = (getValue(op1) << parseInt(op2)) & 0xFFFF;
        break;
      case 'RSHIFT':
        wires[wire] = (getValue(op1) >> parseInt(op2)) & 0xFFFF;
        break;
    }
  }
}

// Start evaluation from wire 'a'
evaluate('a');
console.log(wires.a); // Output the result to verify



