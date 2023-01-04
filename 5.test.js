const { day5 } = require('./5');
const { input5, stack5 } = require('./5.input');

/*
    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
 */

describe('day5', () => {
    describe('setup', () => {
        const testStack = {
            1: ['Z', 'N'],
            2: ['M', 'C', 'D'],
            3: ['P'],
        };
        const inp = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
        const imp2 = ``;

        it('Should TEMP, ret the wrong item', () => {
            // expect(day3(inp)).toEqual(['p', 'L', 'P', 'v', 't', 's']);
            // expect(day3(inp)).toEqual([16, 38, 42, 22, 20, 19]);
            expect(day5(inp, testStack)).toEqual('CMZ');
        });
        it('Should do a thing', () => {
            // expect(day5()).toBeLessThan(548);
            expect(day5()).toEqual('VCTFTJQCG');
        });
        it('Should do a thing 2', () => {
            expect(day5(inp, testStack, true)).toEqual('MCD');
            expect(day5(input5, stack5, true)).toEqual('GCFGLDNJZ');
        });
    });
});
