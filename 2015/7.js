const { input7 } = require('./7.input');

function set([val, _, key], ret) {
    if (key === 'a') {
        console.log("DB ... 🚀 ~ file: 7.js:4 ~ set ~ key, val, ret[val], isNaN(parseInt(val, 10))", key, val, ret[val], isNaN(parseInt(val, 10)))
    }
    if (ret[key] === undefined) {
        ret[key] = 0;
    }
    ret[key] += isNaN(parseInt(val, 10)) ? ret[val] === undefined ? 0 : ret[val] : parseInt(val, 10);
}
function AND([a, _1, b, _2, key], ret) {
    set([ret[a] & ret[b], null, key], ret);
}
function OR([a, _1, b, _2, key], ret) {
    set([ret[a] | ret[b], null, key], ret);
}
function LSHIFT([a, _1, b, _2, key], ret) {
    set([ret[a] << parseInt(b, 10), null, key], ret);
}
function RSHIFT([a, _1, b, _2, key], ret) {
    set([ret[a] >> parseInt(b, 10), null, key], ret);
}
function NOT([_1, a, _2, key], ret) {
    // return 65535 - a;
    const prefixArr = Array(16).fill('0');
    const binaryArr = [...(ret[a] >>> 0).toString(2)];
    const binary_16_bit = prefixArr.slice(0, prefixArr.length - binaryArr.length).concat(binaryArr).map(
        v => v === '0' ? '1' : '0',
    ).join('');
    // console.log('??? ', a, parseInt(binary_16_bit, 2));

    set([parseInt(binary_16_bit, 2), null, key], ret);
}

const run = {
    set,
    AND,
    OR,
    LSHIFT,
    RSHIFT,
    NOT,
};

function day7(input = input7) {
    const ret = { a: 0 };
    input.split('\n').forEach((cmd) => {
        console.log("DB ... 🚀 ~ file: 7.js:66 ~ day7 ~ input", cmd.match(/^(?:([a-z\d]+) )?(?:([A-Z]+) )?([a-z\d]+) -> ([a-z]+)$/))
        const args = cmd.split(' ');
        if (args.length === 3) {
            set(args, ret);
            return;
        }

        if (args.length === 4) {
            run.NOT(args, ret);
            return;
        }

        run[args[1]](args, ret);
        return;
    })

    // return ret.a;
    return ret;
}

module.exports = {
    day7,
};
