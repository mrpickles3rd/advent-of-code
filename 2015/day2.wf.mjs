import { input } from './day2.wf.input.mjs';

// const testInput = `2*l*w + 2*w*h + 2*h*l`;
const testInput = `4x23x21
22x29x19
11x4x11`;

function calculateTotalWithPerimeter(lines) {
  let total = 0;

  lines.forEach(line => {
    const [l, w, h] = line.split('x').map(Number);
    const lw = l * w;
    const wh = w * h;
    const hl = h * l;
    const surfaceArea = 2 * lw + 2 * wh + 2 * hl;
    const smallestSideArea = Math.min(lw, wh, hl);
    total += surfaceArea + smallestSideArea;
  });

  return total;
}

function calculateTotalWithVolume(lines) {
  let total = 0;

  lines.forEach(line => {
    const [l, w, h] = line.split('x').map(Number);
    const perimeters = [2 * (l + w), 2 * (w + h), 2 * (h + l)];
    const smallestPerimeter = Math.min(...perimeters);
    const volume = l * w * h;
    total += smallestPerimeter + volume;
  });

  return total;
}

const lines = input.split('\n');
const totalWithPerimeter = calculateTotalWithPerimeter(lines);
const totalWithVolume = calculateTotalWithVolume(lines);

console.log(totalWithPerimeter);
console.log(totalWithVolume);

export { calculateTotalWithPerimeter, calculateTotalWithVolume };


