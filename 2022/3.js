const { input3 } = require('./3.input');

function day3(input = input3) {
    return input.split('\n').reduce((acc, val = '') => {
        const fv = [
            ...val.slice(0, val.length / 2)
        ];
        const lv = [
            ...val.slice(val.length / 2, val.length)
        ];
        let loop = true;
        let idx = -1;
        while(loop && idx <= fv.length){
            idx += 1;
            // console.log("DB ... 🚀 ~ file: 3.js:15 ~ returninput.split ~ idx", idx, fv[idx], lv[idx])
            if (fv.includes(lv[idx])) {
                const code = lv[idx].charCodeAt();
                const offSet = code < 91 ? 38 : 96;
                loop = false;
                // acc.push(lv[idx]);
                // acc.push(code - offSet);
                acc += code - offSet
            }
        }

        return acc;
        // return acc += map[val];
    // }, []);
    }, 0);
}

function day3p3(input = input3) {
    return input.split('\n').reduce((acc, val = '', idx = 0, arr = []) => {
        if (idx % 3 === 0) {
            let loop = true;
            let i = -1;
            const fv = [...val];
            while (loop && i <= fv.length) {
                i += 1;
                if (arr[idx + 1].includes(fv[i]) && arr[idx + 2].includes(fv[i])) {
                    const offSet = fv[i].charCodeAt() < 91 ? 38 : 96;
                    acc += fv[i].charCodeAt() - offSet;
                    loop = false;
                }
            }
        }
        return acc;
    }, 0);
}

module.exports = {
    day3,
    day3p3,
};
