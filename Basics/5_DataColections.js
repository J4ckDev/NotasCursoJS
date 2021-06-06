/**
 * ARRAYS
 * Más sobre arrays en https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/colecciones_indexadas
 */

let amigos = ["Pedro", "Gabriel", "Daniel", "Erick", "Pedro"];

console.log(amigos);

//Se obtiene el tamaño del array
console.log(amigos.length);

// Obtener si la variable es un array
console.log(Array.isArray(amigos));

// Obtener la posición de la primera coincidencia del valor de un array. Si no encuentra retorna -1
console.log(amigos.indexOf("Pedro"));

// Obtener la posición de la última coincidencia del valor de array. Si no encuentra retorna -1
console.log(amigos.lastIndexOf("Pedro"));

// Convertir un array a string con datos separados por el caracter que se especifique. Si no se especifica los separa por coma.
console.log(amigos.join());
console.log(amigos.join(";"));

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

// Foreach necesita como parámetro una función (Callback). Puede ser una anónima o una función flecha.

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

// sort. Por si solo ordena los números de menor a mayor a partir del codigo Unicode pero con un truco sirve para ordenar de los números como se debe

console.log(numero.sort()); // Menor a mayor por unicode
console.log(numero.sort((a, b) => b - a)); // Mayor a menor
console.log(numero.sort((a, b) => a - b)); // Menor a mayor

// reduce. Todos los elementos se reducen a un solo valor. Recibe 2 parámetros como en sort

console.log(numero.reduce((a, b) => a + b));
console.log(numero.reduce((a, b) => a * b));

const users = [
  {
    name: "user 1",
    online: false,
  },
  {
    name: "user 2",
    online: true,
  },
  {
    name: "user 3",
    online: true,
  },
  {
    name: "user 4",
    online: false,
  },
  {
    name: "user 5",
    online: true,
  },
  {
    name: "user 6",
    online: true,
  },
];

const usersOnline = users.reduce((count, user) => {
  if (user.online) count++;
  return count;
}, 0);

console.log(`Hay ${usersOnline} usuarios conectados.`);

/**
 * STRINGS
 * Más sobre strings en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
 */

let texto = "Jonathan Aldana J4ckDev";
let cadena = "Hola Mundo";

console.log(cadena.indexOf("Hola")); // Busca la primera palabra o el primer caracter que se especifique y retorna su posición si la encuentra, sino retorna un -1

console.log(cadena.length); //Cantidad de caracteres que tiene una cadena incluyendo espacios

console.log(cadena.substring(3, 10)); // Obtiene una nueva cadena con la posición de los caracteres que se le especifiquen

console.log(cadena.slice(2)); // Ignora los primeros n caracteres
console.log(cadena.slice(-2)); // Muestra los n últimos caracteres
console.log(cadena.slice(0, -2)); // Muestra los caracteres desde el índice especificado (0) hasta antes de los últimos caracteres (2)

console.log(
  texto.split(" ")
); /* Separa los datos por el caracter que se especifica y retorna un array */

let cadena2 = " Hola youtube, estamos trabajando con cadenas ";

console.log(cadena2);
console.log(cadena2.trim()); // Elimina los espacios del inicio y el final de un texto o cadena

console.log(cadena.startsWith("H")); // Devuelve True o False dependiendo de sí la letra especificada está al inicio de la cadena
console.log(cadena.startsWith("M", 5)); // En este caso revisa que el caracter especificado se encuentra en el índice especificado
console.log(cadena.startsWith("Hola")); // También sirve con palabras

console.log(cadena.endsWith("o")); // Devuelve True o False sí el último caracter especificado se encuentra al final de la cadena
console.log(cadena.endsWith("a", 4)); // En este caso toma en cuenta los 4 primeros caracteres y mira si al final se encuentra la letra especifficada
console.log(cadena2.endsWith("Mundo")); // También sirve con palabras

console.log(cadena.includes("n")); // Funciona como IndexOf, retorna True o False
console.log(cadena.includes("a", 5)); // Se le puede especificar desde que posición comenzar a buscar

let cadena3 = "string";

console.log(cadena3.repeat(3)); // Repite n veces el contenido de una cadena
console.log("Hola".repeat(3));

let regex = /\bj\w+(?:n|v)\b/gi; /* Solo hace match con palabras que empiezan 
                                    por j y terminan con n o v*/
console.log(
  texto.search(regex)
); /* Search usa una expresión regular para encontrar la primera coincidencia y retornar 
      la posición donde empieza la coincidencia. Si no encuentra coincidencias retorna -1 */

let resultado =
  texto.match(regex); /* Obtiene todas las coincidencias con la expresión 
                                        regular definida como un array de datos*/
console.log(resultado);

console.log(cadena.replace("Mundo", "Youtube")); // Cuando encuentra la coincidencia, lo reemplaza por el nuevo valor que se especifique
console.log(cadena.replace(/o/g, "a")); // También funciona con expresiones regulares

