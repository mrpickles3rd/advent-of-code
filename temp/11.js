const { input11 } = require('./11.input');

function day11(input = input11) {
    console.log("DB ... 🚀 ~ file: 3.js:4 ~ day3 ~ input", input)
    let ret = 0;
    // Part 2
    let check = 0
    return input.split('\n').reduce((acc, val, idx, arr) => {
        // console.log("DB ... 🚀 ~ file: 3.js:8 ~ returninput.split ~ acc", acc)
        const a = [];
        for (let i = 0; i < arr.length; i++) {
            a.push(...val);
        }
        acc.push(a);
        return acc;
    }, []).reduce((acc, val, idx, arr) => {
        console.log("DB ... 🚀 ~ file: 3.js:18 ~ returninput.split ~ val[(idx * 3) - 1]", idx, idx * 3, val[((idx * 3))])
        acc[0] += val[(idx * 1)] === '#' ? 1 : 0;
        acc[1] += val[(idx * 3)] === '#' ? 1 : 0;
        acc[2] += val[(idx * 5)] === '#' ? 1 : 0;
        acc[3] += val[(idx * 7)] === '#' ? 1 : 0;
        acc[4] += idx % 2 === 1 ? 0 : val[idx] === '#' ? 1 : 0;
        console.log("DB ... 🚀 ~ file: 3.js:23 ~ returninput.split ~ acc[4] += idx % 2 === 1 ? 0 : val[idx] === '#' ? 1 : 0;", idx % 2, val[idx])
        return acc;
    }, [0, 0, 0, 0, 0]).reduce(
        (acc, val, idx, arr) => {
            console.log("DB ... 🚀 ~ file: 3.js:30 ~ day3 ~ arr", arr)
            return acc *= val;
        },
        1,
    );
    return ret
}

module.exports = {
    day11,
};
