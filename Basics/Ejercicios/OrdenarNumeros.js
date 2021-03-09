/**
 * Ordenar 3 números de mayor a menor.
 * Permutaciones con 3 elementos.
 * Posibilidades 3! = 3*2*1 = 6
 * abc - 321
 * acb - 312
 * bac - 231
 * bca - 213
 * cab - 132
 * cba - 123
 */

let numbers = { a: 0, b: 0, c: 0 }; // Almacenar números
let ids = Object.keys(numbers); // Ids del array asociativo
let dataIn = document.getElementById("In"); // Para mostrar los datos ingresados
let dataOut = document.getElementById("Out"); // Para mostrar el resultado

ids.forEach((id) => {
  numbers[id] = prompt(`Introduzca el valor para ${id}`);
});

dataIn.textContent = `Los números introducidos son ${numbers.a}, ${numbers.b} y ${numbers.c}`;

// Ordenar números

let result = Object.values(numbers).sort((a, b) => b - a);
dataOut.textContent = `Los números ordenados son ${result[0]}, ${result[1]} y ${result[2]}`;
