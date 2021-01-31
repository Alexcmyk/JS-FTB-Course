const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// // Click
// clearBtn.addEventListener("click", runEvent);
// // Double Click
// clearBtn.addEventListener("dblclick", runEvent);
// // Mousedown
// clearBtn.addEventListener("mousedown", runEvent);
// // Mouseup
// clearBtn.addEventListener("mouseup", runEvent);
// // Mouseenter
// clearBtn.addEventListener("mouseenter", runEvent); // these fire only on the main element
// // Mouseleave
// clearBtn.addEventListener("mouseleave", runEvent);
// // Mouseover
// clearBtn.addEventListener("mouseover", runEvent); // these fire if you mouse over more events WITHIN the main element
// // Mouseout
// clearBtn.addEventListener("mouseout", runEvent);
// // Mousemove
// clearBtn.addEventListener("mousemove", runEvent);

card.addEventListener("mousemove", runEvent); // adding mouse over event to the card.

// Event Handler
function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY} `; // Changing the h5 to the mouse coords
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; // using the coords for the rgb colors in the background of the body
}
