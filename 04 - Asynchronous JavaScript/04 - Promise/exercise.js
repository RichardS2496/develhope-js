// const number = Math.random() * 100;
const number = 15;

const firstPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`Si, el número ${number} es mayor que 10`);
  } else {
    reject(`No, el número ${number} es menor que 10`);
  }
});

firstPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
