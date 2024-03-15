const numbers = [1, 2, 3];

function sum(...numbers) {
  return numbers.reduce((acc, cvalue) => acc + cvalue, 0);
}

console.log(sum(...numbers));
