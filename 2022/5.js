const { input5, stack5 } = require('./5.input');

function day5(input = input5, s = stack5, CrateMover9001 = false) {
    const stack = JSON.parse(JSON.stringify(s));
    input.split('\n').forEach((val = 'OPPS') => {
        const [_, move, __, from, ___, to] = val.split(' ');
        const boxesToMove = stack[from].slice(stack[from].length - move, stack[from].length);

        const boxes = CrateMover9001 ? boxesToMove.reverse() : boxesToMove;
        stack[to] = stack[to].concat([...boxes.reverse()]);

        const boxesToKeep = stack[from].slice(0, stack[from].length - move);
        stack[from] = [...boxesToKeep];
    });

    return Object.entries(stack).reduce((acc, [_, val]) => {
        return acc += val[val.length - 1];
    }, '');
}

function day5p5(input = input5, stack = stack5) {
    return input.split('\n').reduce((acc, val = '') => {
        const [a1, a2, b1, b2] = val.replace(/-|,/g, '=').split('=');

        if (parseInt(a1, 10) <= parseInt(b1, 10) && parseInt(a2, 10) >= parseInt(b2, 10)) {
            return acc += 1;
        } else if (parseInt(a1, 10) >= parseInt(b1, 10) && parseInt(a2, 10) <= parseInt(b2, 10)) {
            return acc += 1;
        } else if (
            parseInt(a2, 10) >= parseInt(b1, 10)
            && parseInt(a1, 10) <= parseInt(b2, 10)
        ) {
            return acc += 1;
        }
        return acc;
    }, 0);
}

module.exports = {
    day5,
    day5p5,
};
