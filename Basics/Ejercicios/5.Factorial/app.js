let numero = 0;
let resultado = 1;
let dataOut = document.getElementById("Out");

while (numero <= 0) {
    numero =  parseInt(prompt("Ingrese un número mayor a cero para obtener su factorial"));
}

for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

dataOut.textContent = `${numero}! = ${resultado}`