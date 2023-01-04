const { input4 } = require('./4.input');

function day4(input = input4) {
    return input.split('\n').reduce((acc, val = '') => {
        const [a1, a2, b1, b2] = val.replace(/-|,/g, '=').split('=');
        if (parseInt(a1, 10) <= parseInt(b1, 10) && parseInt(a2, 10) >= parseInt(b2, 10)) {
            return acc += 1;
        } else if (parseInt(a1, 10) >= parseInt(b1, 10) && parseInt(a2, 10) <= parseInt(b2, 10)) {
            return acc += 1;
        }
        return acc;
    }, 0);
}

function day4p4(input = input4) {
    return input.split('\n').reduce((acc, val = '') => {
        const [a1, a2, b1, b2] = val.replace(/-|,/g, '=').split('=');
        // console.log("DB ... 🚀 ~ file: 4.js:18 ~ returninput.split ~ a1, a2, b1, b2", a1, a2, b1, b2)
        if (parseInt(a1, 10) <= parseInt(b1, 10) && parseInt(a2, 10) >= parseInt(b2, 10)) {
            return acc += 1;
        } else if (parseInt(a1, 10) >= parseInt(b1, 10) && parseInt(a2, 10) <= parseInt(b2, 10)) {
            return acc += 1;
        } else if (
            parseInt(a2, 10) >= parseInt(b1, 10)
            && parseInt(a1, 10) <= parseInt(b2, 10)
        ) {
            return acc += 1;
        } /* else if (
            parseInt(a1, 10) >= parseInt(b1, 10)
            && parseInt(a2, 10) <= parseInt(b2, 10)
        ) {
            return acc += 1;
        } */
        return acc;
    }, 0);
}

module.exports = {
    day4,
    day4p4,
};
