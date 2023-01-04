const { day2, day2p2, map } = require('./2');
const { input2 } = require('./2.input');

/*
A X = Rock      = 1
B Y = Paper     = 2
C Z = Scissors  = 3
0, 3, 6,
 */

describe('day2', () => {
    describe('setup', () => {
        const inp = `A Y
B X
C Z`;
        it('Should convert the input to a list of maps', () => {
            expect(day2(inp)).toEqual(15);
        });
        it('Should do a thing', () => {
            expect(day2()).toEqual(15422);
        });

        it('Should do a 2nd thing', () => {
            expect(day2p2(inp)).toEqual(12);
        });
        it('Should do a 2nd thing', () => {
            expect(day2p2()).toEqual(15442);
        });
    });
});
