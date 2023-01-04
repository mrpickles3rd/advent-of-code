const { input1 } = require('./1.input');

function split(input = input1) {
    return input.split('\n\n')
}

function calc(input = []) {
    return split(input).map((val) => {
        return val.split('\n').reduce((acc, int = '0') => {
            return acc += parseInt(int, 10);
        }, 0)
    })
}

function day1(input = input1, elves = 1) {
    const calories = calc(input).sort((a, b) => {
        return a < b ? 1 : a > b ? -1 : 0;
    });

    let ret = 0;
    for (let i = 0; i < elves; i += 1) {
        ret += calories[i];
    };

    return ret;
}

module.exports = {
    split,
    calc,
    day1,
};
