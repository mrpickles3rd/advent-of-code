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

function findWord(wordsearch, word) {
    const rows = wordsearch.split('\n');
    const numRows = rows.length;
    const numCols = rows[0].length;

    const directions = [
        { x: 0, y: 1 },   // horizontal right
        { x: 0, y: -1 },  // horizontal left
        { x: 1, y: 0 },   // vertical down
        { x: -1, y: 0 },  // vertical up
        { x: 1, y: 1 },   // diagonal down-right
        { x: 1, y: -1 },  // diagonal down-left
        { x: -1, y: 1 },  // diagonal up-right
        { x: -1, y: -1 }  // diagonal up-left
    ];

    function isWordAt(row, col, dir) {
        for (let i = 0; i < word.length; i++) {
            const newRow = row + i * dir.x;
            const newCol = col + i * dir.y;
            if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols || rows[newRow][newCol] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            for (const dir of directions) {
                if (isWordAt(row, col, dir)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function countWordInstances(wordsearch, word) {
    const rows = wordsearch.split('\n');
    const numRows = rows.length;
    const numCols = rows[0].length;

    const directions = [
        { x: 0, y: 1 },   // horizontal right
        { x: 0, y: -1 },  // horizontal left
        { x: 1, y: 0 },   // vertical down
        { x: -1, y: 0 },  // vertical up
        { x: 1, y: 1 },   // diagonal down-right
        { x: 1, y: -1 },  // diagonal down-left
        { x: -1, y: 1 },  // diagonal up-right
        { x: -1, y: -1 }  // diagonal up-left
    ];

    function isWordAt(row, col, dir) {
        for (let i = 0; i < word.length; i++) {
            const newRow = row + i * dir.x;
            const newCol = col + i * dir.y;
            if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols || rows[newRow][newCol] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    let count = 0;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            for (const dir of directions) {
                if (isWordAt(row, col, dir)) {
                    count++;
                }
            }
        }
    }
    return count;
}

// Example usage:
console.log(findWord(testInput, 'SAM')); // true
console.log(findWord(testWithAllLetters, 'XMAS')); // true
console.log(findWord(testWithAllLetters, 'HELLO')); // false

console.log(countWordInstances(testInput, 'SAM')); // 1
console.log(countWordInstances(testWithAllLetters, 'XMAS')); // 5
console.log(countWordInstances(testWithAllLetters, 'HELLO')); // 0

console.log(countWordInstances(input, 'XMAS')); // 5


