/**
 * CICLOS, BUCLES O LOOPS
 */

// for

console.log("for");

for (let index = 0; index < 10; index++) {
  console.log(index);
}

/**
 * Ejemplo con for.
 * Dado un texto deseamos imprimir su contenido letra por letra
 */

let text = "Ciao Mondo!!";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

/**
 * For of. Obtiene los valores del array u objeto.
 */
let names = ["Paco", "José", "Paula", "Maria"];
console.log("for of");
for (const name of names) {
  console.log(name);
}

/**
 * For in. Obtiene los identificadores del array u objeto
 */
console.log("for in");
for (const name in names) {
  console.log(name);
}
/**
 * while
 */

console.log("while");

let valor = 0;
while (valor < 11) {
  console.log(valor);
  valor++;
}

/**
 * do while.
 * La diferencia entre do while y while, es que el do while se ejecuta
 * al menos una vez aunque la condición no se cumpla, mientras que while
 * no se ejecuta si la condición no se cumple.
 */

console.log("do while");

do {
  console.log(valor);
  valor++;
} while (valor < 9);

do {
  console.log(valor);
  valor++;
  if (valor % 2 === 0) {
    continue;
  } else if (valor === 23) {
    break;
  }
} while (valor < 25);
