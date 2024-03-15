function repeatHello(callback) {
  setInterval(callback, 1000);
}

repeatHello(() => {
  console.log("Hello");
});

//el ejercicio no pide que se detengan las repeticiones de la funcion
