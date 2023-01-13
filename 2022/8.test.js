const { day8, day8p8 } = require('./8');
const { input8 } = require('./8.input');

describe('day8', () => {
    describe('setup', () => {
        const inp = `30373
25512
65332
33549
35390`;
        const inp2 = `333
333
323`;
        const inp3 = `323
333
333`;

        it('Should do one thing', () => {
            expect(day8(inp)).toEqual(21);
            expect(day8(inp2)).toEqual(8 + 1);
            expect(day8(inp3)).toEqual(8 + 1);
            expect(day8()).toEqual(1538);
        });

        it('Should do another thing', () => {
            expect(day8p8(inp, true)).toEqual(8);
            expect(day8p8(inp2, true)).toEqual(1);
            expect(day8p8(inp3, true)).toEqual(1);
            expect(day8p8(input8, true)).toEqual(496125);
        });
    });
});
