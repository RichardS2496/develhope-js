class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  //Getter para firstName

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  // Getter para lastName

  get lastName() {
    return this._lastName;
  }

  // Setter para lastName

  set lastName(lastName) {
    this._lastName = lastName;
  }

  // Getter para age

  get age() {
    return this._age;
  }

  // Setter para age

  set age(age) {
    this._age = age;
  }

  // Getter para fullName

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
person.age = 35;
console.log(person.age);
