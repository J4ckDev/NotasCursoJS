/**
 * OPERADORES DE ARITMÉTICOS. Suma (+), resta (-), multiplicación(*), división(/),
 * módulo o resto de la división (%) y potencia (**).
 */

let suma = 1 + 2;
let resta = 5 - 3;
let multiplicacion = 6 * 10;
let division = 100 / 25;
let modulo = 20 % 2;
let num1 = 10 - 5;
let num2 = 4 / 2;
let potencia = num1 ** num2;
let resultado = num1 + num2;

console.log(suma, resta, multiplicacion, division, modulo, potencia, resultado);

/**
 * OPERADORES DE ASIGNACIÓN.
 * = Para asignar un valor
 * += Para asignar la suma con el valor a la derecha del igual.
 * -= Para asignar la resta con el valor a la derecha del igual.
 * *= Para asignar la multiplicación con el valor a la derecha del igual.
 * /= Para asignar la división con el valor a la derecha del igual.
 * %= Para asignar el módulo con el valor a la derecha del igual.
 * **= Para asignar la potencia con el valor de la derecha del igual.
 */

let a = 10;
let b = 4;

console.log((a += b)); // 10 + 4 = 14
console.log((a -= b)); // 14 - 4 = 10
console.log((a *= b)); // 10 * 4 = 40
console.log((a /= b)); // 40 / 4 = 10
console.log((a %= b)); // 10 % 2 = 2
console.log((a **= b)); // 2 ^ 4 = 16

/**
 * OPERADORES DE COMPARACIÓN.
 */

let c = 50;
let d = 10;

// Es igual, compara que el valor sea igual.
console.log(c == d); // retorna false
console.log(c == 50); // retorna true
console.log(c == "50"); // retorna true, para evitar esto se usa el estrictamente igual

// Estrictamente igual, compara que el valor y el tipo de dato sea igual.
console.log(c === "50"); // retorna false

// Es diferente, verifica que los valores sean diferentes
console.log(c != d); // retorna true
console.log(c != "50"); // retorna false, para evitar esto se usa el estrictamente diferente

// Estrictamente diferente, compara que el tipo y el valor sea diferente
console.log(c !== "50"); // retorna true

// mayor que
console.log(c > d); // retorna true

// menor que
console.log(c < d); //retorna false

// mayor o igual que
console.log(c >= 51); // retorna false
console.log(c >= 50); // retorna true

// menor o igual que
console.log(d <= 11); // retorna true
console.log(d <= 9); // retorna false

/**
 * OPERADORES LÓGICOS.
 *
 * AND (&&)
 * OR (||)
 */

let e = 10;
let f = 20;
let g = 30;

console.log(
  `¿${f} es mayor que ${e} y mayor que ${g}?. RTA// ${f > e && f > g}`
); // retorna false
console.log(
  `¿${f} es menor que ${e} o menor que ${g}?. RTA// ${f < e || f < g}`
); // retorna true

/**
 * OPERADORES UNARIOS. Para funcionar solo se necesitan de si mismos.
 */

let h = 10;

h++; // Aumenta en 1
console.log(h);
h--; // Disminuye en 1
console.log(h);

/**
 * OPERADORES TERNARIOS. Permite asignar un valor dependiendo si se cumple o no una condición.
 */

a = 10;
b = 15;

let texto = b > a ? "verdadero!!" : "falso!!";

console.log(texto);

a % 2 == 0 && a % 5 == 0
  ? (console.log(`El número ${a} es múltiplo de 2 y 5`),
    console.log(`El número ${a} es par`))
  : console.log(`El número ${a} no es múltiplo de 2 y/o 5`);

/**
 * TYPE COERCION. Permite convertir cualquier dato en otro tipo de dato. Si una variable
 * almacena un string y otra variable almacena un número, Js puede decidir cual será la variable final.
 */

a = 500;
b = 100;

console.log(a + b);

b = "100";
console.log(
  a + b
); /* Js concatena porque el operador + sirve para concatenar además de sumar, por lo
                    que Js decide concatenarlo*/

console.log(
  a - b
); /* En este caso Js decide convertir el string a número, ya que el operador - se usa
                    para operar números*/

b = "gato";
console.log(a - b); //En este caso se obtiene NaN, porque Js esperaba que después del - hubiera un número.

a = true;
b = true;
console.log(a + b); // Como True se puede representar como 1, Js convierte los datos booleanos en números.
