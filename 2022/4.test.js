const { day4, day4p4 } = require('./4');
const { input4 } = require('./4.input');

/*
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
 */

describe('day4', () => {
    describe('setup', () => {
        const inp = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
        const imp2 = `5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
        it('Should TEMP, ret the wrong item', () => {
            // expect(day3(inp)).toEqual(['p', 'L', 'P', 'v', 't', 's']);
            // expect(day3(inp)).toEqual([16, 38, 42, 22, 20, 19]);
            expect(day4(inp)).toEqual(2);
        });
        it('Should do a thing', () => {
            expect(day4()).toBeLessThan(548);
            expect(day4()).toEqual(498);
        });
        it('Should do a thing 2', () => {
            expect(day4p4(imp2)).toEqual(4);
            expect(day4p4()).toBeLessThan(925);
            expect(day4p4()).toBe(859);
        });
    });
});
