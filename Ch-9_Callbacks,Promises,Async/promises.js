// Promises in JS.

// Promises are Solution of callbacks hell.
console.log("Promises in JS.");

// Syntax
// let promise = new Promise((reolve, reject) => {...});  resolve & reject are callbacks.

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
}
