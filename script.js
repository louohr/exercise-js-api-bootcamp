// Exercise 1

// 1
async function fetchPokemons() {
  try {
    let response = await fetch("https://santosnr6.github.io/Data/pokemons.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchPokemons();

// 2
async function fetchPokemons() {
  try {
    let response = await fetch("https://santosnr6.github.io/Data/pokemons.json");
    let data = await response.json();
    data.forEach((pokemon) => console.log(pokemon));
  } catch (error) {
    console.log(error);
  }
}

fetchPokemons();

// 3
async function fetchPokemons() {
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
async function fetchDogs() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/dogs.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDogs();

// 2
async function fetchDogs() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/dogs.json");
    let data = await response.json();
    data.forEach((dog) => console.log(dog));
  } catch (error) {
    console.log(error);
  }
}

fetchDogs();

// 3
async function fetchDogs() {
  fetch("https://majazocom.github.io/Data/dogs.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((dog) => {
        document.body.innerHTML += `${dog.name} <br>`;
      });
    })
    .catch((error) => console.log(error));
}

// Exercise 3
// 1
async function fetchBooks() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/books.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchBooks();

// 2
async function fetchBooks() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/books.json");
    let data = await response.json();
    data
      .filter((book) => book.pages < 500)
      .forEach((book) => {
        document.body.innerHTML += `${book.title} - ${book.pages} pages <br>`;
      });
  } catch (error) {
    console.log(error);
  }
}

// Exercise 4
// 1
async function fetchAttendees() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/attendees.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchAttendees();

// 2
async function fetchAttendees() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/attendees.json");
    let data = await response.json();
    document.body.innerHTML = "";
    data
      .filter((attendee) => attendee.attending === true)
      .forEach((attendee) => {
        document.body.innerHTML += `${attendee.name} <br>`;
      });
  } catch (error) {
    console.log(error);
  }
}

fetchAttendees();
