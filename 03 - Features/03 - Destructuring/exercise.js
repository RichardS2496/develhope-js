const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age2: 20,
};

function isAdult(obj) {
  const { age2: age } = obj;
  console.log(age);
  return age >= 18;
}

console.log(isAdult(person2));
