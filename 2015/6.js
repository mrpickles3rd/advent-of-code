const { input6 } = require('./6.input');

const inp = `turn on 0,0 through 999,999
toggle 0,0 through 999,0
turn off 499,499 through 500,500`;

const set = {
    on: () => true, off: () => false, toggle: v => !v,
    on2: (v) => (v + 1), off2: (v) => v > 0 ? (v - 1) : 0, toggle2: v => v + 2,
};

function loop(grid, cmd, top = 0, left = 0, bottom = 0, right = 0) {
    // console.log("DB ... 🚀 ~ file: 6.js:10 ~ loop ~ cmd, top, left, bottom, right", cmd, top, left, bottom, right)
    for (let t = top; t <= bottom; t += 1) {
        for (let l = left; l <= right; l += 1) {
            grid[t][l] = set[cmd](grid[t][l]);
        }
    }
}

function turn(grid, params, sec = '') {
    // console.log("DB ... 🚀 ~ file: 6.js:19 ~ turn ~ turn", turn)
    const [t, cmd, topLeft, thou, bottomRight] = params.split(' ');
    // console.log("DB ... 🚀 ~ file: 6.js:21 ~ turn ~ bottomRight", bottomRight)
    const [top, left] = topLeft.split(',');
    const [bottom, right] = bottomRight.split(',');
    // console.log("DB ... 🚀 ~ file: 6.js:24 ~ turn ~ `${cmd}${sec}`", `${cmd}${sec}`)
    loop(grid, `${cmd}${sec}`, parseInt(top), parseInt(left), parseInt(bottom), parseInt(right));
}

function toggle(grid, params, sec = '') {
    // console.log("DB ... 🚀 ~ file: 6.js:27 ~ toggle ~ toggle", toggle)
    const [togg, topLeft, thou, bottomRight] = params.split(' ');
    const [top, left] = topLeft.split(',');
    const [bottom, right] = bottomRight.split(',');
    // console.log("DB ... 🚀 ~ file: 6.js:38 ~ toggle ~ `${togg}${sec}`", `${togg}${sec}`)
    loop(grid, `${togg}${sec}`, parseInt(top), parseInt(left), parseInt(bottom), parseInt(right));
}

function getGrid(x = 1000, y = 1000, fill = null) {
    const grid = [];
    for (let i1 = 0; i1 < y; i1 += 1) {
        const row = [];
        for (let i2 = 0; i2 < x; i2 += 1) {
            row.push(fill);
        }
        grid.push(row);
    }
    return grid;
}

function day6(input = input6, x = 1000, y = 1000) {
    // console.log("DB ... 🚀 ~ file: 6.js:33 ~ day6 ~ input", input)
    const grid = getGrid(x, y, false);
    // console.log("DB ... 🚀 ~ file: 6.js:33 ~ day6 ~ grid[999][999]", grid[999][999])

    input.split('\n').forEach((v) => {
        // console.log("DB ... 🚀 ~ file: 6.js:38 ~ input.split ~ v", v)
        if (v.indexOf('toggle') > -1) {
            toggle(grid, v);
            return;
        }
        turn(grid, v);
        return;
    });

    let ret = 0;
    // console.log("DB ... 🚀 ~ file: 6.js:45 ~ day6 ~ ret", ret)
    grid.forEach(r => r.forEach(v => ret += v ? 1 : 0))
    return ret
}

function day6p6(input = input6, x = 1000, y = 1000) {
    // console.log("DB ... 🚀 ~ file: 6.js:73 ~ day6p6 ~ input", input)
    const grid = getGrid(x, y, 0);
    // console.log("DB ... 🚀 ~ file: 6.js:33 ~ day6 ~ grid[999][999]", grid[999][999])

    input.split('\n').forEach((v) => {
        // console.log("DB ... 🚀 ~ file: 6.js:38 ~ input.split ~ v", v)
        if (v.indexOf('toggle') > -1) {
            toggle(grid, v, '2');
            return;
        }
        turn(grid, v, '2');
        return;
    });

    let ret = 0;
    grid.forEach(r => r.forEach(v => (ret === 1 && console.log(v, ret)) || (ret += v)))
    // console.log("DB ... 🚀 ~ file: 6.js:45 ~ day6 ~ ret", ret)
    return ret
}

module.exports = {
    day6,
    day6p6,
};
