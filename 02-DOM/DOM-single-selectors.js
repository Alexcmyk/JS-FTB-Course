// Document object methods

//document.getElementbyId()

console.log(document.getElementById("task-title"));

// Get things from thge element
console.log(document.getElementById("task-title").id); // task-title
console.log(document.getElementById("task-title").classname); // gets the class name if there is one

// Best Practice is not to repeat all these "getElementById" but to cache the element into a variable
const taskTitle = document.getElementById("task-title");

// Change Styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none"; removes element

// Change conten
taskTitle.textContent = "Task List";
taskTitle.innerText = "My List";
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // insert a chunk of html

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red"; // querySelector all is a single element selector. So this only changes the class of the first one
document.querySelector("ul li").style.color = "blue"; // can also nest selectors
document.querySelector("li:last-child").style.color = "red"; // psudos work too as well as nth child.
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; //Since its a single element selector, again it only does the first odd.
