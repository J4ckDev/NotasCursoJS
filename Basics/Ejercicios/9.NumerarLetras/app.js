let texto = "";
let palabras = [];
let numPalabras = 0;
let numConsonantes = 0;
let numVocales = 0;
let regexPalabras = /(?<!\-)\b[a-záéíóúüñ]+(?:(?=\s)|(?=\.)|(?=\;)|(?=\,)|(?=\:)|\b)/gi;
let regexConsonante = /[b-df-hj-np-tv-zñ]/gi;
let regexVocal = /[aeiouáéíóúü]/gi;
const dataTitle = document.getElementById("title");
const dataVocales = document.getElementById("vocales");
const dataConsonantes = document.getElementById("consonantes");
const dataLongitud = document.getElementById("longitud");
const dataOut = document.getElementById("Out");

while (numPalabras != 1) {
  texto = prompt("Ingresa una palabra");
  palabras = texto.match(regexPalabras);
  if (palabras != null) {
    numPalabras = palabras.length;
  }
}

if (palabras[0].match(regexVocal) == null) {
  numVocales = 0;
} else {
  numVocales = palabras[0].match(regexVocal).length;
}

if (palabras[0].match(regexConsonante) == null) {
  numConsonantes = 0;
} else {
  numConsonantes = palabras[0].match(regexConsonante).length;
}

dataTitle.textContent = `Datos de la palabra ${palabras[0]}`;
dataVocales.textContent = `El número de letras es: ${palabras[0].length}`;
dataConsonantes.textContent = `El número de consonantes es: ${numConsonantes}`;
dataLongitud.textContent = `El número de vocales es: ${numVocales}`;