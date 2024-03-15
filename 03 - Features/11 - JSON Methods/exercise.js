const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

const person2 = JSON.parse(JSON.stringify(person1));
//Hice una deep copy del objeto person1
//Primero convierto person1 en un string JSON con JSON.stringify
//Luego con JSON.parse convierto esa cadena de nuevo en objeto JS.
//La idea es copiar el objeto y tener 2 separados o independientes.

// const person2 = { ...person1 };
person2.address.city = "Milan";

console.log(person1);
console.log(person2);
