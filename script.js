// Exercise 1

// 1
async function fetchPokemon() {
  try {
    let response = await fetch("https://santosnr6.github.io/Data/pokemons.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchPokemon();

// 2
async function fetchPokemon() {
  try {
    let response = await fetch("https://santosnr6.github.io/Data/pokemons.json");
    let data = await response.json();
    data.forEach((pokemon) => console.log(pokemon));
  } catch (error) {
    console.log(error);
  }
}

fetchPokemon();

// 3
async function fetchPokemon() {
  fetch("https://santosnr6.github.io/Data/pokemons.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pokemon) => {
        document.body.innerHTML += `${pokemon.name} <br>`;
      });
    })
    .catch((error) => console.log(error));
}

// Exercise 2
// 1
