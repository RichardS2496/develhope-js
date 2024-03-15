class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // consultar nuevamente
  static fromJson(json) {
    const data = JSON.parse(json);
    return new Person(data.id, data.firstName, data.lastName, data.age);
  }

  toJson() {
    return JSON.stringify(this);
  }
}

// const dataPerson = new Person(0, "", "", 0);

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
// const developer = dataPerson.fromJson(json);
console.log(developer);
