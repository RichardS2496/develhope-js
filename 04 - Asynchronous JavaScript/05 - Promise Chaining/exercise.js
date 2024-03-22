const isLogged = true;

function firstPromise() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("El usuario no está logueado"));
    }
  });
}

function secondPromise(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("El número no es mayor que 0.5"));
    }
  });
}

firstPromise(isLogged)
  .then((randomNumber) => secondPromise(randomNumber))
  .then((userInfo) => console.log(userInfo))
  .catch((error) => console.error(error));
