import { parseInput } from './_Strings.mjs';

const ZERO = 0;
const END = 99;

function _calcPasses(passes, position, newPosition, amount) {
  console.log('DB ... 🚀 ~ day1-2.mjs:7 ~ _calcPasses ~ passes, position, newPosition ~~~', passes, position, newPosition);
  // passes: passes === 0 ? passes + 1 : position === 0 || newPosition === 0 ? passes - 1 : passes,
  if (passes === 0 && position !== 0 && newPosition !== 0) {
    return 1;
  } else if (position === 0 || newPosition === 0) {
    return passes - 1;
  }
  return passes;
}

function _rotateDial(direction, amount, position) {
  console.log('DB ... 🚀 ~ day1-2.mjs:7 ~ _rotateDial ~ direction, amount, position ~~~', `${direction}${amount}`, position);
  const newPosition = position + (direction === 'R' ? amount : -amount);
  console.log('DB ... 🚀 ~ day1-2.mjs:8 ~ _rotateDial ~ newPosition ~~~', newPosition);

  const fullRotations = Math.floor(amount / (END + 1));
  const remainingRotations = Math.abs(newPosition + 1) % (END + 1);

  // const fullRotations = Math.floor(amount / (END + 1));
  // const remainingRotations = (newPosition) % (END + 1);

  let passes = fullRotations;
  console.log('DB ... 🚀 ~ day1-2.mjs:13 ~ _rotateDial ~ fullRotations, remainingRotations ~~~', fullRotations, remainingRotations);

  const LEFT = newPosition < ZERO;
  if (LEFT) {
    console.log('DB ... 🚀 ~ day1-2.mjs:18 ~ _rotateDial ~ LEFT ~~~', LEFT, END, remainingRotations);
    return {
      passes: _calcPasses(passes, position, newPosition, amount),
      position: END - remainingRotations,
    };
  }

  const RIGHT = newPosition > END;
  if (RIGHT) {
    console.log('DB ... 🚀 ~ day1-2.mjs:25 ~ _rotateDial ~ RIGHT ~~~', RIGHT);
    return {
      passes: _calcPasses(passes, position, newPosition, amount),
      position: remainingRotations + ZERO - 1,
    };
  }

  return {
    passes,
    position: newPosition,
  };
}

function getPosition(direction, amount, position) {
  return _rotateDial(direction, amount, position).position;
}

function getPasses(direction, amount, position) {
  return _rotateDial(direction, amount, position).passes;
}

function _find(moves, startPosition) {
    const ret = {
    zeros: 0,
    passes: 0,
  };
  let position = startPosition;
  let passes = 0;

  for (const move of moves) {
    const { direction, amount } = move;

    // position = getPosition(direction, amount, position);
    ({position, passes} = _rotateDial(direction, amount, position));
    ret.passes += passes;

    if (position === 0) {
      ret.zeros += 1;
    }
    console.log('DB ... 🚀 ~ day1-2.mjs:80 ~ _find ~ ret ~~~', ret);
  }

  return ret;
}

function zerosFound(moves, startPosition = 50) {
  return _find(moves, startPosition).zeros;
}

function zerosPassed(moves, startPosition = 50) {
  return _find(moves, startPosition).passes;
}

export { getPosition, getPasses, zerosFound, zerosPassed };
