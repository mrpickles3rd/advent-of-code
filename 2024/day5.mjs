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

const [rules, updates] = testInput.split('\n\n');
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

const validUpdates = updatesArray.filter(update => isValidUpdate(update, rulesArray));

console.log('Valid Updates:', validUpdates);
