// For Loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
    // Continue replaces this step so there isnt a double log. "2" & "2 is my favorite number" i.e go to next iteration
  }

  if (i === 5) {
    console.log("Stop the loop");
    break;
    // break ends the loop
  }
  console.log(`Number ${i}`);
}

// While loop
// General rule for loop is for when you know how many times itll run and while is for when you dont
let i = 0;

while (i < 10) {
  console.log(`Number ${i}`);
  i++;
  //increment goes in the loop
}

// Do while
// runs once no matter what
let i = 100;

do {
  console.log(`Number ${i}`);
  i++;
} while (i < 10);

// Loop through array
const cars = ["Ford", "Chevy", "Honda", "Toyota"];
cars.push("Jeep"); // Adds jeep to the end

for (i = 0; i < cars.length; i++) {
  console.log(`My favorite car is ${cars[i]}`);
}

//For each loop
// This is a cleaner way to loop through an array
// (car, index, array) Things you can pass in. Just like all things passed into a function. They can be named anything.
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Map Method
// Used to return a different array
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Karen" },
];

const ids = users.map(function (user) {
  return user.id;
  // returns and array of user ids
});

console.log(ids);

// For in loops
const user = {
  firstName: "John",
  lastName: "Smith",
  age: "40",
};

for (let x in user) {
  //   console.log(x); // gives you key
  console.log(`${x} : ${user[x]}`); // loops through loop and gives you the key/value pairs
}
