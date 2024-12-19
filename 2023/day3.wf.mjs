import { input } from './day3.wf.input.mjs';

const testInput = `..........
467..114.+
...*......
..35..633.
42....#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

function recordSymbolLocations(grid) {
  const symbolLocations = {};
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const char = grid[row][col];
      if (char !== '.' && isNaN(char)) {
        if (!symbolLocations[char]) {
          symbolLocations[char] = [];
        }
        symbolLocations[char].push({ row, col });
      }
    }
  }
  return symbolLocations;
}

function recordNumberLocations(grid) {
  const numberLocations = [];
  for (let row = 0; row < grid.length; row++) {
    let number = '';
    let startCol = -1;
    for (let col = 0; col < grid[row].length; col++) {
      const char = grid[row][col];
      if (!isNaN(char) && char !== '.') {
        if (number === '') {
          startCol = col;
        }
        number += char;
      } else {
        if (number !== '') {
          numberLocations.push({ number, positions: { row, startCol, endCol: col - 1 } });
          number = '';
        }
      }
    }
    if (number !== '') {
      numberLocations.push({ number, positions: { row, startCol, endCol: grid[row].length - 1 } });
    }
  }
  return numberLocations;
}

function isAdjacentToSymbol(grid, row, col) {
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1], // up, down, left, right
    [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonals
  ];
  return directions.some(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;
    return (
      newRow >= 0 && newRow < grid.length &&
      newCol >= 0 && newCol < grid[0].length &&
      isNaN(grid[newRow][newCol]) && grid[newRow][newCol] !== '.'
    );
  });
}

function findNumbersWithAdjacentSymbols(grid, numberLocations) {
  return numberLocations.filter(({ positions }) => {
    const { row, startCol, endCol } = positions;
    for (let col = startCol; col <= endCol; col++) {
      if (isAdjacentToSymbol(grid, row, col)) {
        return true;
      }
    }
    return false;
  });
}

function totalNumberValues(numbersWithAdjacentSymbols) {
  return numbersWithAdjacentSymbols.reduce((total, { number }) => total + parseInt(number, 10), 0);
}

const grid = testInput.split('\n');
const symbolLocations = recordSymbolLocations(grid);
console.log(symbolLocations);

const numberLocations = recordNumberLocations(grid);
console.log(numberLocations);

const numbersWithAdjacentSymbols = findNumbersWithAdjacentSymbols(grid, numberLocations);
console.log(numbersWithAdjacentSymbols);

const totalNumbersWithAdjacentSymbols = totalNumberValues(numbersWithAdjacentSymbols);
console.log(totalNumbersWithAdjacentSymbols);

