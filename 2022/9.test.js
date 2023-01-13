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
        const inp2 = `D 1
L 1
U 2
R 2
D 2
L 2`;
        const inp3 = `U 4
R 4
D 4
L 4`;
/*
U 4 - 3
R 4 - 2
D 4 - 2
L 4 - 2
*/

        it.skip('Should do one thing', () => {
            expect(day9(inp2)).toEqual(1);
            expect(day9(inp)).toEqual(13);
            expect(day9(inp3)).toEqual(9);
            expect(day9()).toBeLessThan(6530);
        });

        // it('Should do another thing', () => {
        //     expect(day9(inp)).toEqual(123);
        // });
    });
});
