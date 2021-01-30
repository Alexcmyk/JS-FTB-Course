// Global Scope
var a = 1; // var scoping can mess things up
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function scope:", a, b, c);
// }

if (true) {
  var a = 4; // a variable is changed
  let b = 5; // not changed
  const c = 6; // not changed
  console.log("If scope:", a, b, c);
}

// test();
console.log("Global scope:", a, b, c);
