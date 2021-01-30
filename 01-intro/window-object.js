// Window methods / objects / properties

// Alert

// alert("Hello world");

// // Prompt

// prompt("What is your name?");

// // Confirm
// // Used often when deleting
// if (confirm("Are you sure")) {
//   console.log("Yes");
// } else {
//   console.log("no");
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll point
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location; // Gives server info
val = window.location.hostname; // hostname in the array that was printed
val = window.location.port;
val = window.location.href;
val = window.location.search;

//  Redirect
// window.location.href = "http://google.com";
//Reload
// window.location.reload();

// History
// window.history.go(); // goes to pages you visited

val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;

console.log(val);
