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

var validLoop1 = `....#.....
....+---+#
....|...|.
..#.|...|.
....|..#|.
....|...|.
.#.O^---+.
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

        if (map[nr][nc] === '#') {
            guardDir = directions[(directions.indexOf(guardDir) + 1) % 4];
        } else {
            guardPos = [nr, nc];
        }
    }

    return visited.size;
}

// const map = testInput.split('\n').map(line => line.split(''));
const map = testInput.split('\n').map(line => line.split(''));
console.log(predictGuardPath(map));

