let ourPromise = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random > 0.5) {
    resolve(random);
  } else {
    reject(random);
  }
});

ourPromise
  .then((val) => console.log(val))
  .then((val) => console.log(val))
  .then((err) => console.error(err));
