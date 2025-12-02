import { input } from './day3.wf.input.mjs';

function countUniqueLocations(instructions, startX, startY) {
    const visited = new Set();
    let x = startX;
    let y = startY;
    visited.add(`${x},${y}`);

    for (const move of instructions) {
        switch (move) {
            case '^':
                y -= 1;
                break;
            case 'v':
                y += 1;
                break;
            case '<':
                x -= 1;
                break;
            case '>':
                x += 1;
                break;
        }
        visited.add(`${x},${y}`);
    }

    return visited.size;
}

function countUniqueLocationsWithTwoPointers(instructions, startX, startY) {
    const visited = new Set();
    let x1 = startX, y1 = startY;
    let x2 = startX, y2 = startY;
    visited.add(`${x1},${y1}`);

    for (let i = 0; i < instructions.length; i++) {
        const move = instructions[i];
        if (i % 2 === 0) {
            switch (move) {
                case '^':
                    y1 -= 1;
                    break;
                case 'v':
                    y1 += 1;
                    break;
                case '<':
                    x1 -= 1;
                    break;
                case '>':
                    x1 += 1;
                    break;
            }
            visited.add(`${x1},${y1}`);
        } else {
            switch (move) {
                case '^':
                    y2 -= 1;
                    break;
                case 'v':
                    y2 += 1;
                    break;
                case '<':
                    x2 -= 1;
                    break;
                case '>':
                    x2 += 1;
                    break;
            }
            visited.add(`${x2},${y2}`);
        }
    }

    return visited.size;
}

// Example usage:
const instructions = input;
const startX = 0;
const startY = 0;
console.log(countUniqueLocationsWithTwoPointers(instructions, startX, startY));
