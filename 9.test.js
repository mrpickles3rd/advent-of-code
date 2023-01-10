const { day9 } = require('./9');
const { input9 } = require('./9.input');

describe('day9', () => {
    describe('setup', () => {
        const inp = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

        it('Should do one thing', () => {
            expect(day9(inp)).toEqual(123);
        });

        it('Should do another thing', () => {
            expect(day9(inp)).toEqual(123);
        });
    });
});
