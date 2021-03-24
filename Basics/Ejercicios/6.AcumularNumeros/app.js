let contador = 0;
let sum = 0;
let dataOut = document.getElementById("Out");

while (sum < 50) {
  sum += parseInt(prompt("Introduce un número"));
  contador += 1;
}

dataOut.textContent = `La suma obtenida fue de ${sum} y se ingresaron ${contador} números.`;