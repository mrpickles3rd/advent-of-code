import { splitLines, parseInput } from './_Strings.mjs';

import { input1 } from './day1.input.mjs';

import { rotateDial, zerosFound, zerosPassed } from './day1.mjs';

const input1_test = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
/*
    The dial starts by pointing at 50.
    The dial is rotated L68 to point at 82.
    The dial is rotated L30 to point at 52.
    The dial is rotated R48 to point at 0.
    The dial is rotated L5 to point at 95.
    The dial is rotated R60 to point at 55.
    The dial is rotated L55 to point at 0.
    The dial is rotated L1 to point at 99.
    The dial is rotated L99 to point at 0.
    The dial is rotated R14 to point at 14.
    The dial is rotated L82 to point at 32.
*/

const START = 50;
const MIN = 0;
const MAX = 99;
const directions = { L: -1, R: 1 };

function _rotateDial(position, { direction, amount }) {
    // if (amount === 0) throw new Error('Amount cannot be zero');
    const ret = {};

    const rotated = position + (directions[direction] * amount);
    if (rotated < MIN) {
        const passed = rotated / (MAX + 1);
        console.log('DB ... 🚀 ~ day1.mjs:41 ~ rotateDial ~ passed ~~~', passed);
        const position = MAX + ((rotated % (MAX + 1)) + 1)

        ret.position = position;
        ret.passed = passed;
        return ret;
    }

    if (rotated > MAX) {
        const passed = rotated / (MAX + 1);
        const position = MIN + (rotated % (MAX + 1))
        ret.position = position;
        ret.passed = passed;
        return ret;
    }

    ret.position = rotated;
    ret.passed = 0;
    return ret;
}

describe.skip('rotateDial', () => {
    it('Should go from 0 to 99, when rotating L1', () => {
        const { position } = rotateDial(0, { direction: 'L', amount: 1 });
        expect(position).toBe(99);
    });

    it('Should go from 0 to 99, when rotating L101', () => {
        const { position } = rotateDial(0, { direction: 'L', amount: 101 });
        expect(position).toBe(99);
    });

    it('Should go from 99 to 0, when rotating R1', () => {
        const { position } = rotateDial(99, { direction: 'R', amount: 1 });
        expect(position).toBe(0);
    });

    it('Should go from 99 to 0, when rotating R101', () => {
        const { position } = rotateDial(99, { direction: 'R', amount: 101 });
        expect(position).toBe(0);
    });

    it('Should rotate 100 and stay at 0 going right', () => {
        const { position } = rotateDial(0, { direction: 'R', amount: 100 });
        expect(position).toBe(0);
    });

    it('Should rotate 100 and stay at 0 going left', () => {
        const { position } = rotateDial(0, { direction: 'L', amount: 100 });
        expect(position).toBe(0);
    });

    it('Should rotate 100 and stay at 99 going right', () => {
        const { position } = rotateDial(99, { direction: 'R', amount: 100 });
        expect(position).toBe(99);
    });

    it('Should rotate 100 and stay at 99 going left', () => {
        const { position } = rotateDial(99, { direction: 'L', amount: 100 });
        expect(position).toBe(99);
    });
});

// describe('zerosFound', () => {

// });

// console.debug(
//     'if the dial were pointing at 11, a rotation of R8 would cause the dial to point at 19.',
//     rotateDial(11, { direction: 'R', amount: 8 }), '===', 19, '\n\t', rotateDial(11, { direction: 'R', amount: 8 }) === 19);
// console.debug(' After that, a rotation of L19 would cause it to point at 0:', rotateDial(19, { direction: 'L', amount: 19 }), '===', 0, '\n\t', rotateDial(19, { direction: 'L', amount: 19 }) === 0);

// console.debug('if the dial were pointing at 5, a rotation of L10 would cause it to point at 95:', rotateDial(5, { direction: 'L', amount: 10 }), '===', 95, '\n\t', rotateDial(5, { direction: 'L', amount: 10 }) === 95);

// console.debug('After that, a rotation of R5 could cause it to point at 0:', rotateDial(95, { direction: 'R', amount: 5 }), '===', 0, '\n\t', rotateDial(95, { direction: 'R', amount: 5 }) === 0);

