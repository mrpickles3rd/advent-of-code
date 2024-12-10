console.log(`
     _ _____ __  __
    | |_   _|  \\/  |
 _  | | | | \\  / |
| |_| | | | |\\/| |
 \\___/  |_| |_|  |_|
`);

import { input } from './day8.input.mjs';

/* This is a simple example grid with hashes added.
..........
...#......
..........
....a.....
..........
.....a....
..........
......#...
..........
..........
*/

/* This is a more complex example grid with hashes added.
..........
..........
..........
....a.....
........a.
.....a....
..........
..........
..........
..........
*/

var testInput = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

function antinodesWithinBounds(x, y, rows) {
    return rows.length > 0 && rows[0] && x >= 0 && x < rows[0].length && y >= 0 && y < rows.length;
}

function groupCharacters(map) {
    const rows = map.split('\n');
    const groups = {};

    // Collect all characters with their positions
    for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
            const char = rows[y][x];
            if (char !== '.' && char !== '#') {
                if (!groups[char]) {
                    groups[char] = [];
                }
                groups[char].push({ x, y });
            }
        }
    }

    console.log("Groups found:", groups); // Log all the groups

    return groups;
}

function addHashes(map) {
    const rows = map.split('\n').map(line => line.split(''));
    const groups = groupCharacters(map);
    let hashCount = 0;
    const countedPositions = new Set(); // Track counted positions to avoid double counting

    console.log("Group data:", groups); // Log the group data

    // Add hashes for each group independently
    for (const char in groups) {
        const positions = groups[char];
        const groupRows = rows.map(row => row.slice()); // Create a copy of rows for each group
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const a1 = positions[i];
                const a2 = positions[j];
                const dx = a2.x - a1.x;
                const dy = a2.y - a1.y;

                // Calculate opposite positions
                const antinodeX1 = a1.x - dx;
                const antinodeY1 = a1.y - dy;
                const antinodeX2 = a2.x + dx;
                const antinodeY2 = a2.y + dy;

                // Add hashes at the calculated positions if within bounds and if the position is a dot
                if (antinodesWithinBounds(antinodeX1, antinodeY1, groupRows)) {
                    const pos1 = `${antinodeX1},${antinodeY1}`;
                    if (!countedPositions.has(pos1)) {
                        if (groupRows[antinodeY1][antinodeX1] === '.') {
                            groupRows[antinodeY1][antinodeX1] = '#';
                        } else {
                            console.log(`Overlap at (${antinodeX1}, ${antinodeY1}) for group ${char}
                                with positions (${a1.x}, ${a1.y}) and (${a2.x}, ${a2.y})
                                dx: ${dx}, dy: ${dy}`);
                        }
                        countedPositions.add(pos1);
                        hashCount++;
                    }
                }
                if (antinodesWithinBounds(antinodeX2, antinodeY2, groupRows)) {
                    const pos2 = `${antinodeX2},${antinodeY2}`;
                    if (!countedPositions.has(pos2)) {
                        if (groupRows[antinodeY2][antinodeX2] === '.') {
                            groupRows[antinodeY2][antinodeX2] = '#';
                        } else {
                            console.log(`Overlap at (${antinodeX2}, ${antinodeY2}) for group ${char}
                                with positions (${a1.x}, ${a1.y}) and (${a2.x}, ${a2.y})
                                dx: ${dx}, dy: ${dy}`);
                        }
                        countedPositions.add(pos2);
                        hashCount++;
                    }
                }
            }
        }
        // Merge groupRows back into rows
        for (let y = 0; y < rows.length; y++) {
            for (let x = 0; x < rows[y].length; x++) {
                if (groupRows[y][x] === '#') {
                    rows[y][x] = '#';
                }
            }
        }
    }

    const resultGrid = rows.map(row => row.join('')).join('\n');
    console.log(resultGrid); // Log the modified grid
    console.log("Number of hashes added:", hashCount); // Log the number of hashes added

    return resultGrid;
}

addHashes(testInput);
addHashes(input);

console.log('tada');
