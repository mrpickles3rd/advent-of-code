const { input7 } = require('./7.input');

function set([val, _, key], ret) {
    if (key === 'a') {
        console.log("DB ... 🚀 ~ file: 7.js:4 ~ set ~ key, val, ret[val], isNaN(parseInt(val, 10))", key, val, ret[val], isNaN(parseInt(val, 10)))
    }
    if (ret[key] === undefined) {
        ret[key] = 0;
    }
    ret[key] += isNaN(parseInt(val, 10)) ? ret[val] === undefined ? 0 : ret[val] : parseInt(val, 10);
}
function AND([a, _1, b, _2, key], ret) {
    set([ret[a] & ret[b], null, key], ret);
}
function OR([a, _1, b, _2, key], ret) {
    set([ret[a] | ret[b], null, key], ret);
}
function LSHIFT([a, _1, b, _2, key], ret) {
    set([ret[a] << parseInt(b, 10), null, key], ret);
}
function RSHIFT([a, _1, b, _2, key], ret) {
    set([ret[a] >> parseInt(b, 10), null, key], ret);
}
function NOT([_1, a, _2, key], ret) {
    // return 65535 - a;
    const prefixArr = Array(16).fill('0');
    const binaryArr = [...(ret[a] >>> 0).toString(2)];
    const binary_16_bit = prefixArr.slice(0, prefixArr.length - binaryArr.length).concat(binaryArr).map(
        v => v === '0' ? '1' : '0',
    ).join('');
    // console.log('??? ', a, parseInt(binary_16_bit, 2));

    set([parseInt(binary_16_bit, 2), null, key], ret);
}

const run = {
    set,
    AND,
    OR,
    LSHIFT,
    RSHIFT,
    NOT,
};

// function day7(input = input7) {
//     const ret = { a: 0 };
//     input.split('\n').forEach((line) => {
//         console.log("DB ... 🚀 ~ file: 7.js:66 ~ day7 ~ input", line.match(/^(?:([a-z\d]+) )?(?:([A-Z]+) )?([a-z\d]+) -> ([a-z]+)$/))

//         const [_, v1, cmd, v2, reg] = line.match(/^(?:([a-z\d]+) )?(?:([A-Z]+) )?([a-z\d]+) -> ([a-z]+)$/);
//         console.log("DB ... 🚀 ~ file: 7.js:51 ~ input.split ~ _, a, b, c, d, e", _, a, b, c, d, e)

//         const args = line.split(' ');
//         if (args.length === 3) {
//             set(args, ret);
//             return;
//         }

//         if (args.length === 4) {
//             run.NOT(args, ret);
//             return;
//         }

//         run[args[1]](args, ret);
//         return;
//     })

//     // return ret.a;
//     return ret;
// }

"use strict";

const fs = require('fs');
// const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

// Our parsed wires in format {wire: value} or {wire: instruction}
const WIRES = new Map();

// Dictionary of our bitwise methods
const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: a => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b
};

// Parse instruction from input and return object with command, arguments and destination wire
const parseInstruction = instruction => {
  const command = instruction.match(COMMAND_REGEX);
  const args = instruction.match(ARGUMENTS_REGEX);
  const destination = args.pop();

  return {
    command: command && command[0],
    args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
    destination: destination
  };
};

// Calculate value for one of the wires (recursively)
const calculateWire = wireName => {
  const wire = WIRES.get(wireName);

  if (typeof wireName === 'number') return wireName;
  if (typeof wire === 'number') return wire;
  if (typeof wire === 'undefined') return undefined;

  if (!wire.command) {
    WIRES.set(wireName, calculateWire(wire.args[0]));
  } else {
    WIRES.set(wireName, BITWISE_METHODS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
  }

  return WIRES.get(wireName);
};

function day7(INPUT = input7) {

// Fill WIRES with parsed instructions and their future values
    INPUT.split('\n').forEach(instruction => {
    const parsedInstruction = parseInstruction(instruction);
    WIRES.set(parsedInstruction.destination, {command: parsedInstruction.command, args: parsedInstruction.args});
    });

    console.log('???', calculateWire('a'));
    return calculateWire('a');
}

module.exports = {
    day7,
};
