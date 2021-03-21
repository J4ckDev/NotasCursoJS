let numero = 0;
let resultado = true;
let dataOut = document.getElementById("Out");

while (numero <= 1) {
    numero =  parseInt(prompt("Ingrese un número mayor a 1 para identificar si es primo."));
}

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        resultado = false;
        break;
    }
}
if (resultado) {
    dataOut.textContent = `El ${numero} es primo.`;
} else {
    dataOut.textContent = `El ${numero} no es primo.`
}