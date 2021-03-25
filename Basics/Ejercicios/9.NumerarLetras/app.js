let texto = "";
let palabras = [];
let numPalabras = 0;
let numConsonantes = 0;
let numVocales = 0;
let regexPalabras = /(?<!\-)\b[a-záéíóúüñ]+(?:(?=\s)|(?=\.)|(?=\;)|(?=\,)|(?=\:)|\b)/gi;
let regexConsonante = /[b-df-hj-np-tv-zñ]/gi;
let regexVocal = /[aeiouáéíóúü]/gi;
let dataOut = document.getElementById("Out");

while (numPalabras != 1) {
  texto = prompt("Ingresa una palabra");
  palabras = texto.match(regexPalabras);
  if (palabras == null) {
    continue;
  } else {
    numPalabras = palabras.length;
  }
  if (numPalabras == 1) {
    break;
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

dataOut.innerHTML = `<h3>Datos de la palabra ${palabras[0]}</h3>`;
dataOut.innerHTML += `<p>El número de letras es: ${palabras[0].length}</p>`;
dataOut.innerHTML += `<p>El número de consonantes es: ${numConsonantes}</p>`;
dataOut.innerHTML += `<p>El número de vocales es: ${numVocales}</p>`;
