const num1 = 100;
const num2 = 50;
let val;

// Simple Math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math object
val = Math.PI; // 3.141592653589793
val = Math.E; // 2.71828182845904593
val = Math.round(2.8); // 3
val = Math.floor(2.8); // 2
val = Math.ceil(2.1); // 3
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, -3); // -3
val = Math.max(2, 33, 4, 1, 55, 6, -3); // 55
val = Math.random(); // random number between 0 - 1 but not including 1
val = Math.random() * 20; // random number between 0 - 19
val = Math.random() * 20 + 1; // random number between 0 - 20
val = Math.floor(Math.random() * 20 + 1); // random number between 0 - 20 no decimal point

console.log(val);
