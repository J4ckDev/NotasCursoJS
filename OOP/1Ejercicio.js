/**
 * Crear una clase Libro que contenga lo siguiente:
 *  Atributos: título, autor, año y género
 *  Métodos: Devolver toda la información del libro
 *
 * Al arrancar el programa, pedir 3 libros mediante prompt y guardarlos en un array.
 *
 * Validaciones:
 * Los campos NO deben estar vacíos
 * El año debe ser un número y debe tener 4 dígitos
 * Que corresponda al género de aventuras, terror o fantasía
 *
 * Funciones:
 * Mostrar todos los libros
 * Mostrar los autores ordenados alfabéticamente
 * Pedir un género y mostrar la información de todos los libros que pertenecen a ese género
 * mediante el método que devuelve toda la información del libro
 *
 */

class Book {
  constructor({ title, author, year, genre }) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  info() {
    return `Título: ${this.title}\nGénero: ${this.genre}\nAutor: ${this.author}\nAño de publicación: ${this.year}`;
  }
}

let flag = 0;
const books = [];
const bookValues = { title: "", genre: "", author: "", year: 0 };

String.prototype.capitalize = function () {
  let temp = this.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
};

const cleanBookValues = () => {
  bookValues.title = "";
  bookValues.author = "";
  bookValues.year = 0;
  bookValues.genre = "";
};

const seeBooks = () => void books.map((book) => console.log(book.info()));

const seeAuthors = () => {
  const authors = books.map((book) => book.author);
  const organize = authors.sort();
  void organize.map((author) => console.log(author));
};

const seeBookByGenre = () => {
  const genre = prompt("Introduce el género a buscar");
  const booksFiltered = books.filter((book) => book.genre == genre);
  booksFiltered.length !== 0
    ? booksFiltered.map((book) => console.log(book.info()))
    : console.log("No hay libros de ese género.");
};

while (flag < 3) {
  alert(`Datos para el libro ${flag + 1}`);
  while (bookValues.title == "") {
    bookValues.title = prompt("Escriba el nombre del libro.");
  }
  while (
    bookValues.genre == "" ||
    (bookValues.genre != "Aventuras" &&
      bookValues.genre != "Terror" &&
      bookValues.genre != "Fantasía")
  ) {
    bookValues.genre = prompt(
      "Elija el género del libro entre Aventuras, Terror o Fantasía"
    );
    bookValues.genre = bookValues.genre.capitalize();
  }
  while (bookValues.author == "") {
    bookValues.author = prompt("Escriba el nombre del autor.");
    bookValues.author = bookValues.author.capitalize();
  }
  while (
    bookValues.year == 0 ||
    bookValues.year.toString().length !== 4 ||
    typeof bookValues.year !== "number"
  ) {
    bookValues.year = parseInt(prompt("Escriba el año de publicación."));
  }
  books.push(new Book(bookValues));
  cleanBookValues();
  flag++;
}
