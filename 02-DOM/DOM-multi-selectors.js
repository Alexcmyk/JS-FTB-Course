// GET ELEMENTS BY CLASS NAME | Multi selectors return HTML collections or Node lists. Similar to arrays but there are things you cant do like you can with arrays

const items = document.getElementsByClassName("collection-item"); // returns and HTML collection with each item being indexed
//console.log(items); // HTML collection.
//console.log(items[0]); // logs the first item in the collection
//items[0].style.color = "red"; //Changes first item to red
//items[3].textContent = "Hello"; // Changes 4th item to Hello

const listItems = document.querySelector("ul").getElementsByClassName("collection-item"); // Grabs only "collection-items" inside of ul. So it ignores all "collection-item" classes outside of the ul
//console.log(listItems);

// GET ELEMENTS BY TAG NAME

let lis = document.getElementsByTagName("li");
//console.log(lis); // returns collection of all lis
//console.log(lis[0]); // returns first one
lis[0].style.color = "red";
lis[3].textContent = "Hello";
// same as above but just selecting with tag names
// HTML collection isnt a array.

// Convert collection to an Array
lis = Array.from(lis); // turns collection into array
lis.reverse(); // reverses it
lis.forEach(function (li, index) {
  // passing in lis from array and index
  // forEach loop working over the array
  //console.log(li.className); // logs each li classname to console
  li.textContent = `${index}: Hello`;
});
//console.log(lis); // logs it

// QUERY SELECTOR ALL | This returns a node list. This allows you to array methods without having to convert it

const queryItems = document.querySelectorAll("ul.collection li.collection-item"); // You can put any kind of css selector in here. This is grabbing all the list with a class name of collection-item within a ul.collection

queryItems.forEach(function (item, index) {
  item.textContent = `${index}: Hello`; // updates text content to "0: Hello"
});

const oddLi = document.querySelectorAll("li:nth-child(odd)"); // grabbing the odd list items
const evenLi = document.querySelectorAll("li:nth-child(even)"); // grabbing the even list items

oddLi.forEach(function (li, index) {
  li.style.background = "#ccc"; // loop that changes the bg color of off odd list items
});

// for loop instead if foreach
for (i = 0; i < evenLi.length; i++) {
  evenLi[i].style.background = "red";
} // for loops work on html collections bc .length works on collections and accessing the collection items with indexed values works.

console.log(queryItems); // returns node list
