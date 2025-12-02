import { input } from './day4.input.mjs';

var testInput = `..........
.M.S......
..A.......
.M.S......
..A.......
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

var testInput2 = `..........
..........
.....MSMS.
.....MAA..
....ASMSM.
.....M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

var testInput3 = `..........
.M.S......
..A.......
.M.S......
..A.......
.M.S.M....
..........
.....S.M..
......A...
.....S.M..
..........`;

var testInput4 = `..........
.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

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

function countXMASPatterns(wordsearch) {
  const rows = wordsearch.split('\n');
  const numRows = rows.length;
  const numCols = rows[0].length;

  function isXMASAt(row, col) {
    const patterns = [
      ['M', 'A', 'S', 'M', 'A', 'S'], // M.A.S
      ['S', 'A', 'M', 'S', 'A', 'M'], // S.A.M
      ['M', 'A', 'S', 'M', 'A', 'S'], // M.S\n.A.\nM.S
      ['M', 'A', 'S', 'S', 'A', 'M'], // MASSAM
      ['S', 'A', 'M', 'M', 'A', 'S']  // SAMMAS
    ];

    for (const pattern of patterns) {
      if (
        row - 1 >= 0 && row + 1 < numRows &&
        col - 1 >= 0 && col + 1 < numCols &&
        rows[row - 1][col - 1] === pattern[0] &&
        rows[row][col] === pattern[1] &&
        rows[row + 1][col + 1] === pattern[2] &&
        rows[row - 1][col + 1] === pattern[3] &&
        rows[row][col] === pattern[4] &&
        rows[row + 1][col - 1] === pattern[5]
      ) {
        return true;
      }
    }
    return false;
  }

  let count = 0;
  for (let row = 1; row < numRows - 1; row++) {
    for (let col = 1; col < numCols - 1; col++) {
      if (isXMASAt(row, col)) {
        count++;
      }
    }
  }
  return count;
}

// Example usage:
console.log(countWordInstances(testInput, 'SAM')); // 1
console.log(countWordInstances(testWithAllLetters, 'XMAS')); // 5
console.log(countWordInstances(testWithAllLetters, 'HELLO')); // 0

console.log(countWordInstances(input, 'XMAS')); // 5

console.log(countXMASPatterns(testInput)); // 4 -> 6
console.log(countXMASPatterns(testInput2)); // 6 -> 6
console.log(countXMASPatterns(testInput3)); // 0 -> 2
console.log(countXMASPatterns(testInput4)); // 6
console.log(countXMASPatterns(testWithAllLetters)); // 6
console.log(countXMASPatterns(input)); // 913



