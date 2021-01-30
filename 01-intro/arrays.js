// Create some arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = new Array(4, 5, 6, 7, 8, 9);

const fruit = ["Apple", "Orange", "zebra", "Pear"];

const mixed = [22, "hell0", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length; // 5

// Check if its an array
val = Array.isArray(numbers); // true
// useful for working with the DOM

// Get a value from an array
val = numbers[3]; // 4

// Insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(4);

// 1.a Mutating arrays
numbers.push(250); //adds 250 to the end
numbers.unshift(120); // adds to the front
numbers.pop(); // removes from the end
numbers.shift(); // removes from the front

// 1.b Splice values
numbers.splice(1, 1); // removes #1 value
numbers.splice(1, 3); // removes #1 THROUGH #3 value

// 1.c Reverse
numbers.reverse();

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); // alphabetical sort
numbers.sort(); // sorts by first number

numbers.sort(function (x, y) {
  return x - y;
}); // sorts by number order using a callback function

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50); //finds the first number under 50

console.log(numbers);
console.log(val);
