// Experiment 5: Measure execution time using console.time() / console.timeEnd()

const a = 25;
const b = 5;

console.time("Total Execution Time");

console.time("Addition");
console.log(`Addition       : ${a} + ${b} = ${a + b}`);
console.timeEnd("Addition");

console.time("Subtraction");
console.log(`Subtraction    : ${a} - ${b} = ${a - b}`);
console.timeEnd("Subtraction");

console.time("Multiplication");
console.log(`Multiplication : ${a} * ${b} = ${a * b}`);
console.timeEnd("Multiplication");

console.time("Division");
console.log(`Division       : ${a} / ${b} = ${a / b}`);
console.timeEnd("Division");

// A heavier calculation: sum of numbers from 1 to 1,000,000
console.time("Sum 1 to 1,000,000");
let sum = 0;
for (let i = 1; i <= 1_000_000; i++) {
  sum += i;
}
console.log(`Sum of 1 to 1,000,000 = ${sum}`);
console.timeEnd("Sum 1 to 1,000,000");

console.timeEnd("Total Execution Time");
