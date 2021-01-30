let val;

val = document; // gives us entire document. Including the DOCTYPE and everything inside
val = document.all; // Depreciated... gives you an collection of all the document
val = document.all[0]; // Depreciated... gives "html element". You can access items in the collection using indexes like an array.
val = document.all.length; // gives total number of elements
val = document.head; // gives head element
val = document.body; // gives body element
val = document.doctype; // gives DOCTYPE
val = document.domain; // Gives you domain
val = document.URL; // gives URL
val = document.characterSet; // UTF-8
val = document.contentType; // Text/html
val = document.forms; // Grabs form element (1)
val = document.forms[0]; // Grabs first form using index
val = document.forms[0].id; // Grabs the ID of the form "task-form"
val = document.forms[0].method; // Grabs the form method
val = document.forms[0].action; // Grabs the form action
val = document.links; // Grabs all the links
val = document.links[0]; // Grabs first link
val = document.links[0].id; // Grabs first link id (none available in this situation)
val = document.links[0].classList; // Grabs first link class lists
val = document.links[0].classList[1]; // Grabs first link class lists but specific one "secondary-content"
val = document.images; // Grabs all images
val = document.scripts; // Collection of scripts
val = document.scripts[2]; // Grabs app.js script
val = document.scripts[2].getAttribute("src"); // Grabs app.js source

// Turning a collection into an array to use forEach(). Cant run forEach on a collection. forEach is for arrrays only
let scripts = document.scripts;

let scriptsArray = Array.from(scripts); // Changes collection to an array

scriptsArray.forEach(function (script) {
  console.log(script.getAttribute("src")); // getAttribute("src") grabs the source attribute and logs that to the console
  // loops through all the scrips and creates and prints them to the console.
});

console.log(val);
