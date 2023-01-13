const { input10 } = require('./10.input');

function noop(params) {}
function addx(params) {}

const run = { noop, addx };

function day10(input = input10) {
    let tick = 0;
    let reg = 1;
    const ping = {
        20: 0,
        60: 0,
        100: 0,
        140: 0,
        180: 0,
        220: 0,
    };

    input.split('\n').forEach((v) => {
        const [cmd, val] = v.split(' ');
        if (cmd === 'addx') {
            for (let i = 0; i < 2; i += 1) {
                tick += 1;
                if (ping[tick] !== undefined) {
                    // console.log("DB ... 🚀 ~ file: 10.js:27 ~ input.split ~ ticks * reg", tick, reg, tick * reg)
                    ping[tick] = tick * reg;
                }
                if (i === 1) {
                    reg += parseInt(val, 10);
                }
            }
        } else {
            tick += 1;
            if (ping[tick] !== undefined) {
                // console.log("DB ... 🚀 ~ file: 10.js:27 ~ input.split ~ ticks * reg", tick, reg, tick * reg)
                ping[tick] = tick * reg;
            }
        }
    });

    return Object.values(ping).reduce((a, v) => a += v, 0);
}

module.exports = {
    day10,
};
