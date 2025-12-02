import crypto from 'crypto';

const input = 'iwrupvqb';

// Function to generate MD5 hash in hexadecimal
function generateMD5Hash(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// Function to find the integer that produces a hash starting with five '0's
function findHashWithFiveZeros(input) {
    let number = 1;
    while (true) {
        const hash = generateMD5Hash(input + number);
        if (hash.startsWith('000000')) {
            return number;
        }
        number++;
    }
}

// Example usage
console.log(findHashWithFiveZeros(input));


