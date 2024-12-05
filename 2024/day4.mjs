import { input } from './day4.input.mjs';

var testInput = `..X...
.SAMX.
.A..A.
XMAS.S
.X....`;

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

console.log(countXMAS(testInput)); // Output the count of "XMAS"
console.log(countXMAS(testWithAllLetters)); // Output the count of "XMAS"
console.log(countXMAS(input)); // Output the count of "XMAS"
