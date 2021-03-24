let numeros = [];
let pares = [];
let impares = [];
let aleatorio = 0;
let temp = 0;
let dataOut = document.getElementById('Out');

dataOut.innerHTML = `<h3>Multiplicaciones</h3>`
for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt('Digita un número'))); 
    aleatorio = Math.round(Math.random() * (10 - 1)+1);
    temp = numeros[i]*aleatorio;
    if (temp % 2 == 0) {
        pares.push(temp);
    } else {
        impares.push(temp);
    }
    dataOut.innerHTML += `<p>\`${numeros[i]} \\times ${aleatorio} = ${temp}\`</p>`
}

dataOut.innerHTML += `<h3>Array de pares: ${pares}</h3>`;
dataOut.innerHTML += `<h3>Array de impares: ${impares}</h3>`;