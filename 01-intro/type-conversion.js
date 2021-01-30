let val;

val = String(555);
//date to string
val = String(new Date());
//date to string
val = String([1, 2, 3, 4]);

// tostring()
val = (5).toString(); // "5"
val = true.toString(); // "True"

// String to number
val = Number("5"); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number("hello"); // NaN

val = parseInt("100"); // 100
val = parseInt("100.30"); // 100
val = parseFloat("100.30"); // 100.3

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));
