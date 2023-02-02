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
        const inp3 = `D 2
L 2
U 4
R 4
D 4
L 4`;
        const inp4 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;
/*
U 4 - 3
R 4 - 2
D 4 - 2
L 4 - 2
*/

        it('Should do one thing', () => {
            // expect(day9(inp2)).toEqual(1);
            expect(day9(inp3)).toEqual(14);
            expect(day9(inp)).toEqual(13);
            // expect(day9()).toBeLessThan(6530);
            // expect(day9()).toEqual(6098);
        });

        it('Should do another thing', () => {
            expect(day9(inp4, 9)).toEqual(36);
        });
    });
});
