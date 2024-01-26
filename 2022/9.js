const { input9 } = require('./9.input');

const move = {
    'U': { z: 'y', s: 1},
    'D': { z: 'y', s: -1},
    'L': { z: 'x', s: -1},
    'R': { z: 'x', s: 1},
};

function set(m, journey, length) {
    console.log("DB ... 🚀 ~ file: 9.js:12 ~ set ~ JSON.stringify(journey[length]) ???", JSON.stringify(journey[length]))
    const val = m.get(JSON.stringify(journey[length])) || 0;
    m.set(JSON.stringify(journey[length]), val + 1);
    console.log("DB ... 🚀 ~ file: 9.js:14 ~ set ~ m", m.size)
}

function day9(input = input9, length = 1) {
    console.log("DB ... 🚀 ~ file: 9.js:16 ~ input\n", input)
    const map = new Map();
    const journey = {
        head: { x: 0, y: 0 },
        1: { x: 0, y: 0 },
        2: { x: 0, y: 0 },
        3: { x: 0, y: 0 },
        4: { x: 0, y: 0 },
        5: { x: 0, y: 0 },
        6: { x: 0, y: 0 },
        7: { x: 0, y: 0 },
        8: { x: 0, y: 0 },
        9: { x: 0, y: 0 },

    };
    set(map, journey, length);

    input.split('\n').forEach(v => {
        const [dir, times] = v.split(' ');
        // console.log("DB ... 🚀 ~ file: 9.js:25 ~ input.split ~ dir, times", dir, times)
        const { z, s } = move[dir];
        // console.log("DB ... 🚀 ~ ROW", journey)
        for (let long = 1; long <= length; long++) {
            for (var i = 0; i < times; i += 1) {
                const n = long === 1 ? 'head' : long;
                // console.log("DB ... 🚀 ~ file: 9.js:42 ~ input.split ~ n", n, long)
                // TODO: This is also a probably.
                journey[n][z] += s;
                // TODO: This is probably where it is wrong, and we make "Snake" not a "Rop"
                const x = Math.abs(journey[n].x - journey[long].x);
                console.log("DB ... 🚀 ~ file: 9.js:47 ~ input.split ~ journey[n].x - journey[long].x", journey[n].x - journey[long].x, journey[n].y - journey[long].y)
                const y = Math.abs(journey[n].y - journey[long].y);
                // console.log("DB ... 🚀 ~ LOOP", dir, x, y, (+x), (+y))
                if (x === 2 && y === 2) {
                    journey[long].x = journey[n].x - s;
                    journey[long].y = journey[n].y - s;
                } else if (x === 2) {
                    journey[long].x = journey[n].x - s;
                    journey[long].y = journey[n].y;
                } else if (y === 2) {
                    journey[long].x = journey[n].x;
                    journey[long].y = journey[n].y - s;
                }
                // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey", journey)
                if (long === length) {
                    set(map, journey, long);
                }
                console.log("DB ... 🚀 ~ LOOP END", long, i, n, '\n', journey)
                // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey[n].x - journey[long].x", journey[n].x - journey[long].x)
                // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey[n].y - journey[long].y", journey[n].y - journey[long].y)
            }
        }
        console.log("DB ... 🚀 ~ file: 9.js:27 ~ input.split ~ journey", journey);
    });
    map.forEach((a, b, c) => console.log(a, b))
    return map.size;
}

module.exports = {
    day9,
};
