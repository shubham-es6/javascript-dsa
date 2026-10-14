// Q1 Print natural number up to n.

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// Q2 Reverse for loop. print n to 1

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

// Q3 Take a number as input and print its table
//  5 * 1 = 5
//  5 * 10 = ... up to 10 terms

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${i * n}`);
// }

// Q4 Sum up to n terms

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// Q5 Factorial of a number

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum = sum * i;
// }

// console.log(sum);

// Q6 Print the sum of all even & odd numbers in a range separately

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number"));

// let evenSum = 0;
// let oddSum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     evenSum = evenSum + i;
//   } else {
//     oddSum = oddSum + i;
//   }
// }

// console.log("Even sum", evenSum);
// console.log("Odd sum", oddSum);

// Q7 Print all the factors of a number

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// Q8 Print the sum of all even & odd numbers in a range separately

// let prompt = require("prompt-sync")();

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// let evenSum = 0;
// let oddSum = 0;

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     evenSum = evenSum + i;
//   } else {
//     oddSum = oddSum + i;
//   }
// }

// console.log("evenSum =" + evenSum);
// console.log("oddSum =" + oddSum);

// Q9 Print all factors of a number

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// ------------------------------------------------------

// Q10 Check if the number is Prime or not

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let count = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) count++;
// }

// if (count === 2) console.log("Prime Number");

// -----------------------------------------------------

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// if (n <= 1) console.log("Not prime");
// else {
//   let count = 0;

//   for (let i = 0; i <= n / 2; i++) {
//     if (n % i === 0) count++;
//   }

//   if (count === 0) console.log("Prime Number");
//   else console.log("Not prime number");
// }

// -------------------------------------------------------------

let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

if (n <= 1) console.log("not prime");
else if (n === 2) console.log("prime");
else if (n % 2 === 0) console.log("not prime");
else {
  let isPrime = true;
  for (let i = 0; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? "Prime" : "Not Prime");
}
