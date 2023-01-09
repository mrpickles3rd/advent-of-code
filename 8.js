const { input8 } = require('./8.input');

function day8(input = input8) {
    let ret = 0;
    const grid = input.split('\n').map(line => [...line]);
    const y = grid.length;
    const x = grid[0].length;
    ret += (x * 2) + (y * 2) - 4;

    for (let col = 1; col < y - 1; col += 1) {
        for (let row = 1; row < x - 1; row += 1) {
            const tree = grid[col][row];
            let left = true;
            let right = true;
            let top = true;
            let bottom = true;
            for (let upDown = 0; upDown < y; upDown += 1) {
                if (top && upDown < col) {
                    top = tree > grid[upDown][row];
                }
                if (bottom && upDown > col) {
                    bottom = tree > grid[upDown][row];
                }
            }
            grid[col].forEach((v1, idx) => {
                if (left && idx > row) {
                    left = v1 < tree;
                }
                if (right && idx < row) {
                    right = v1 < tree;
                }
            });
            ret += left || right || bottom || top ? 1 : 0
            // console.log("DB ... 🚀 ~ file: 8.js:13 ~ day8 ~ col][row", col, row)
            // console.log("DB ... 🚀 ~ file: 8.js:34 ~ day8 ~ left || right || bottom", left, right, bottom)
        }
    }

    return ret;
}

module.exports = {
    day8,
};
