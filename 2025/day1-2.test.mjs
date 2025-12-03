import { parseInput } from './_Strings.mjs';
import { input1 } from './day1.input.mjs';
import { rotateDial, zerosFound, zerosPassed } from './day1-2.mjs';

const TEST_INPUT_1 = 'L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82';

describe('day1-2', () => {
  describe('rotateDial', () => {
    it('Should rotate the dial right 5 times from 94 to 99', () => {
      const position = rotateDial('R', 5, 94);
      const lastPostion = 99;
      expect(position).toBe(lastPostion);
    });

    it('Should rotate the dial left 5 times from 5 to 0', () => {
      const position = rotateDial('L', 5, 5);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial right 10 times from 95 to 5', () => {
      const position = rotateDial('R', 10, 95);
      const lastPostion = 5;
      expect(position).toBe(lastPostion);
    });

    it('Should rotate the dial left 10 times from 5 to 95', () => {
      const position = rotateDial('L', 10, 5);
      const firstPosition = 95;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial right 200 times from 0 to 0', () => {
      const position = rotateDial('R', 200, 0);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
    });

    it('Should rotate the dial left 200 times from 0 to 0', () => {
      const position = rotateDial('L', 200, 0);
      const firstPosition = 0;
      expect(position).toBe(firstPosition);
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
    it('Should pass 3 zeros for the test input', () => {
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
