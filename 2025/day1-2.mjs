import { parseInput } from './_Strings.mjs';

const ZERO = 0;
const END = 99;

function rotateDial(direction, amount, position) {
  const newPosition = position + (direction === 'R' ? amount : -amount);

  const fullRotations = Math.floor(Math.abs(newPosition + 1) / (END + 1));
  const remainingRotations = Math.abs(newPosition + 1) % (END + 1);

  const LEFT = newPosition < ZERO;
  if (LEFT) {
    return END - remainingRotations;
  }

  const RIGHT = newPosition > END;
  if (RIGHT) {
    return remainingRotations + ZERO - 1;
  }

  return newPosition;
}

function _find(moves, startPosition) {
    const ret = {
    zeros: 0,
    passes: 0,
  };
  let position = startPosition;

  for (const move of moves) {
    const { direction, amount } = move;

    position = rotateDial(direction, amount, position);

    if (position === 0) {
      ret.zeros += 1;
    }
  }

  return ret;
}

function zerosFound(moves, startPosition = 50) {
  return _find(moves, startPosition).zeros;
}

function zerosPassed(moves, startPosition = 50) {
  return _find(moves, startPosition).passes;
}

export { rotateDial, zerosFound, zerosPassed };
