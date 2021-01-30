// Traversing the DOM. Going up and down the element tree.

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child"); // selecting the first child of li with the class of collection-item

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0]; // returns text node which are the line breaks in the html doc.
val = list.childNodes[0].nodeName; // returns name of the selected node
val = list.childNodes[1].nodeType; // #1 <-- returns number one
val = list.childNodes[3].nodeType; // #8 <-- returns number eight which equals comment
// These numbers pertain to the type of element it is
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes, Children gives you pretty much just the element.
val = list.children;
val = list.children[0]; // same as above
val = list.children[0].textContent = "hello"; // changes content to hello

// Children of children
list.children[3].children[0].id = "text-id-example"; // adding a text id to the link
val = list.children[3].children[0]; // Gives us the child of the 4th (3rd index) child. Which is a link. 0 index gives us the specific a tag

// First Child
val = list.firstChild; // first node. "Text"
val = list.firstElementChild; // gives you the first element. not "text" nodes. Most cases you will use this.

// Last Child
val = list.lastChild; // gives you the last node. In this case its another "text" element / line break.
val = list.lastElementChild; // gives you the last element. i.e last li in the ul

// Count
val = list.childElementCount; // 6. Total Child count

// Get Parent node
val = listItem.parentNode; // gives us the parent ul item
val = listItem.parentElement; // gives us the same thing.

val = listItem.parentElement.parentElement; // jumping up the tree to the parent of the parent.

// Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Previous Siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling; // dealing with the previous sibling, but there is none. so logs "null"

console.log(val);
