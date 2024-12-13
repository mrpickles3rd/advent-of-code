import { input } from './day9.input.mjs';

var testInput = '2333133121414131402';

// Function to parse the disk map
function parseDiskMap(diskMap) {
    let blocks = [];
    let currentID = 0;
    for (let i = 0; i < diskMap.length; i += 2) {
        let fileLength = parseInt(diskMap[i]);
        let freeSpaceLength = parseInt(diskMap[i + 1]);
        for (let j = 0; j < fileLength; j++) {
            blocks.push(currentID);
        }
        for (let j = 0; j < freeSpaceLength; j++) {
            blocks.push('.');
        }
        currentID++;
    }
    return blocks.join('');
}

// Log the intermediate representation for the disk map '12345'
console.log(parseDiskMap('12345')); // Expected output: '0..111....22222'

// Log the intermediate representation for the test input
console.log(parseDiskMap(testInput)); // Expected output: '00...111...2...333.44.5555.6666.777.888899'

// Function to compact the disk map
function compactDiskMap(diskMap) {
    let blocks = [];
    let currentID = 0;
    for (let i = 0; i < diskMap.length; i += 2) {
        let fileLength = parseInt(diskMap[i]);
        let freeSpaceLength = parseInt(diskMap[i + 1]);
        for (let j = 0; j < fileLength; j++) {
            blocks.push(currentID);
        }
        for (let j = 0; j < freeSpaceLength; j++) {
            blocks.push('.');
        }
        currentID++;
    }

    let compacted = blocks.join('');
    let iterations = 0;
    const maxIterations = 100000; // Increase the limit by 100 times
    while (compacted.includes('.') && iterations < maxIterations) {
        compacted = compacted.replace(/(\d)\.(\d)/g, '$1$2.');
        compacted = compacted.replace(/(\d)\.(\d)/g, '$1$2.');
        iterations++;
    }

    if (iterations >= maxIterations) {
        console.warn('Max iterations reached, possible infinite loop detected.');
    }

    return compacted.replace(/\.+$/, '');
}

// Log the result
console.log(compactDiskMap(testInput));
