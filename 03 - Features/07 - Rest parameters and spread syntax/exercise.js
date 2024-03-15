const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

//usamos la desestructuracion de objetos para extraer la propiedad id y
//el "resto" en un objeto personInfo
const { id, ...personInfo } = person;

console.log(id, personInfo);
