/**
 * Spread Operator (Operador de expansión)
 */

let numbers = [-12, 2, 3, 23, 43, 2, 3, 23];
let userOne = {
  name: "Daniel",
  age: 23,
};
let userOneAdditionalData = {
  email: "dani@email.com",
  city: "Bogotá",
};
console.log(userOne);
console.log(userOneAdditionalData);

console.log(numbers); // Array numbers normal
console.log(...numbers); // Array numbers con spread operator

// Enviar elementos en un array a una función

const addNumbers = (a, b, c) => {
  console.log(a + b + c);
};

let numbersToAdd = [4, 5, 6];

addNumbers(...numbersToAdd); //Sin el spread operator numbersToAdd equivaldría a la variable a de la función

// Añadir un array a otro array. Antes se hacía así: numbers = numbers.concat(numbersToAdd);
// Ahora con el spread operator es más sencillo
let copyOfNumbers = numbers.slice();
let copyOfNumbers2 = numbers.slice();

// Una forma
numbers = [...numbers, ...numbersToAdd];
console.log(numbers);

// Segunda forma
copyOfNumbers.push(...numbersToAdd);
console.log(copyOfNumbers);

// Tercera forma. Si deseo agregar los números en una posición específica
copyOfNumbers2.splice(4, 0, ...numbersToAdd);
console.log(copyOfNumbers2);

/* Para el caso de concatenar los objetos antes se hacía así 
userOne = Object.assign({}, userOne, userOneAdditionalData);

Ahora con el spread operator
*/

userOne = { ...userOne, ...userOneAdditionalData };
console.log(userOne);

// Copiar arrays
const copyOfNumbers3 = [...numbers];
console.log(copyOfNumbers3);

// Recibir parámetros ilimitados o parámetros rest en una función

const restParams =(...params)=>{
    console.log(params);
}

restParams(1,2,3,4,5,6,7,8)

// Libreria math

console.log(Math.max(1,2,3))
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Eliminar elementos duplicados de un array
console.log([...new Set(numbers)])