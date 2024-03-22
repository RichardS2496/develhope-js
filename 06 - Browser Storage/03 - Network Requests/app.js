async function getingData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await res.json();
    const template = `
    <h2>${todo.title}</h2>
    
    `;
    document.getElementById("container").innerHTML = template;
  } catch (err) {
    console.error(err);
  }
}

getingData(4);
