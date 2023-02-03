const { day3 } = require('./3');
const { input3 } = require('./3.input');

describe('day3', () => {
    describe('setup', () => {
        const inp = ``;

        it('Should do one thing', () => {
            // expect(day3(10, 1)).toEqual(0);
            // expect(day3(12, 12)).toEqual(3);
            // expect(day3(23, 23)).toEqual(2);
            expect(day3(1024, 1024)).toEqual(31);
            expect(day3(361527, 361527)).toEqual(42);
        }, 5000);

        it('Should do another thing', () => {
            expect(day3(inp)).toEqual(123);
        });
    });
});
