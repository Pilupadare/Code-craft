// Part 1: Type Coercion
console.log('5' + 7);        // '57'
console.log(Boolean(0));     // false
console.log('10' - '2');     // 8
console.log('5' == 5);       // true
console.log('5' === 5);      // false
console.log(Boolean(''));    // false
console.log('5' + true);     // '5true'
console.log('5' * 2);        // 10
console.log(0 == false);     // true
console.log(Boolean(NaN));   // false

// Part 2: Conditional Checks
let num = -3;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

let age = 20;
if (age >= 18) console.log("Eligible to vote");
else console.log("Not eligible to vote");

// Part 3: Loop Exercises
// Factorial
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log("Factorial:", factorial);

// Fibonacci
let a = 0, b = 1;
console.log("Fibonacci:");
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}

// Prime Numbers
console.log("Prime Numbers:");
for (let num = 2; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

// Part 4: Functions
function average(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return (a + b) / 2;
}
console.log("Average:", average(10, 20));

const factorialArrow = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a non-negative integer");
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log("Factorial (arrow):", factorialArrow(5));

const isPrime = function(n) {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer greater than 1");
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log("Is 7 prime?", isPrime(7));

// Part 5: Array Operations
const numbers = [3, 7, 12, 5, 8, 15];

console.log("forEach:");
numbers.forEach(num => console.log(num));

const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

const odds = numbers.filter(num => num % 2 !== 0);
console.log("Odds:", odds);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

const firstAbove10 = numbers.find(num => num > 10);
console.log("First > 10:", firstAbove10);

const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("First even index:", firstEvenIndex);

const hasSeven = numbers.includes(7);
console.log("Includes 7?", hasSeven);

const firstThree = numbers.slice(0, 3);
console.log("First three:", firstThree);

numbers.splice(numbers.length - 1, 1, 99);
console.log("After splice:", numbers);

const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sorted);

const joined = numbers.join(',');
console.log("Joined:", joined);

