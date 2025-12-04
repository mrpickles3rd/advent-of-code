import { parseInput } from './_Strings.mjs';
import { input1 } from './day1.input.mjs';
import { getPosition, getPasses, zerosFound, zerosPassed } from './day1-2.mjs';

const TEST_INPUT_1 = 'L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82';

describe('day1-2', () => {
  describe('getPosition', () => {
    it('Should rotate the dial right 5 times from 94 to 99', () => {
      const position = getPosition('R', 5, 94);
      const lastPostion = 99;
      expect(position).toBe(lastPostion);
    });

    it('Should rotate the dial left 5 times from 5 to 0', () => {
      const position = getPosition('L', 5, 5);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial right 10 times from 95 to 5', () => {
      const position = getPosition('R', 10, 95);
      const lastPostion = 5;
      expect(position).toBe(lastPostion);
    });

    it('Should rotate the dial left 10 times from 5 to 95', () => {
      const position = getPosition('L', 10, 5);
      const firstPosition = 95;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial right 200 times from 0 to 0', () => {
      const position = getPosition('R', 200, 0);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial left 200 times from 0 to 0', () => {
      const position = getPosition('L', 200, 0);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
    });
  });

  describe('getPasses', () => {
    it('Should NOT pass zero when rotating the dial right 5 times from 94 to 99', () => {
      const passes = getPasses('R', 5, 94);
      expect(passes).toBe(0);
    });

    it('Should NOT pass zero when rotating the dial left 5 times from 5 to 0', () => {
      const passes = getPasses('L', 5, 5);
      expect(passes).toBe(0);
    });

    it('Should pass zero once when rotating the dial right 10 times from 95 to 5', () => {
      const passes = getPasses('R', 10, 95);
      expect(passes).toBe(1);
    });

    it('Should pass zero once when rotating the dial left 10 times from 5 to 95', () => {
      const passes = getPasses('L', 10, 5);
      expect(passes).toBe(1);
    });

    it('Should pass zero two times when rotating the dial right 200 times from 50 to 50', () => {
      const passes = getPasses('R', 200, 50);
      expect(passes).toBe(2);
    });

    it('Should pass zero two times when rotating the dial left 200 times from 50 to 50', () => {
      const passes = getPasses('L', 200, 50);
      expect(passes).toBe(2);
    });

    it('Should pass zero once when rotating the dial right 200 times from 0 to 0', () => {
      const passes = getPasses('R', 200, 0);
      expect(passes).toBe(1);
    });

    it('Should pass zero once when rotating the dial left 200 times from 0 to 0', () => {
      const passes = getPasses('L', 200, 0);
      expect(passes).toBe(1);
    });
  });

  describe('zerosFound', () => {
    it('Should find 1 zero when starting at 11 and rotating R8 then L19', () => {
      const moves = [{ direction: 'R', amount: 8 }, { direction: 'L', amount: 19 }];
      const zeros = zerosFound(moves, 11);
      expect(zeros).toBe(1);
    });

   it('Should find 3 zeros for the test input', () => {
    const moves = parseInput(TEST_INPUT_1);
    const zeros = zerosFound(moves, 50);
    expect(zeros).toBe(3);
   });

   it('Should have a final result of -=- 1048 -=- zeros found for the puzzle input', () => {
    const puzzleInput = parseInput(input1);
    const zeros = zerosFound(puzzleInput, 50);
    expect(zeros).toBe(1048);
   })
  });

  describe('zerosPassed', () => {


/*
      DB ... 🚀 ~ day1-2.mjs:7 ~ _rotateDial ~ direction, amount, position ~~~ L82 14

      at _rotateDial (2025/day1-2.mjs:18:11)

    console.log
      DB ... 🚀 ~ day1-2.mjs:8 ~ _rotateDial ~ newPosition ~~~ -68

      at _rotateDial (2025/day1-2.mjs:20:11)

    console.log
      DB ... 🚀 ~ day1-2.mjs:13 ~ _rotateDial ~ fullRotations, remainingRotations ~~~ 0 67

      at _rotateDial (2025/day1-2.mjs:29:11)

    console.log
      DB ... 🚀 ~ day1-2.mjs:18 ~ _rotateDial ~ LEFT ~~~ true 99 67

      at _rotateDial (2025/day1-2.mjs:33:13)

    console.log
      DB ... 🚀 ~ day1-2.mjs:7 ~ _calcPasses ~ passes, position, newPosition ~~~ 0 14 -68

      at _calcPasses (2025/day1-2.mjs:7:11)

    console.log
      DB ... 🚀 ~ day1-2.mjs:80 ~ _find ~ ret ~~~ { zeros: 3, passes: 2 }

      at _find (2025/day1-2.mjs:81:13)

  ● day1-2 › zerosPassed › Should pass 3 zeros for the test input
*/



    it.only('Should pass 3 zeros for the test input', () => {
      const moves = parseInput(TEST_INPUT_1);
      const zeros = zerosPassed(moves, 50);
      expect(zeros).toBe(3);
    });

    it('Should have a final result of 2048 zeros passed for the puzzle input', () => {
      const puzzleInput = parseInput(input1);
      const zeros = zerosPassed(puzzleInput, 50);
      expect(zeros).toBe(2048);
    });

  });
});
