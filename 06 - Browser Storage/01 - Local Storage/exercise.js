const user = {
  id: 1,
  name: "John",
  age: 25,
};

function savingToLocalStorage(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
}
