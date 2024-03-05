//CONSTRUCTOR

// function Person(name, age, nationality) {
//   this.name = name; //{name: name}
//   if (typeof age === "number") {
//     this.age = age; // obj["age"] = age
//   } else {
//     this.age = Number(age);
//   }
//   this.nationality = nationality;
// }

// CLASSES

class Person {
  constructor(name, age, nationality) {
    this.name = name; //{name: name}
    if (typeof age === "number") {
      this.age = age; // obj["age"] = age
    } else {
      this.age = Number(age);
    }
    this.nationality = nationality;
  }
}

let richard = new Person("Richard", 27, "ES");

console.log(richard);

// CLASS INHERITANCE

class Student extends Person {
  constructor(name, age, nationality, subject) {
    super(name, age, nationality);
    this.subject = subject;
  }
}

let liz = new Student("Liz", 26, "ES", "English");
console.log(liz);
