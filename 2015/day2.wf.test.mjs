import { calculateTotalWithPerimeter, calculateTotalWithVolume } from './day2.wf.mjs';

const testInput = `4x23x21
22x29x19
11x4x11`;

const lines = testInput.split('\n');

// Test for calculateTotalWithPerimeter
const expectedPerimeterResult = 11268; // Replace with the correct expected result
const actualPerimeterResult = calculateTotalWithPerimeter(lines);
console.assert(actualPerimeterResult === expectedPerimeterResult, `Expected ${expectedPerimeterResult}, but got ${actualPerimeterResult}`);

// Test for calculateTotalWithVolume
const expectedVolumeResult = 39972; // Replace with the correct expected result
const actualVolumeResult = calculateTotalWithVolume(lines);
console.assert(actualVolumeResult === expectedVolumeResult, `Expected ${expectedVolumeResult}, but got ${actualVolumeResult}`);

console.log('All tests passed.');
