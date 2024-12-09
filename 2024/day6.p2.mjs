import { input } from './day6.input.mjs';

var testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

function predictGuardPath(map) {
    const directions = ['^', '>', 'v', '<'];
    const moves = {
        '^': [-1, 0],
        '>': [0, 1],
        'v': [1, 0],
        '<': [0, -1]
    };
    let guardPos = [0, 0];
    let guardDir = '^';
    const visited = new Set();

    // Find initial guard position and direction
    for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
            if (directions.includes(map[r][c])) {
                guardPos = [r, c];
                guardDir = map[r][c];
                break;
            }
        }
    }

    while (true) {
        visited.add(guardPos.join(','));
        const [dr, dc] = moves[guardDir];
        const [nr, nc] = [guardPos[0] + dr, guardPos[1] + dc];

        if (nr < 0 || nr >= map.length || nc < 0 || nc >= map[0].length) {
            break;
        }

        if (map[nr][nc] === '#' || map[nr][nc] === 'O') {
            guardDir = directions[(directions.indexOf(guardDir) + 1) % 4];
        } else {
            guardPos = [nr, nc];
            map[guardPos[0]][guardPos[1]] = 'X';
        }
    }

    return { map, visitedCount: visited.size, guardPos, guardDir };
}

function countLoops(map) {
    const directions = ['^', '>', 'v', '<'];
    const moves = {
        '^': [-1, 0],
        '>': [0, 1],
        'v': [1, 0],
        '<': [0, -1]
    };
    const { map: resultMap, visitedCount, guardPos, guardDir } = predictGuardPath(map);
    let loopCount = 0;

    for (let r = 0; r < resultMap.length; r++) {
        for (let c = 0; c < resultMap[r].length; c++) {
            if (resultMap[r][c] === 'X') {
                const newMap = resultMap.map(row => row.slice());
                newMap[r][c] = 'O';
                const { visitedCount: newVisitedCount, guardPos: newGuardPos, guardDir: newGuardDir } = predictGuardPath(newMap);

                if (newVisitedCount < visitedCount) {
                    loopCount++;
                } else {
                    // Check if the guard gets stuck in a loop
                    const loopVisited = new Set();
                    let stuck = false;
                    while (true) {
                        loopVisited.add(newGuardPos.join(','));
                        const [dr, dc] = moves[newGuardDir];
                        const [nr, nc] = [newGuardPos[0] + dr, newGuardPos[1] + dc];

                        if (nr < 0 || nr >= newMap.length || nc < 0 || nc >= newMap[0].length || newMap[nr][nc] === 'O') {
                            break;
                        }

                        if (newMap[nr][nc] === '#' || newMap[nr][nc] === 'O') {
                            newGuardDir = directions[(directions.indexOf(newGuardDir) + 1) % 4];
                        } else {
                            newGuardPos = [nr, nc];
                        }

                        if (loopVisited.has(newGuardPos.join(','))) {
                            stuck = true;
                            break;
                        }
                    }

                    if (stuck) {
                        loopCount++;
                        console.log(newMap.map(line => line.join('')).join('\n'));
                        console.log('---');
                    }
                }
            }
        }
    }

    console.log(resultMap.map(line => line.join('')).join('\n'));
    return loopCount;
}

// const map = testInput.split('\n').map(line => line.split(''));
const map = testInput.split('\n').map(line => line.split(''));
const { map: resultMap, visitedCount } = predictGuardPath(map);
console.log(resultMap.map(line => line.join('')).join('\n'));
console.log(`Distinct positions visited: ${visitedCount}`);
console.log(`Number of loops: ${countLoops(map)}`);
