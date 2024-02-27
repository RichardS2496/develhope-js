function printName() {
  const helloName = "Hello John";
  const inner = () => {
    console.log(helloName);
  };
  return inner();
}

setTimeout(printName, 1000);
