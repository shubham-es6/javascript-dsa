// let prompt = require("prompt-sync")();

// let age = Number(prompt("Enter your age "));

// if (age >= 18) {
//   console.log("Valid voter");
// } else {
//   console.log("Invalid voter");
// }

// let prompt = require("prompt-sync")();

// let marks = Number(prompt("Enter your marks "));

// if (marks >= 86 && marks <= 95) {
//   console.log("Excellent");
// } else if (marks >= 81 && marks <= 85) {
//   console.log("Very Good");
// } else if (marks >= 71 && marks <= 80) {
//   console.log("Good");
// } else {
//   console.log("Fair");
// }

// Q 10. Accept two numbers and print the greatest between them

// let prompt = require("prompt-sync")();

// let numOne = Number(prompt("Enter your number: "));
// let numTwo = Number(prompt("Enter your number: "));

// if (numOne > numTwo) {
//   console.log("numOne is big");
// } else if (numTwo > numOne) {
//   console.log("numTwo is big");
// } else {
//   console.log("Both numbers are equal");
// }

// Q11. Accept an integer and check whether it is an even number or odd

// let prompt = require("prompt-sync")();

// let numberToCheck = Number(prompt("Enter a number: "));

// if (numberToCheck % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// Q12. Accept three numbers and print the greatest among the

// let prompt = require("prompt-sync")();

// let numOne = Number(prompt("Enter your number: "));
// let numTwo = Number(prompt("Enter your number: "));
// let numThree = Number(prompt("Enter your number: "));

// if (numOne > numTwo && numOne > numThree) {
//   console.log("numOne is greatest");
// } else if (numTwo > numOne && numTwo > numThree ) {
//   console.log("numTwo is greatest");
// } else {
//   console.log("numThree is greatest");
// }

// Q13. Accept a year and check if it a leap year or not (google to find out what's a leap year)

// let prompt = require("prompt-sync")();

// let year = Number(prompt("Enter year : "));

// if (year % 400 === 0) {
//   console.log("Leap year");
// } else if (year % 4 === 0 && year % 100 !== 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// Q14. Shop discount - Description on Graphic

// let prompt = require("prompt-sync")();

// let amount = Number(prompt("Enter amount: "));

// let payableAmount = 0;

// if (amount > 0 && amount <= 5000) {
//   payableAmount = amount;
// } else if (amount > 5000 && amount <= 7000) {
//   payableAmount = amount - (5 * amount) / 100;
// } else if (amount > 7000 && amount <= 9000) {
//   payableAmount = amount - (10 * amount) / 100;
// } else {
//   payableAmount = amount - (20 * amount) / 100;
// }

// console.log("payable amount " + payableAmount);

// Q14. Shop discount - Description on Graphic

// let prompt = require("prompt-sync")();

// let amount = Number(prompt("Enter amount: "));

// let dis = 0;

// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else {
//   dis = 20;
// }

// console.log("payable amount " + (amount - (dis * amount) / 100));

// Q14. Shop discount - Description on Graphic

// let prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter amount: "));

// if (amount <= 5000) {
//   dis = 0;
// } else if (amount <= 7000) {
//   dis = 5;
// } else if (amount <= 9000) {
//   dis = 10;
// } else {
//   dis = 20;
// }

// let payableAmount = amount - (dis * amount) / 100;

// console.log("Payable amount:", payableAmount);

// Q15. Bijli Bill - Description on Graphic

// let prompt = require("prompt-sync")();

// let unit = Number(prompt("Enter unit"));

// if (unit <= 0) {
//   console.log("Please enter a valid unit");
// } else if (unit <= 100) console.log(unit * 4.2);
// else if (unit <= 200) {
//   console.log(100 * 4.2 + (unit - 100) * 6);
// } else if (unit <= 400) {
//   console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
// } else {
//   console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
// }

// Q15. Bijli Bill - Description on Graphic

// let prompt = require("prompt-sync")();

// let unit = Number(prompt("Enter unit : "));

// if (unit <= 0) {
//   console.log("Please enter a valid unit");
// } else if (unit <= 100) {
//   console.log(100 * 4.2 + (unit - 100) * 6);
// } else if (unit <= 200) {
//   console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
// } else {
//   console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
// }

// Q16. Counting number of days in given month of a year

// let prompt = require("prompt-sync")();

// let month = Number(prompt("Enter a month : "));
// let year = Number(prompt("Enter a year : "));
// let days = 0;

// if (month === 2) {
//   if (year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)) {
//     days = 29;
//   } else days = 28;
// } else if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// )
//   days = 31;
// else days = 30;

// console.log(days);
