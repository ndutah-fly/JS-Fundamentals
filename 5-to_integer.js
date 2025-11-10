const arg = process.argv[2];
const num = Number(arg);

console.log(Number.isInteger(num) ? `My number: ${num}` : 'Not a number');