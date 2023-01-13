const { input6 } = require('./6.input');

function day6(input = input6, noOfChars = 4) {
    let idx = -1
    let loop = true;
    while (loop && idx < input.length) {
        idx += 1;
        loop = Array.from(
            Array(noOfChars),
            (_, index) => input.charAt(idx + index),
        ).some((v, i, a) => {
            const a2 = [...a];
            a2.splice(i, 1);
            return a2.includes(v);
        })
    }
    return idx + noOfChars;
}

function day6p6(input = input6) {
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
    day6,
    day6p6,
};
