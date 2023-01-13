const { day7, day7p7 } = require('./7');
const { input7 } = require('./7.input');

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

describe('day7', () => {
    describe('setup', () => {
        const inp = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

        it('Should TEMP, ret the wrong item', () => {
            expect(day7(inp)).toEqual(95437);//95437
        });

        it('Should do a thing', () => {
            // expect(day5()).toBeLessThan(548);
            expect(day7()).toEqual(1454188);
        });

        it('Should do a thing 2', () => {
            expect(day7p7(inp)).toBe(24933642);

            expect(day7p7()).toBeLessThan(15711259);
            expect(day7p7()).toBeLessThan(5406295);

            expect(day7p7()).toBeGreaterThan(133507);

            expect(day7p7()).toBe(4183246);
        });
    });
});
