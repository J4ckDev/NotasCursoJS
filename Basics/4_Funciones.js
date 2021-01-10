/**
 * FUNCIONES CON PARÁMETROS
 */

// Declaración de la función
function saludar(nombre) {
  if (typeof nombre === "string") {
    console.log(`Hola ${nombre}, Bienvenido al curso de Javascript`);
  } else {
    console.log(
      `Variable del tipo ${typeof nombre} no aceptada. Escriba un nombre válido.`
    );
  }
}

let nombre = "J4ckdev";
//let nombre = 54;

// Llamada de la función
saludar(nombre);

/**
 * FUNCIONES CON VALORES DE RETORNO
 */

function nombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

saludar(nombreCompleto("Jonathan", "Aldana"));

/**
 * FUNCIONES DE PRIMERA CLASE. Es cuando se almacenan funciones en variables
 */

let nombreApellido = nombreCompleto;

console.log(typeof nombreApellido); // retorna Function

console.log(nombreApellido("John", "Doe"));

/**
 * FUNCIONES ANÓNIMAS. Son funciones que no tienen nombre pero se asignan o
 * almacenan en una variable.
 * También se pueden autoinvocar
 */

let sumar = function (a, b, c) {
  return a + b + c;
};

(function (a, b, c) {
  console.log(a + b + c);
})(1, 2, 3);

let resultado = sumar(2, 5, 7);
console.log(resultado);

/**
 * FUNCIONES COMO CONSTANTES
 */

const restar = function (a, b) {
  return a - b;
};

console.log(restar(5, 6));

/**
 * SCOPE. Es el alcance que tienen ciertos datos. En este caso
 * se hablará del alcance de las variables.
 */

let variable = "un valor"; // Variable global

function holaMundo() {
  let variable1 = "otro valor"; // Variable local
  variable = "nuevo valor";
  console.log(variable1);
}

holaMundo();
console.log(variable); // Imprime "nuevo valor" en lugar de "un valor"
//console.log(variable1); // Muestra error

/**
 * FUNCIONES FLECHA - ARROW FUNCTIONS
 */

const multiplicar = (a, b) => a + b;

const validarString = (texto) => {
  if (typeof texto === "string") {
    console.log("Si es string");
  } else {
    console.log(`No es string, es ${typeof texto}`);
  }
};
validarString("HOla");
validarString(50.63);
console.log(multiplicar(5, 9));