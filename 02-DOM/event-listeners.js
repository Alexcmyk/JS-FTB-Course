// // Goal, to add ecent listener to the clear tasks button
// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("helo");

//   e.preventDefault(); // stopping default behavior on the event perimeter
// });

// Same way of adding a function to the event listener. Instead of for a call back function using a named function
document.querySelector(".clear-tasks").addEventListener("click", onClick);

// this is a named function
function onClick(e) {
  //   console.log("Clicked");
  let val;
  val = e; // So we can watch the event

  // Event Target
  val = e.target; // Grabbing the target. Logs the a link
  val = e.target.id; // If there was an id this would grab the id
  val = e.target.className; // This prints the classes
  val = e.target.classList; // Prints a DOM token of the classes
  val = e.target.classList[1]; // Grabs the 2nd class in the list

  //e.target.innerText = "Hello"; // Changed the text to say hello

  // We can look at the event type
  val = e.type; // Prints "Click"

  // Timestamp
  val = e.timeStamp;

  // Coordinate events relative to the window
  val = e.clientY; // Shows you mouse coodinate on Y axis
  val = e.clientX; // Shows you mouse coodinate on X axis

  // Coordinate events relative to the element itself. i.e. the button itself
  val = e.offseY; // Shows you mouse coodinate on Y axis
  val = e.offsetX; // Shows you mouse coodinate on X axis

  e.preventDefault();
  console.log(val);
}
