const { day6 } = require('./6');
const { input6 } = require('./6.input');

/*
    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
 */

describe('day6', () => {
    describe('setup', () => {
        const inp = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
        const inp2 = 'nppdvjthqldpwncqszvftbrmjlhg';
        const inp3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
        const inp4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

        it('Should TEMP, ret the wrong item', () => {
            expect(day6(inp)).toEqual(5);
            expect(day6(inp2)).toEqual(6);
            expect(day6(inp3)).toEqual(10);
            expect(day6(inp4)).toEqual(11);
        });
        it('Should do a thing', () => {
            // expect(day5()).toBeLessThan(548);
            expect(day6()).toEqual(1912);
        });
        it('Should do a thing 2', () => {
            expect(day6('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toEqual(19);
            expect(day6('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toEqual(23);
            expect(day6('nppdvjthqldpwncqszvftbrmjlhg', 14)).toEqual(23);
            expect(day6('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toEqual(29);
            expect(day6('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toEqual(26);

            expect(day6(input6, 14)).toBeLessThan(4111);
            expect(day6(input6, 14)).toEqual(2122);
        });
    });
});
