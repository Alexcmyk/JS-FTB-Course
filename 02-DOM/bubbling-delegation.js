// Bubbling is the event bubbling up through the elements. The even goes up to its parent.
// Delegation is putting the event on the parent to listen for the event to bubble up??

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("Card Title");
// });
// // Card title is within

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });

// // Which is within

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// // which is within

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

// This is the top parent.
// When the first event fires, it also fires the other events

// EVENT DELEGATION | Can be descriped as the opposite. Putting an event listener on the parent and going down

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem); // adding the event listener on the body. main parent

function deleteItem(e) {
  //   console.log(e.target); // getting the target of where we clicked

  // conditional statement that checks if the target is the same as the class in the delete icon
  // we needed to select the parent. so we traveresed up to the parent and checked the className. Problem is if you add another class to one or more of the items then it wont work.
  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("delete-item");
  //   }

  // So in this situation this is a better solution
  // seeing if it contains the class name using class list.
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete-item");

    // e.target = the i tag, parentElement = a tag, parentElement = li, remove removes it :)
    e.target.parentElement.parentElement.remove();
  }
}
