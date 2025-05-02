// API in JS.
console.log("API in JS.");

const URL = "https://official-joke-api.appspot.com/random_joke";
const jokePara = document.querySelector("#joke");
const btn = document.querySelector("#btn");

// const getJokes = async () => {
//   console.log("Getting data...");
//   let response = await fetch(URL);
//   console.log(response); //JSON format
//   let data = await response.json();
//   jokePara.innerText = `${data.setup} - ${data.punchline}`;
// };

// Using Promises
function getJokes() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jokePara.innerText = `${data.id} - ${data.type}\n ${data.setup} - ${data.punchline}`;
    });
}

btn.addEventListener("click", getJokes);
