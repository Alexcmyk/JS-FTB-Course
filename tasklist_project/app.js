// Desfine UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all eventlisteners
loadEventListeners();

// Function with all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
}

// Add task function
function addTask(e) {
  // Check to see if there was a value in the input
  if (taskInput.value === "") {
    alert("Add a task"); // Alert if left empty
  }

  // create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element | this is all based around firing the submit event listener. Creates a kink element
  const link = document.createElement("a");
  // Add class | Add the appropriate class names
  link.className = "delete-item secondary-content";
  // add the icon html | injects html within the link element. In this case its the i tag
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link); // using append child to pass the link element into the li element.
  // Append the li to the ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = "";

  e.preventDefault();
}
