import { input } from './day5.input.mjs';

var testInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

/*
const [rules, updates] = testInput.split('\n\n');
/*/
const [rules, updates] = input.split('\n\n');
//*/
const rulesArray = rules.split('\n').map(line => line.split('|').map(Number));
const updatesArray = updates.split('\n').map(line => line.split(',').map(Number));

function isValidUpdate(update, rules) {
    for (const [x, y] of rules) {
        const indexX = update.indexOf(x);
        const indexY = update.indexOf(y);
        if (indexX !== -1 && indexY !== -1 && indexX > indexY) {
            return false;
        }
    }
    return true;
}

const validUpdates = [];
const invalidUpdates = [];

updatesArray.forEach(update => {
    if (isValidUpdate(update, rulesArray)) {
        validUpdates.push(update);
    } else {
        invalidUpdates.push(update);
    }
});

console.log('Valid Updates:', validUpdates);
console.log('Invalid Updates:', invalidUpdates);

const middlePagesSum = validUpdates.reduce((sum, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return sum + update[middleIndex];
}, 0);

console.log('Sum of Middle Pages:', middlePagesSum);

function sortUpdate(update, rules) {
    const orderMap = new Map();
    rules.forEach(([x, y]) => {
        if (!orderMap.has(x)) orderMap.set(x, new Set());
        orderMap.get(x).add(y);
    });

    const sortedUpdate = [...update];
    sortedUpdate.sort((a, b) => {
        if (orderMap.has(a) && orderMap.get(a).has(b)) {
            return -1;
        } else if (orderMap.has(b) && orderMap.get(b).has(a)) {
            return 1;
        } else {
            return 0;
        }
    });

    return sortedUpdate;
}

const sortedInvalidUpdates = invalidUpdates.map(update => sortUpdate(update, rulesArray));
console.log('Sorted Invalid Updates:', sortedInvalidUpdates);

const middlePagesSumInvalid = sortedInvalidUpdates.reduce((sum, update) => {
    const middleIndex = Math.floor(update.length / 2);
    return sum + update[middleIndex];
}, 0);

console.log('Sum of Middle Pages for Invalid Updates:', middlePagesSumInvalid);
