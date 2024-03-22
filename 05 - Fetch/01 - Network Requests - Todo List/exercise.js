async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
}

getData();
