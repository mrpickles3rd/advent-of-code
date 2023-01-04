const { day3, day3p3, map } = require('./3');
const { input3 } = require('./3.input');

/*
vJrwpWtwJgWr
hcsFMMfFFhFp            p

jqHRNqRjqzjGDLGL
rsFMfFZSrLrFZsSL    L

PmmdzqPrV
vPwwTWBwg                  P
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn      v
ttgJtRGJQctTZtZT                    t
CrZsJsPPZsGzwwsLwLmpwMDw            s
 */

describe('day3', () => {
    describe('setup', () => {
        const inp = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
        it('Should TEMP, ret the wrong item', () => {
            // expect(day3(inp)).toEqual(['p', 'L', 'P', 'v', 't', 's']);
            // expect(day3(inp)).toEqual([16, 38, 42, 22, 20, 19]);
            expect(day3(inp)).toEqual(157);
        });
        it('Should do a thing', () => {
            expect(day3()).toEqual(7850);
        });
    });
});
