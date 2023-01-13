const get = require('lodash/get');
const set = require('lodash/set');

const { input7 } = require('./7.input');

const BASE_OBJ = { size: 0 };

function dir(fileSystem, pwd, dir) {
    const thisDir = get(fileSystem, [...pwd, dir]);
    if (thisDir === undefined) {
        set(fileSystem, [...pwd, dir], { ...BASE_OBJ });
        return;
    }
}

function cd(fileSystem, pwd, arg, sizes) {
    switch (arg) {
        case '/':
            // Root
            break;
        case '..':
            const dir = pwd.pop();
            const s1 = get(fileSystem, [...pwd, 'size'], 0);
            const s2 = get(fileSystem, [...pwd, dir, 'size'], 0);

            set(fileSystem, [...pwd, 'size'], s1 + s2);
            sizes.set([...pwd].join('.'), get(fileSystem, [...pwd, 'size']));

            break;
        default:
            pwd.push(arg);

            break;
    }
}

function ls(fileSystem, pwd) {}

const run = { cd, ls };

function main(input) {
    const sizes = new Map();
    const pwd = ['/'];
    const fileSystem = { '/': { ...BASE_OBJ } };

    input.split('\n').forEach((val, idx) => {
        if (val.indexOf('$') === 0) {
            const [_, cmd, arg] = val.split(' ');
            run[cmd](fileSystem, pwd, arg, sizes);
            return;
        }

        const [first, second] = val.split(' ');
        if (first === 'dir') {
            dir(fileSystem, pwd, second);
            return;
        }

        const size = parseInt(first, 10);
        if (isNaN(size)) {
            throw `OPPS! Bad Things Happened :(
"first" is not a number
typeof first is ${typeof first} - "${first}" - ${idx}
???${val}???`
        }

        set(
            fileSystem,
            [...pwd, 'size'],
            get(fileSystem, [...pwd, 'size']) + size,
        );

        sizes.set([...pwd].join('.'), get(fileSystem, [...pwd, 'size']))
    }, 0);

    while (pwd.length > 0) {
        run.cd(fileSystem, pwd, '..', sizes);
    }

    return sizes;
}

function day7(input = input7) {
    const sizes = main(input);

    let ret = 0;
    for ([file, value] of sizes) {
        if (value <= 100000) {
            ret += value;
        }
    }

    return ret;
}
/*
let disk = 70_000_000;
let needed = 30_000_000;
let root = sizes.get(&PathBuf::from("/")).unwrap();
let available = disk - root;

sizes
    .into_values()
    .filter(|size| available + size >= needed)
*/
function day7p7(input = input7) {
    const sizes = main(input);
    const disk = 70000000;
    const needed = 30000000;
    const root = sizes.get('/');
    const available = disk - root;
    const files = [];
    const WTF = [];

    for ([key, val] of sizes) {
        WTF.push([key, val])
        if (available + val >= needed) {
            // console.log("DB ... 🚀 ~ file: 7.js:105 ~ day7p7 ~ key, val", key, val)
            files.push([key, val]);
        }
    };

        const [_, ret] = files.sort(
        ([_1, a], [_2, b]) => a>b ? -1 : a<b ? 1 : 0,
    ).pop();

    return ret;
}

module.exports = {
    day7,
    day7p7,
};
