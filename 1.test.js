const { split, calc, day1 } = require('./1');
const { input1 } = require('./1.input');

describe('day1', () => {
    describe('setup', () => {
        const inp = `123
234

345

456
567`;

        it('Should split by Elf', () => {
            expect(split(inp)).toEqual([`123
234`,
`345`,
`456
567`,
            ]);
        });

        it('Should calculate the Elves total', () => {
            expect(calc(inp)).toEqual([123+234, 345, 456+567]);
        });

        it('Should return to biggest Elves load', () => {
            expect(day1(inp)).toEqual(456+567);
        });
    });

    describe('Day one Part one', () => {
        it('Should do a thing', () => {
            expect(day1(input1)).toEqual(74198);
        });
    });

    describe('Day one Part two', () => {
        it('Should do three things', () => {
            expect(day1(input1, 3)).toEqual(209914);
        });
    });
});