function _zerosFound(input, pos = START) {
    let count = 0;
    let zeros = 0;
    let position = pos;

    for (const move of input) {
        count += 1;
        position = rotateDial(position, move).position;
        if (position === 0 || position === 100) {
        // if (position === 0) {
            zeros += 1;
        }
    }

    return zeros;
}

function _zerosPassed(input, pos = START) {
    let count = 0;
    let zeros = 0;
    let passed = 0;
    let position = pos;

    for (const move of input) {
        count += 1;

        ({ position, passed } = rotateDial(position, move));

        if (position === 0 || position === 100) {
        // if (position === 0) {
            zeros += 1 + Math.abs(passed);
        }
    }

    return zeros;
}

// const t1 = `R8
// L19`;
// console.debug('Should find one zero for starting at 11 going R8 then L19:', zerosFound(parseInput(t1), 11), '===', 1, '\n\t', zerosFound(parseInput(t1), 11) === 1);

// const t2 = `L10
// R5`;
// console.debug('Should find one zero for starting at 5 going L10 then R5:', zerosFound(parseInput(t2), 5), '===', 1, '\n\t', zerosFound(parseInput(t2), 5) === 1);

// console.debug('Should find 3 zeros in test input:', zerosFound(parseInput(input1_test)), '===', 3, '\n\t', zerosFound(parseInput(input1_test)) === 3);

// console.debug('Should handle left rotations more then 100:', rotateDial(10, { direction: 'L', amount: 115 }), '===', 95, '\n\t', rotateDial(10, { direction: 'L', amount: 115 }) === 95);
// console.debug('Should handle left rotations WAY more then 100 (215):', rotateDial(10, { direction: 'L', amount: 215 }), '===', 95, '\n\t', rotateDial(10, { direction: 'L', amount: 215 }) === 95);
// console.debug('Should handle right rotations more then 100:', rotateDial(10, { direction: 'R', amount: 115 }), '===', 25, '\n\t', rotateDial(10, { direction: 'R', amount: 115 }) === 25);
// console.debug('Should handle right rotations WAY more then 100 (215):', rotateDial(10, { direction: 'R', amount: 215 }), '===', 25, '\n\t', rotateDial(10, { direction: 'R', amount: 215 }) === 25);

// const s1 = 0;
// const t3 = `L555
// R500
// R45
// R10
// R1000
// L1000
// L50
// R100
// L50`;
// const expected = zerosFound(parseInput(t3), s1);
// console.debug('Should find 2 zeros for starting at 0 going L555, R500, R45, R10, R1000, L1000, L50, R100, L50:', expected, '===', 3, '\n\t', expected === 3);
// // console.debug('Should find 3 zeros for starting at 0 going L555, R555, R1000, L1000:', zerosFound(parseInput(t3), s1), '===', 3, '\n\t', zerosFound(parseInput(t3), s1) === 3);
// // console.log('Math is hard', zerosFound(parseInput(input1)))

// // This seems wrong, but checking for 100 and 0 gets the right answers.
// console.debug('Should handle a rotation of 100 left from 0 to 0:', rotateDial(0, { direction: 'L', amount: 100 }), '===', 0, '\n\t', rotateDial(0, { direction: 'L', amount: 100 }) === 0);
// console.debug('Should handle a rotation of 100 right from 0 to 0:', rotateDial(0, { direction: 'R', amount: 100 }), '===', 0, '\n\t', rotateDial(0, { direction: 'R', amount: 100 }) === 0);
// console.debug('Should count a rotation of 100 left as one zero from 0 to 0:', zerosFound(parseInput('L100'), 0), '===', 1, '\n\t', zerosFound(parseInput('L100'), 0) === 1);
// console.debug('Should count a rotation of 100 right as one zero from 0 to 0:', zerosFound(parseInput('R100'), 0), '===', 1, '\n\t', zerosFound(parseInput('R100'), 0) === 1);

// console.warn('Part 1:', zerosFound(parseInput(input1)));

// // Less then 27557
// // More then 2584
// console.warn('Part 1:', zerosPassed(parseInput(input1)));
