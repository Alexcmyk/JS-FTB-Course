// Person constructor | constructors start with a capital

function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob); // creating a date from the DOB argument
  this.calculateAge = function () {
    // create a method to figure out age
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  // Person function takes a "name" argument and sets the this.name to that argument.
  // "this" pertains to the object Person and is within function scope
  // console.log(this); // logs twice because we we instantiated the function twice
}

// console.log(this); // "this" logs window object

// const brad = new Person("brad", 36); // Injecting "brad" into the function
// const john = new Person("john", 30); // Injecting "John" into the function

// console.log(john.age);

const brad = new Person("Brad", "9-10-1981");
console.log(brad.calculateAge());
