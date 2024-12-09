import { input } from "./day7.input.mjs";

var testInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

function evaluateEquation(testValue, numbers) {
    const operators = ['+', '*', '||'];
    const n = numbers.length;
    const stack = [[numbers[0], 1]]; // [current value, index]

    while (stack.length) {
        const [current, index] = stack.pop();
        if (index === n) {
            if (current === testValue) return true;
            continue;
        }
        for (const op of operators) {
            let nextValue;
            if (op === '+') {
                nextValue = current + numbers[index];
            } else if (op === '*') {
                nextValue = current * numbers[index];
            } else if (op === '||') {
                nextValue = parseInt('' + current + numbers[index]);
            }
            stack.push([nextValue, index + 1]);
        }
    }
    return false;
}

function sumOfValidTestValues(input) {
    const lines = input.trim().split('\n');
    let sum = 0;

    for (const line of lines) {
        const [testValue, numbers] = line.split(': ');
        const testValueNum = parseInt(testValue);
        const numberArray = numbers.split(' ').map(Number);

        if (evaluateEquation(testValueNum, numberArray)) {
            sum += testValueNum;
        }
    }

    return sum;
}

console.log(sumOfValidTestValues(testInput));
console.log(sumOfValidTestValues(input));
