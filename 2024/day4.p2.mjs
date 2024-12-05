import { input } from './day4.input.mjs';

var testInput = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

var testInput2 = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

var exampleWith2xFound2 = `MSM
.A.
SMS`;

var testWithAllLetters = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

function countXMAS(input) {
    const rows = input.split('\n');
    const word = 'XMAS';
    const wordLength = word.length;
    let count = 0;

    const directions = [
        { x: 0, y: 1 },   // horizontal right
        { x: 1, y: 0 },   // vertical down
        { x: 1, y: 1 },   // diagonal down-right
        { x: 1, y: -1 },  // diagonal down-left
        { x: 0, y: -1 },  // horizontal left
        { x: -1, y: 0 },  // vertical up
        { x: -1, y: -1 }, // diagonal up-left
        { x: -1, y: 1 }   // diagonal up-right
    ];

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            for (const direction of directions) {
                let found = true;
                for (let k = 0; k < wordLength; k++) {
                    const x = i + k * direction.x;
                    const y = j + k * direction.y;
                    if (x < 0 || x >= rows.length || y < 0 || y >= rows[i].length || rows[x][y] !== word[k]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    count++;
                }
            }
        }
    }

    return count;
}

function countMASX(input) {
    const rows = input.split('\n');
    let count = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        for (let j = 1; j < rows[i].length - 1; j++) {
            if (rows[i][j] === 'A') {
                if (
                    (rows[i - 1][j - 1] === 'M' && rows[i + 1][j + 1] === 'S' && rows[i - 1][j + 1] === 'S' && rows[i + 1][j - 1] === 'M') ||
                    (rows[i - 1][j + 1] === 'M' && rows[i + 1][j - 1] === 'S' && rows[i - 1][j - 1] === 'S' && rows[i + 1][j + 1] === 'M') ||
                    (rows[i - 1][j - 1] === 'S' && rows[i + 1][j + 1] === 'M' && rows[i - 1][j + 1] === 'M' && rows[i + 1][j - 1] === 'S') ||
                    (rows[i - 1][j + 1] === 'S' && rows[i + 1][j - 1] === 'M' && rows[i - 1][j - 1] === 'M' && rows[i + 1][j + 1] === 'S') ||
                    (rows[i + 1][j - 1] === 'M' && rows[i - 1][j + 1] === 'S' && rows[i + 1][j + 1] === 'S' && rows[i - 1][j - 1] === 'M') ||
                    (rows[i + 1][j + 1] === 'M' && rows[i - 1][j - 1] === 'S' && rows[i + 1][j - 1] === 'S' && rows[i - 1][j + 1] === 'M') ||
                    (rows[i - 1][j - 1] === 'M' && rows[i - 1][j + 1] === 'M' && rows[i + 1][j - 1] === 'S' && rows[i + 1][j + 1] === 'S') ||
                    (rows[i + 1][j - 1] === 'M' && rows[i + 1][j + 1] === 'M' && rows[i - 1][j - 1] === 'S' && rows[i - 1][j + 1] === 'S')
                ) {
                    // console.log(`Pattern found at (${i}, ${j}):\n${rows[i-1].substring(j-1, j+2)}\n${rows[i].substring(j-1, j+2)}\n${rows[i+1].substring(j-1, j+2)}`);
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(countMASX(testInput)); // Output the count of "MAS" in the shape of an "X"
console.log(countMASX(testInput2)); // Output the count of "MAS" in the shape of an "X"
// console.log(countMASX(exampleWith2XFound)); // Output the count of "MAS" in the shape of an "X"
// console.log(countMASX(exampleWith2xFound2)); // Output the count of "MAS" in the shape of an "X"
console.log(countMASX(input)); // Output the count of "MAS" in the shape of an "X"
