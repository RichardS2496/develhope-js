// Usando solo setTimeout

// function printAsyncName(callback, name) {
//   setTimeout(callback, 1000);
//   setTimeout(() => {
//     console.log(name);
//   }, 2000);
// }

// printAsyncName(() => {
//   console.log("Hola");
// }, "Richard");

// Usando setInterval como se sugiere en el ejercicio

function printAsyncName(callback, name) {
  callback();

  let intervalID = setInterval(() => {
    console.log(name);
    clearInterval(intervalID);
  }, 2000);
}

printAsyncName(() => {
  console.log("Hello");
}, "Richard");

//Dudas con respecto al interval, esta corriendo el callback inmediatamente
