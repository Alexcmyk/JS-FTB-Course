// Built in constructors

// Strings
const name1 = "jeff";
const name2 = new String("jeff");

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name2);

if (name1 === "jeff") {
  console.log("YES"); //logs yes
} else {
  console.log("NO");
}

if (name2 === "jeff") {
  console.log("YES");
} else {
  console.log("NO"); //logs no bc its an object and not a tring. if == then it would log yes
}

// Numbers
const num1 = 5;
const num2 = new Number(5); // same as above

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); // same as above

// Functions
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

// console.log(getSum2(1, 1));

// Object
const john1 = { name: "john" };
const john2 = new Object({ name: "john" });

// console.log(john2);

// Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array([1, 2, 3]);

// Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp("\\w+"); // needs escaping when doing it this way

console.log(reg2);
