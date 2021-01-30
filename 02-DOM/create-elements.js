// Creating elements and inserting it into the DOM

// Creating new list item
// Create element method
const li = document.createElement("li");

// Add a class | Im familiar with .classList.add()
li.className = "collection-item";

// add id
li.id = "new-item";

// Add atribute
li.setAttribute("title", "New Item"); // First is which attribute and second it the name

// Create text node INSIDE li and append
li.appendChild(document.createTextNode("Hello")); //append child means put something with "this"
// document.createTextNode() is how you add text. You could place it in a variable and add the variable instead

// Creating a new link to put inside the li
// Create new link element
const link = document.createElement("a");

// Add Classes to link
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;

//Finally appending the link into the li
li.appendChild(link);

// Append li as child to UL
document.querySelector("ul.collection").appendChild(li); // selecting the .collection ul and appending the li element to the end of it
// Using this instead of .innerHTML:

/* 
Cause innerHTML reloads all the DOM, recreate it. And it is hard for browser. 
So if u can not to use it, don't use. CreateTextNode don't recreate DOM so we can use it easyly

The reason we use createTextnode() is because textNode escapes any unwanted HTML characters and shows it as is, wheres innerHTML can insert HTML tags e.g (<h1>, <p>, )

createTextNode will escape any strings and show them as they are, while innerHTML  could render HTML-like strings into a DOM. If you don't want that  (unless you are sure the text contains no unescaped tags, e.g. when  assigning a literal directly), you can use textContent  innerText .

I would recommend createTextNode, because all browsers support it equally without any quirks.

Note how textNode escapes the HTML element h1tag and shows it as text.

.textContent also works
*/

console.log(li);
