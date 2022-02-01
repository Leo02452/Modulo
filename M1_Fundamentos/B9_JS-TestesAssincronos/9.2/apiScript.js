// apiScript.js     
const jokeContainer = document.getElementById('jokeContainer');

const API_URL = 'https://icanhazdadjoke.com/';

const printJoke = (data) => {
  jokeContainer.innerText = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const obj = {
      joke: data.joke
    }
    printJoke(obj);
  });
};

window.onload = () => fetchJoke();

