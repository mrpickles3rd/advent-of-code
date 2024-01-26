const { input11 } = require('./11.input');

const run = {
    '+': (a, b) => BigInt(a) + BigInt(b),
    '-': (a, b) => BigInt(a) - BigInt(b),
    '*': (a, b) => BigInt(a) * BigInt(b),
    '/': (a, b) => BigInt(a) / BigInt(b),
    divisibleBy: (a, b) => BigInt(a) % BigInt(b) === 0n,
    dividedByN: (v, dev) => BigInt(v) / BigInt(dev),
};

function day11(input = input11, rounds = 20, div = 3) {
    console.log("DB ... 🚀 ~ file: 3.js:4 ~ day3 ~ input", input);
    let NEW = 0;
    let OLD = 0;
    const BASS_MUNKY = {
        items: [],
        divisibleBy: 0,
        ifTrue: 0,
        ifFalse: 0,
    };
    let ret = [];

    input
        .replace(/Monkey [0-9]:/g, '-=-=-=-=-=-=-=-')
        .split('-=-=-=-=-=-=-=-')
        .map(l => l.trim())
        .filter(Boolean)
        .forEach((m) => {
            const [i, o, t, ifT, ifF] = m.split('\n').map(v => v.trim());
            const items = i.split(': ').pop().split(', ').map(v => BigInt(parseInt(v, 10)));
            const [n, _2, old, cmd, val] = o.split(': ').pop().split(' ');
            const divisibleBy = BigInt(parseInt(t.split(' ').pop(), 10));
            const ifTrue = BigInt(parseInt(ifT.split(' ').pop(), 10));
            const ifFalse = BigInt(parseInt(ifF.split(' ').pop(), 10));
            ret.push({
                inspection: 0,
                items,
                divisibleBy,
                ifTrue,
                ifFalse,
                operation: {
                    val: parseInt(val),
                    cmd,
                }
            });
            // return m;
        });

    try {
    // for (let count = 0; count < 20; count++) {
    for (let count = 0; count < rounds; count++) {
        ret.forEach(({
            // inspection,
            items,
            divisibleBy,
            ifTrue,
            ifFalse,
            operation: {
                // new: n,
                val,
                // old,
                cmd,
            },
        }, IDX) => {
            [...items].forEach((item, idx) => {
                ret[IDX].inspection += 1;
                // const worryLevel = item;
                const worryLevel = run.dividedByN(
                    run[cmd](
                        item,
                        isNaN(val) ? item : BigInt(val),
                    ),
                    div,
                );
                // console.log("DB ... 🚀 ~ file: 11.js:75 ~ [...items].map ~ worryLevel", worryLevel)
                // console.log("DB ... 🚀 ~ file: 11.js:73 ~ [...items].map ~ worryLevel", worryLevel)
                const munkey = run.divisibleBy(worryLevel, divisibleBy) ? ifTrue : ifFalse;
                // console.log("DB ... 🚀 ~ file: 11.js:76 ~ [...items].map ~ munkey", munkey)
                console.log("DB ... 🚀 ~ file: 11.js:80 ~ [...items].forEach ~ worryLevel", worryLevel)
                if (worryLevel === Infinity) {
                    throw new Error(`OPPS! cmd "${cmd}", item "${item}", val "${val}"`);
                }
                ret[munkey].items.push(worryLevel);
                ret[IDX].items.shift() // .splice(idx, 1);
            }); // .filter(v => v !== null);
            // console.log("DB ... 🚀 ~ file: 11.js:79 ~ [...items].map ~ ret[IDX]", ret[IDX])
        });
        // console.log("DB ... 🚀 ~ file: 11.js:82 ~ day11 ~ ret", ret)
    }

    console.log("DB ... 🚀 ~ file: 11.js:87 ~ ret", ret)
    ret.sort(({ inspection: a }, { inspection: b }) => a > b ? -1 : a < b ? 1 : 0)
    return ret[0].inspection * ret[1].inspection;
    } catch(e) {
        console.log("DB ... 🚀 ~ file: 11.js:96 ~ e", e)
    }
}

module.exports = {
    day11,
};
