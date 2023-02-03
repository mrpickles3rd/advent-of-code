const { input3 } = require('./3.input');

function day3(input = input3) {
    function spiral(length) {
        var upper = 0,
            lower = length - 1,
            left = 0,
            right = length - 1,
            i = upper,
            j = left,
            result = Array.from({ length }, _ => []),
            value = length * length;

        while (true) {
            if (left++ > right) break;

            for (; i < lower; i++) result[i][j] = value--;
            if (lower-- < upper) break;

            for (; j < right; j++) result[i][j] = value--;
            if (right-- < left) break;

            for (; i > upper; i--) result[i][j] = value--;
            if (upper++ > lower) break;

            for (; j > left; j--) result[i][j] = value--;
        }

        result[i][j] = value--;
        return result;
    }

    let i = 0;
    let ret = '';
    let loop = true;
    while (++i < input && loop) {
        ret = spiral(i).map(
            a => a.join(' '),
        ).join('\n');

        // console.log("DB ... 🚀 ~ file: 3.js:46 ~ day3 ~ ret.indexOf(input.toString())", ret.indexOf(input.toString()))
        loop = ret.indexOf(input.toString()) === -1
    }

    // console.log("DB ... 🚀 ~ file: 3.js:36 ~ day3 ~ ret", ret)
    asd = {
        this: { x: 0, y: 0 },
        that: { x: 0, y: 0 },
    };

    const ret2 = ret
        .split('\n')
        .map(v => v.split(' ').filter(Boolean))
        .map((l, idx1) => {
            // console.log("DB ... 🚀 ~ file: 3.js:59 ~ .map ~ l", typeof l)
            if (l.includes(`${1}`)) {
                asd.this.x = l.indexOf(`${1}`) - 1;
                asd.this.y = idx1;
            }
            if (l.includes(`${input}`)) {
                asd.that.x = l.indexOf(`${input}`) - 1;
                asd.that.y = idx1;
            }
            return l;
        },
    );

    // console.log("DB ... 🚀 ~ file: 3.js:66 ~ ret2.forEach ~ ret2", ret2)
    // console.log("DB ... 🚀 ~ file: 3.js:75 ~ day3 ~ asd", asd)
    // console.log("DB ... 🚀 ~ file: 3.js:75 ~ day3 ~ Math.abs(111)", Math.abs(asd.this.x - asd.that.x))
    // console.log("DB ... 🚀 ~ file: 3.js:75 ~ day3 ~ Math.abs(222)", Math.abs(asd.this.y - asd.that.y))
    // console.log("DB ... 🚀 ~ file: 3.js:75 ~ day3 ~ Math.abs(333)", Math.abs(asd.this.x - asd.that.x) + Math.abs(asd.this.y - asd.that.y))

    return Math.abs(asd.this.x - asd.that.x) + Math.abs(asd.this.y - asd.that.y);
}

module.exports = {
    day3,
};
