// let prompt = require("prompt-sync")();

// let day = Number(prompt("Enter day number: "));

// switch (day) {
//   case 1: {
//     console.log("Monday");
//     break;
//   }
//   case 2: {
//     console.log("Tuesday");
//     break;
//   }
//   case 3: {
//     console.log("Wednesday");
//     break;
//   }
//   case 4: {
//     console.log("Thursday");
//     break;
//   }
//   default: {
//     console.log("Invalid number");
//   }
// }

// let prompt = require("prompt-sync")();

// let s = prompt("Enter a string: ");

// let consonent = 0;
// vowel = 0;

// for (let i = 0; i < s.length; i++) {
//   let ch = s.charAt(i);

//   switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       vowel++;
//       break;

//     default:
//       consonent++;
//   }
// }

// console.log("consonent " + consonent);
// console.log("vowel " + vowel);

let prompt = require("prompt-sync")();

console.log("Enter 1 for area of rectangle");
console.log("Enter 1 for area of sqaure");
console.log("Enter 1 for area of triangle");

let n = Number(prompt());

switch (n) {
  case 1: {
    let len = Number(prompt("Enter length"));
    let breadth = Number(prompt("Enter breadth"));
    console.log(len * breadth);
    break;
  }
  case 2: {
    let side = Number(prompt("Enter side"));
    console.log(side * side);
    break;
  }

  case 3: {
    let height = Number(prompt("Enter height"));
    let base = Number(prompt("Enter base"));
    console.log((height * base) / 2);
    break;
  }
  default:
    console.log("Invalid number");
}
