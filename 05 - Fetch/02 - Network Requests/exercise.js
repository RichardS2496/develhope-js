const URL_API = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: JSON.stringify({
    title: "new post",
    completed: true,
  }),
  headers: {
    "Content-type": "application/json; chartset=UTF-8",
  },
};

async function posting() {
  try {
    const data = await fetch(URL_API, options);
    console.log(data);
    const res = await data.json();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
posting();
