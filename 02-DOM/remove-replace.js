// Replacing elements

// Replacing the H5 "Tasks" inner HTML with new content
// Create Element
const newHeading = document.createElement("h2");

// Add Id
newHeading.id = "task-title";

//Add new text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");

// Grabbing the Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading); // replace child takes in the newHeading and you need to specifiy what youre replacing

// Removing Elements

// Grabbing all the list items and the ul
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove specific list item
lis[0].remove(); // Calling the remove method to remove the first list item

// Can also remove children
list.removeChild(lis[3]);

console.log(lis);

// Classes and Attributes
const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0]; // grabbing the a tag inside the first list item we selected above

// Classes
let val; //initialize val to show lots of things
val = link.className; //Text of the class names attached to the "link" i.e string of the classes
val = link.classList; // Returns a DOM token list??
val = link.classList[0]; //returns first class
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href"); // #
val = link.setAttribute("href", "http://www.google.com"); // Changes the link href to google
link.setAttribute("title", "google"); //add title attribute to link with the title of google
val = link.hasAttribute("title"); // Returns true or false is the value is there
link.removeAttribute("title"); // Removes the title attribute
val = link;

console.log(val);