console.log(texto.toLowerCase()); // Pasa el texto a minúsculas
console.log(texto.toUpperCase()); // Pasa el texto a mayúsculas

console.log(
  Array.from(cadena3)
); /* Convierte cualquier objeto iterable en un array, en este ejemplo
se aplicó a una cadena. Tiene más utilidad cuando se trabaja con los Nodos del DOM*/

/**
 * OBJETOS
 */

const name = "Luisa"
const surname = "Ortiz"
const age = 23
const ubication = {
  city: "Bogotá",
  country: "Colombia"
}

/* Construir un objeto a partir de variables y que los nombres de las variables sean los ID del objeto 
y el contenido de las variables el valor asociado a ese ID*/

const newUser = {
  name,
  surname,
  age,
  ubication
}
console.log(newUser)

// Otra forma de construir un objeto y además se pueden agregar métodos

let alumno = {
  nombre: "John",
  edad: 21,
  suscriptor: false,
  ciudad: "Lima",
  presentarse() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}.`)
  }
};

alumno.presentarse();

console.log("Keys de alumno");

for (const key in alumno) {
  console.log(key);
}

console.log("Datos del alumno");

for (const key in alumno) {
  console.log(alumno[key]);
}

console.log(alumno); // ver los valores con su identificador
console.log(alumno.nombre); // Acceder a un atributo
console.log(alumno["edad"]); // Otra forma de acceder a un atributo

let datosObj = Object.values(alumno); // Obtener todos los valores del objeto
console.log(datosObj); // Imprime un array solo con los valores

let identificadores = Object.keys(alumno); // Obtener los identificadores del objeto
console.log(identificadores);

// Operador optional chaining operator (?) en objetos. Sirve para ver la existencia de alguna propiedad en un objeto.

let userData = {
  name: "Juan",
  age: 20,
  location: {
    country: "Colombia",
    city: {
      name: "Bogotá",
      zipcode: "123456",
    },
  },
};

let zipcode = userData.location.city.zipcode;
console.log(`Código postal: ${zipcode}`);

userData = {
  name: "Daniel",
  age: 25,
  location: {
    country: "Italia",
  },
};

//zipcode = userData.location.city.zipcode; // Sacará error
//La linea anterior se soluciona con el operador ?
zipcode =userData?.location?.city?.zipcode; /* En lugar de un error y terminación en la ejecución 
del programa, se obtiene un undefined por lo que a partir de una condición se evitarían errores*/
console.log(`Código postal: ${zipcode ?? "No se encontró"}`);

userData = {
  name: "Tania",
  age: 28,
  location: {
    country: "Venezuela",
    city: {
      name: "Caracas",
      zipcode: "12344",
    },
  },
};

zipcode = userData?.location?.city?.zipcode;
console.log(`Código postal: ${zipcode ?? "No se encontró"}`);

/**
 * MATH Y DATE, valores matemáticos y de fecha respectivamente.
 */

let datoMath = Math.random(); // Obtener un valor pseudoaleatorio entre 0 y 1
console.log(datoMath);

datoMath = Math.random() * 10; // Obtener un valor pseudoaleatorio entre 0 y 10
console.log(datoMath);

datoMath = Math.PI; // valor de Pi
console.log(datoMath);

datoMath = Math.E; // valor de Euler
console.log(datoMath);

datoMath = Math.max(50, 8, 9, 74); // Valor más alto
console.log(datoMath);

datoMath = Math.min(50, 8, 9, 74); // valor más pequeño
console.log(datoMath);

datoMath = Math.abs(-5); // Valor absoluto
console.log(datoMath);

datoMath = Math.ceil(5.8213); // Redondea hacia arriba
console.log(datoMath);

datoMath = Math.floor(5.8213); // Redondea hacia abajo
console.log(datoMath);

datoMath = Math.pow(5, 3); // Devuelve la potencia de un número.
console.log(datoMath);

datoMath = Math.round(5.43); // Redondea hacia el entero más cercano
console.log(datoMath);

// Obtener un valor aleatorio entre un rango
// Math.round(Math.random() * (max - min)+min);
datoMath = Math.round(Math.random() * (15 - 5) + 5); // Números aleatorios entre 5 y 15
console.log(datoMath);

datoMath = Math.sign(5.8213); // indica si el parámetro es positivo, negativo o cero.
console.log(datoMath);
datoMath = Math.sign(-5.8213); // indica si el parámetro es positivo, negativo o cero.
console.log(datoMath);
datoMath = Math.sign(0); // indica si el parámetro es positivo, negativo o cero.
console.log(datoMath);

datoMath = Math.sqrt(5.8213); // Devuelve la raíz cuadrada de un número positivo
console.log(datoMath);

let datoDate = new Date();
console.log(datoDate); // Imprimir objeto fecha
console.log(datoDate.getFullYear()); // Año
console.log(datoDate.toString()); // Mostrar la fecha completa en formato String
