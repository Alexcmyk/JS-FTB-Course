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
  // Delete task event | Using event delegation. Apply the listener to the .collection ul. Since there are more than one "x" and its dynamic, meaning we add them using the sumbit event listener. We need to apply the listener to the parent and filter down to the "x" icon.
  taskList.addEventListener("click", removeTask);
  // Clear Tasks event
  clearBtn.addEventListener("click", clearTasks);
  // Filter Tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Add task function
function addTask(e) {
  // Check to see if there was a value in the input
  if (taskInput.value === "") {
    alert("Add a task"); // Alert if left empty
  } else {
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
  }
  e.preventDefault();
}

// Remove task function
function removeTask(e) {
  // checking if the object you clicked has a parent with the class of delete item. if true then runs the code.
  if (e.target.parentElement.classList.contains("delete-item")) {
    // Adds a confirm prompt to make sure the user wants to delete. If yes, then its true and does the remove method.
    if (confirm("Are you sure?")) {
      // The target's parent is the a tag. The parent of the a tag is the LI. Then remove that element
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear task function
function clearTasks(e) {
  // One option, but slower
  // taskList.innerHTML = "";
  // While loop, faster. If the condition is true itll repeat the code till false. In this case if tasklist has a first child, then remove that child, repeat.
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks function
function filterTasks(e) {
  // Storing the target value in a const. Making it lower case so its easier to match.
  const text = e.target.value.toLowerCase();
  // Select all the list items and looping through the items. Query selector all returns a node list. You can use a forEach on a node list. "Get element by class" returns a HTML collection. Then you would have to convert to a array to use forEach
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
