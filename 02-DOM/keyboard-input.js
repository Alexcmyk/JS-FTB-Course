const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// clear input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// taskInput.addEventListener("keydown", runEvent); // fires event when key is pressed

// taskInput.addEventListener("keyup", runEvent); // fires event when key is lifted

// taskInput.addEventListener("keypress", runEvent); // generic pressing of the key?

// taskInput.addEventListener("focus", runEvent); // when the input is focused

// taskInput.addEventListener("blur", runEvent); // when you click out of the event

// taskInput.addEventListener("cut", runEvent); // when you cut something out of the event

// taskInput.addEventListener("paste", runEvent); // when you paste into the event

// taskInput.addEventListener("input", runEvent); // Fires off on any input event. ^ p much all those

// taskInput.addEventListener("change", runEvent); // Works with select input when you change the choice

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value); // This prints what you typed

  //   heading.innerText = e.target.value; Taking the value and updating the h5

  //   console.log(taskInput.value); // getting the value of the taskInput "input"

  //   e.preventDefault();
}
