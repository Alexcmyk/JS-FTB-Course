// Local and session storage | Session storage gets cleared out when you end the session. Close the browser
// Local stoarge api is part of the browser

// Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// // Set Session storage item
// sessionStorage.setItem("name", "Beth");

// // Remove from storage
// // localStorage.removeItem("name");

// // Get from storage
// const userName = localStorage.getItem("name");
// const userAge = localStorage.getItem("age");
// console.log(userName, userAge);

// // Clear local storage
// localStorage.clear();

// Adding an event listener to the form watching for a submit.

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value; // getting value in the input

  let tasks; // initalizing tasks variable

  // not sure
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
