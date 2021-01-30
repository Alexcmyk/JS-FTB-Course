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
