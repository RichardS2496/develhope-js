const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

//El ejercicio pide usar Object.key para obtener el par key/value, lo cual no comprendo. Sin embargo, mi solucion tratara de dar respuesta

let entries = Object.entries(person);

for (let entry of entries) {
  let [key, val] = entry; //desestructuracion de arrays . "Estudiar"
  console.log(`${key}: ${val}`);
}

//en la desestructuracion de arrays extraemos valores de arrays o propiedades deobjetos y asignarlos a variables
