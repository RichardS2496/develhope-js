const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// The  firstName is being modified in both objects because we are declaring person2 = person1, so every change we make in each object will be reflected in the other one.
