/**
 * ARRAYS
 * Más sobre arrays en https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/colecciones_indexadas
 */

let amigos = ["Pedro", "Gabriel", "Daniel", "Erick"];

console.log(amigos);

// Agregar elementos al array
let dato = amigos.push("David", "Luisa"); //Si se iguala a una variable, retorna el nuevo tamaño del array

console.log(dato);
console.log(amigos);

// Quitar el último elemento del array

amigos.pop(); // Si se iguala a una variable, retorna el valor eliminado
console.log(amigos);

// Extraer datos de un array. slice(Posición primer dato, Posición dato final)
let nuevoArray = amigos.slice(0, 2);

console.log(nuevoArray);
console.log(amigos);

// Quita el primer elemento de un array

amigos.shift(); // Si se iguala a una variable, retorna el valor eliminado
console.log(amigos);

// Inserta elementos al comienzo de un

amigos.unshift("Laura", "Tania");
console.log(amigos);

/* Eliminar elementos de un array y opcionalmente colocar los valores que 
reemplazan los eliminados */

amigos.splice(2, 3, "Miguel", "Isabel", "Johana");
console.log(amigos);

// Invierte los elementos de un array

amigos.reverse();
console.log(amigos);

// Foreach necesita como parámetro una función. Puede ser una anónima o una función flecha.

console.log("----Con una función flecha----");
amigos.forEach((element) => {
  console.log(element);
});

console.log("----Con una función anónima----");
amigos.forEach(function (item) {
  console.log(item);
});

/* Map funciona como foreach, la diferencia es que map retorna un array 
nuevo a partir de los valores retornados en cada ciclo*/

let datosNuevos = amigos.forEach((element) => `Hola ${element}`);
console.log(datosNuevos); // retorna undefined

datosNuevos = amigos.map((element) => `Hola ${element}`);
console.log(datosNuevos); // Retorna el array ["Hola David", "Hola Johana", ...]

// Filter. Obtener datos de un array que cumplan una condición

let numero = [10, 436, 45, 74, 33, 9, 2, 54];

let mayoresAVeinte = numero.filter((num) => num > 20);
console.log(mayoresAVeinte);

// Find. Obtiene el primer objeto que cumpla una condición.

console.log(numero.find((num) => num % 2 === 0));

// FindIndex. Obtiene el índice del primer objeto que cumpla con la condición

console.log(numero.findIndex((num) => num % 2 === 0));

// include. Ver si existe un dato en un array

console.log(numero.includes(55)); // retorna false
console.log(numero.includes(9)); // retorna true

// some. Funciona como include pero puedo especificar una condición.

console.log(numero.some((num) => num > 400)); // retorna true
console.log(numero.some((num) => num < 0)); // retorna false

// every. Ver si TODOS los elementos de un array cumplen con una condición

console.log(numero.every((num) => num > 400)); // retorna false
console.log(numero.every((num) => num > 0)); // retorna true

/**
 * STRINGS
 * Más sobre strings en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
 */

let texto = "Jonathan Aldana J4ckDev";

console.log(
  texto.slice(3)
); /* Obtener el texto que hay después de los 3 primeros caracteres */
console.log(
  texto.slice(3, 10)
); /*Obtener el texto que hay después del tercer caracter y antes del décimo */

console.log(
  texto.split(" ")
); /* Separa los datos por el caracter que se especifica y retorna un array */

let regex = /\bj\w+(?:n|v)\b/gi; /* Solo hace match con palabras que empiezan 
                                    por j y terminan con n o v*/
console.log(
  texto.search(regex)
); /* Search usa una expresión regular para encontrar la primera coincidencia y retornar 
      la posición donde empieza la coincidencia. Si no encuentra coincidencias retorna -1 */

let resultado = texto.match(
  regex
); /* Obtiene todas las coincidencias con la expresión 
                                        regular definida como un array de datos*/
console.log(resultado);

console.log(texto.toLowerCase()); // Pasa el texto a minúsculas
console.log(texto.toUpperCase()); // Pasa el texto a mayúsculas

/**
 * OBJETOS
 */

let alumno = {
  nombre: "John",
  edad: 21,
  suscriptor: false,
  ciudad: "Lima",
};

console.log(alumno); // ver los valores con su identificador
console.log(alumno.nombre); // Acceder a un atributo
console.log(alumno["edad"]); // Otra forma de acceder a un atributo

let datosObj = Object.values(alumno); // Obtener todos los valores del objeto
console.log(datosObj); // Imprime un array solo con los valores

let identificadores = Object.keys(alumno); // Obtener los identificadores del objeto
console.log(identificadores);

/**
 * MATH Y DATE, valores matemáticos y de fecha respectivamente.
 */

let datoMath = Math.random(); // Obtener un valor pseudoaleatorio entre 0 y 1
console.log(datoMath);

datoMath = Math.random() * 10; // Obtener un valor pseudoaleatorio entre 0 y 10
console.log(datoMath);

datoMath = Math.PI; // valor de Pi
console.log(datoMath);

datoMath = Math.max(50, 8, 9, 74); // Valor más alto
console.log(datoMath);

datoMath = Math.min(50, 8, 9, 74); // valor más pequeño
console.log(datoMath);

let datoDate = new Date();
console.log(datoDate); // Imprimir objeto fecha
console.log(datoDate.getFullYear()); // Año
console.log(datoDate.toString()); // Mostrar la fecha completa en formato String