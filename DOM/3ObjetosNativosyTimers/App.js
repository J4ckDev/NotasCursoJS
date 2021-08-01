const button = document.getElementById("button");

/**
 * Objeto window - Es el objeto global, de el descienden todos los demas objetos
 *  alert() - Muestra un mensaje de alerta
 *  prompt() - Muestra una ventana de dialogo
 *  confirm() - Muestra una ventana que pide confirmacion
 */

// alert("Hola mundo"); // en realidad es window.alert('Hola mundo') pero como window es global, no es necesario escribirlo.
// let name = prompt("Como te llamas?");
// console.log(name);

// if (confirm("Acepta?")) {
//   console.log("Acepto");
// } else {
//   console.log("No acepto");
// }

/**
 * Objeto console - Es el objeto que contiene la consola del navegador
 * https://developer.mozilla.org/es/docs/Web/API/Console
 * console.log() - Muestra un mensaje de log en la consola
 * console.warn() - Muestra un mensaje de advertencia en la consola
 * console.error() - Muestra un mensaje de error en la consola
 * console.dir() - Muestra una representacion de un objeto en la consola
 * console.table() - Muestra una tabla en la consola
 */

const person = {
  name: "Juan",
  age: 25,
  email: "juan@email.com",
};

console.log(person.name);
console.warn(person.age);
console.error(person.email);
console.dir(person);
console.table(person);
console.table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**
 * Objeto location - Es el objeto que contiene la barra de direcciones del navegador
 * https://developer.mozilla.org/es/docs/Web/API/Location
 * location.href - Muestra la url actual
 * location.protocol - Muestra el protocolo de la url actual
 * location.host - Muestra el host de la url actual
 * location.pathname - Muestra el pathname de la url actual
 * location.hash - Muestra el hash de la url actual
 * location.reload() - Redirecciona a la url actual
 */

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
/* button.addEventListener("click", () => {
  //location.reload();
  location.href = "https://www.google.com"; // Redirecciona a google
}); */

/**
 * Objeto history - Es el objeto que contiene la historia de las urls
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/History
 * history.back() - Retorna a la url anterior
 * history.forward() - Retorna a la url siguiente
 * history.go(n|-n) - Va a la url n adelante en el historial o va -n url hacia atrás
 * history.lenght - Retorna el numero de urls en el historial
 */

/**
 * Objeto date - Es el objeto que contiene la fecha y hora del navegador
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

const date = new Date("August 1, 2021 23:15:30");
console.log(date); // Retorna toda la información
console.log(date.getDay()); // Retorna el día de la semana, cuenta desde el domingo (retornaría 0) hasta el sábado (retornaría 6)
console.log(date.getMonth()); // Retorna el mes contando desde cero.
console.log(date.getDate()); // Retorna el día actual.

/**
 * Timers - Es una forma de hacer una llamada a una función en un tiempo determinado
 * Timeout:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
 * setTimeout(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la función después del delay. Si lo referenciamos
 * mediante una variable/constante podemos pararlo con clearTimeout(referencia)
 *
 * Interval:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
 * setInterval(()=>{code}, delay-in-milliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos
 * mediante una variable/constante podemos pararlo con clearInterval(referencia)
 */

/* button.addEventListener("click", () => {
  setTimeout(saludar, 1000);
});
const saludar = () => {
  console.log("Hola");
}  */

/* const timeout = setTimeout(() => {
  console.log("Hola");
}, 3000);

//Paro la ejecución del timeout y la función nunca saludaría
button.addEventListener("click", () => {
  clearTimeout(timeout);
}); */

const interval = setInterval(() => {
  console.log("Adiós");
}   , 1000);

//Paro la ejecución del setInterval y la función deja de despedirse
button.addEventListener("click", () => {
  clearInterval(interval);
} );