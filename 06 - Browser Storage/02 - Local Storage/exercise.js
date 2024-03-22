const user = {
  id: 1,
  name: "John",
  age: 25,
};

function savingToLocalStorage(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
}

function printFromLocalStorage() {
  const userString = localStorage.getItem("user");
  if (userString) {
    const user = JSON.parse(userString);
    console.log(user);
  } else {
    console.log("No hay datos almancenados");
  }
}

savingToLocalStorage(user);
printFromLocalStorage();
