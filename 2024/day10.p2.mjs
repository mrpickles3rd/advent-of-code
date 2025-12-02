import { input } from './day10.input.mjs';

var testInput = `9999
0123
1234
8765
9876`;

var testInput2 = `2222222
9990999
9991999
9992999
6543456
7111117
8111118
9111119`;

var testInput3 = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

function countNinesFromZeros(grid) {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    const rows = grid.length;
    const cols = grid[0].length;
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    function isValid(x, y, prevValue) {
        return x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] === prevValue + 1;
    }

    function bfs(startX, startY) {
        const queue = [[startX, startY, 0]];
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        visited[startX][startY] = true;

        while (queue.length > 0) {
            const [x, y, value] = queue.shift();
            if (value === 9) {
                result[startX][startY]++;
                continue;
            }
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (isValid(newX, newY, value) && !visited[newX][newY]) {
                    visited[newX][newY] = true;
                    queue.push([newX, newY, value + 1]);
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                bfs(i, j);
            }
        }
    }

    return result;
}

function parseInput(input) {
    return input.split('\n').map(line => line.split('').map(Number));
}

const grids = [testInput, testInput2, testInput3].map(parseInput);
grids.forEach((grid, index) => {
    console.log(`Grid ${index + 1}:`);
    const result = countNinesFromZeros(grid);
    console.table(result);
    const totalNines = result.flat().reduce((sum, count) => sum + count, 0);
    console.log(`Total nines reachable from zeros: ${totalNines}`);
});
