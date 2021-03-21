let numero = 0;
let resultado = 0;
let dataOut = document.getElementById("Out");

while (numero <= 1) {
    numero =  parseInt(prompt("Ingrese un número mayor a 1 para identificar si es primo."));
}

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        resultado += 1;
    } else {
        resultado += 0;
    }
}

switch (resultado) {
    case 2:
        dataOut.textContent = `El ${numero} es primo.`
        break;

    default:
        dataOut.textContent = `El ${numero} no es primo.`
        break;
}