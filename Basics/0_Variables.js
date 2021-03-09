console.log("Hello World");
/** Otra alternativa para mostrar información es alert("Hello World"),
 * pero solo funciona en el navegador.
 * 
 * Otra alternativa sería process.stdout.write("Hola Mundo\n"); pero solo funciona con node.js
 */

/**
 * TIPOS DE DATOS
 */

// number o numérico: Para todos los tipos de números, enteros y decimales.
console.log(typeof 50);
console.log(typeof 23.7);

// string o cadena de texto: Se puede escribir con comillas simples y dobles.
console.log(typeof "Soy una cadena con comillas dobles");
console.log(typeof "Soy una cadena con comillas simples");

// boolean: Valores True o False
console.log(typeof false);
console.log(typeof true);

// Array: Colección de datos que tienen un identificador y un valor.
console.log(
  typeof ["Hola", "soy", "un", "array", "con", "datos", "de", "texto"]
);
console.log(["Hola", "soy", "un", "array", "con", "datos", "de", "texto"][0]);

// Diccionario: Almacenar datos con un identificador definido por el usuario y un valor.
console.log({
  nombre: "Jonathan",
  apellido: "Aldana",
  apodo: "J4ckdev",
});

// Tipo Nulo o null
console.log(typeof null);

/**
 * VARIABLES. Se les puede asignar y reasignar un valor.
 *
 * Undefined: Es un tipo de dato que aparece cuando no se le ha asignado un valor a una variable.
 */

let ejemplo; // declaración de una variable

console.log(ejemplo); // Retornará undefined

ejemplo = "ya tengo un valor :D"; // asignación de valor
console.log(ejemplo);

// Declarar y asignar al tiempo.
let profesor = "John Doe";

//reasignación
profesor = "Jonathan Aldana";
console.log(profesor);

/**
 * CONCATENACIÓN.
 */

// Con operador +
console.log("El profesor se llama " + profesor);

// Con Template string
console.log(`El profesor se llama ${profesor}`); // Dentro ${} se pueden hacer operaciones también

/**
 *  CONSTANTES: Solo se les puede asignar un valor pero no reasignarlo.
 */

//const PRUEBA; // Aparecerá un error por no inicializar la constante.

const SEARCH_ENGINE = "Google"; //Se declaran con el formato SnakeCase.

//SEARCH_ENGINE = "Bing"; // Aparece un error en consola