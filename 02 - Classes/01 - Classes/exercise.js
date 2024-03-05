// Class definition

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi"); //Instancia
console.log(developer.firstName + " " + developer.lastName);

//developer es una instancia de la clase Person.
//Es un objeto que tiene propiedades y comportamientos definidos por la clase Person.
