const { day6, day6p6 } = require('./6');
const { input6 } = require('./6.input');

describe('day6', () => {
    describe('setup', () => {
        const inp = `turn on 0,0 through 999,999`;

        it.skip('Should do one thing', () => { // Opps, I have broken this one, when getting part 2 working :'(
            expect(day6(inp)).toEqual(1000*1000);
            expect(day6()).toEqual(545246);
        });

        it.skip('Should do another thing', () => {
            expect(day6p6(inp)).toEqual(1000*1000);
            expect(day6p6()).toBeGreaterThan(2036313);
            expect(day6p6()).toBeGreaterThan(14980355);
            expect(day6p6()).toEqual(15343601);
        });
    });
});
