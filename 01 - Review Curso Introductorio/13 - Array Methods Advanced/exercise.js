const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

function ageAverage(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return Math.round(totalAge / persons.length);
}

const average = ageAverage(persons);
//console.log(persons);
console.log(average);

//el objetivo de reduce en reducir el array a un valor unico
//por medio de la aplicacion de una funcion que recibe 4 parametros
// acumulador, item, index y array.

//el 0 es una inicializacion del acumulador
