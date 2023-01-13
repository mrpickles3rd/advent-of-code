const { day10 } = require('./10');
const { input10, testInput10 } = require('./10.input');

describe('day10', () => {
    describe('setup', () => {
        const inp = `noop
addx 3
addx -5`;

        it('Should do one thing', () => {
            // expect(day10(inp)).toEqual(123);
            expect(day10(testInput10)).toEqual(13140);
            expect(day10()).toEqual(13520);
        });

        it('Should do another thing', () => {
            // expect(day10(inp)).toEqual(123);
        });
    });
});
