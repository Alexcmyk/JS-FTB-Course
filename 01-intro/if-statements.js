// If statements

const id = 100;

// // Equal to
// if (id == 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Not operator
// if (id != 101) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Strict test
// if (id === 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Strict test
// if (id !== 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Testing is there is no "ID" at all. Commented out
// if (typeof id !== "undefined") {
//   console.log(`This id is ${id}`);
// } else {
//   console.log("No id");
// }

// Greater or less than

// if (id >= 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

const color = "brown";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color isnt red or blue");
// }

// Logical operators

const personName = "steve";
const age = 15;

// && compares two instances for being true. || is an or operator
if (age > 0 && age < 12) {
  console.log(`${personName} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${personName} is a teenager`);
} else {
  console.log(`${personName} is an adult`);
}

// Or operator
if (age < 13 || age > 70) {
  console.log(`${personName} can not run in the race`);
} else {
  console.log(`${personName} is registered to race`);
}

// Ternary operator
console.log(id === 100 ? "correct" : "Incorrect");
//          Condition ? if true : if false
