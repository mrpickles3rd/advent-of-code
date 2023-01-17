const { day7 } = require('./7');
const { input7 } = require('./7.input');

describe('day7', () => {
    describe('setup', () => {
        const inp = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i`;

        it('Should do one thing', () => {
            expect(day7(inp)).toEqual({
                a: 0,
                d: 72,
                e: 507,
                f: 492,
                g: 114,
                h: 65412,
                i: 65079,
                x: 123,
                y: 456,
            });
            // expect(day7()).toEqual(123);
        });

        it('Should do another thing', () => {
            // expect(day7(inp)).toEqual(123);
        });
    });
});
