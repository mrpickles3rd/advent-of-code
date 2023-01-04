const { input2 } = require('./2.input');

const map = {
    'A X': 1 + 3,
    'A Y': 2 + 6,
    'A Z': 3 + 0,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 1 + 6,
    'C Y': 2 + 0,
    'C Z': 3 + 3,
};
/*
A X = Rock      = 1
B Y = Paper     = 2
C Z = Scissors  = 3
0, 3, 6,
*/
const map2 = {
    'A X': 3 + 0,
    'B X': 1 + 0,
    'C X': 2 + 0,
    'A Y': 1 + 3,
    'B Y': 2 + 3,
    'C Y': 3 + 3,
    'A Z': 2 + 6,
    'B Z': 3 + 6,
    'C Z': 1 + 6,
};

function day2(input = input2) {
    return input.split('\n').reduce((acc, val) => {
        return acc += map[val];
    }, 0);
}

function day2p2(input = input2) {
    return input.split('\n').reduce((acc, val) => {
        return acc += map2[val];
    }, 0);
}

module.exports = {
    day2,
    day2p2,
    map,
};
