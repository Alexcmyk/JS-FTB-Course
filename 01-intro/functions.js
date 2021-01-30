// FUNCTION DECLARATIONS
// defining the defauts if nothing is passed into the function
function greet(firstName = "John", lastName = "Smith") {
  // console.log("Hello");
  return `Hello ${firstName} ${lastName}`; // Normally you would return the function
}

console.log(greet("Alex", "Kirts")); // wrap the function in a log if you want to print it to the console

// FUNCTION EXPRESSIONS
const square = function (x = 3) {
  // ^ anoymous function
  return x * x;
};

console.log(square()); // In this situation bc the default is three it prints 9 to the console

// IMMEADIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//Must be inside of an expression '()'
(function () {
  console.log("IIFE ran");
})(); // need to have "()" at the end

(function (n) {
  console.log(`Hello ${n}`);
})("Alex"); // need to have "()" at the end - passed in a name
// More infor about IIFEs via: https://www.youtube.com/watch?v=v0QTqHXiVNw&t=339s Dev Ed. IIFEs are good for privacy concerns bc youre not creating any global variables.

// PROPERTY METHODS - I dont fully understand these. Edit I somewhat understand these
// Creating a object within the const "todo". The key is "add" and "edit". Then you can call the function thats stored in the object like below.
const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (id) {
    // passed in "22" from below. ID can be named anything you want
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("delete todo.");
};

todo.add();
todo.edit(22);
todo.delete(); // adds "delete" key to the object and assigns it a function.
