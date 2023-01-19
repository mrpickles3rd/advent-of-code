const { input9 } = require('./9.input');

const move = {
    'U': { z: 'y', s: 1},
    'D': { z: 'y', s: -1},
    'L': { z: 'x', s: -1},
    'R': { z: 'x', s: 1},
};

function set(m, { tail }) {
    const val = m.get(JSON.stringify(tail)) || 0;
    m.set(JSON.stringify(tail), val + 1);
}

function day9(input = input9) {
    // console.log("DB ... 🚀 ~ file: 9.js:16 ~ input\n", input)
    const map = new Map();
    const journey = {
        head: { x: 0, y: 0 },
        tail: { x: 0, y: 0 },
    };
    set(map, journey);

    input.split('\n').forEach(v => {
        const [dir, times] = v.split(' ');
        // console.log("DB ... 🚀 ~ file: 9.js:25 ~ input.split ~ dir, times", dir, times)
        const { z, s } = move[dir];
        // console.log("DB ... 🚀 ~ ROW", journey)
        for (var i = 0; i < times; i += 1) {
            journey.head[z] += s;
            const x = Math.abs(journey.head.x - journey.tail.x);
            const y = Math.abs(journey.head.y - journey.tail.y);
            // console.log("DB ... 🚀 ~ LOOP", dir, x, y, (+x), (+y))
            if (x === 2) {
                journey.tail.x = journey.head.x - s;
                journey.tail.y = journey.head.y;
            }
            if (y === 2) {
                journey.tail.x = journey.head.x;
                journey.tail.y = journey.head.y - s;
            }
            // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey", journey)
            set(map, journey);
            // console.log("DB ... 🚀 ~ LOOP END", journey)
            // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey.head.x - journey.tail.x", journey.head.x - journey.tail.x)
            // console.log("DB ... 🚀 ~ file: 9.js:29 ~ input.split ~ journey.head.y - journey.tail.y", journey.head.y - journey.tail.y)
        }
        // console.log("DB ... 🚀 ~ file: 9.js:27 ~ input.split ~ journey", journey);
    });
    return map.size;
}

module.exports = {
    day9,
};
