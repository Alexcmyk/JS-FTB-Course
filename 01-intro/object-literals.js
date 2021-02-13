const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2021 - this.age; // Calculates age inside the function. "This" needs to be used inside the funtion and references the object.
  },
};

let val;

val = person;

// Get specific value
val = person.firstName; // Steve
// ^ This is the most common way
val = person["firstName"]; // Steve
val = person.age; // 30
val = person.hobbies[0]; // music
val = person.address.state; // FL
val = person.address["city"]; // Miami
val = person.getBirthYear(); // 1987

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Alex", age: 23 },
  { name: "Dan", age: 32 },
];

// Loops through object and logs the people's names to the console
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
