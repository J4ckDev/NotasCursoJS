/**
 *  CONDICIONALES
 */

// Condicional Simple. Una condición y única posibilidad
let num = 5;
if (num > 0) console.log(`${num} es mayor que cero`);

/**
 * Invitación a una Fiesta
 * Si eres mayor de edad y menor de 65 años puedes venir a la fiesta;
 * sino, si tienes permiso firmado de tus padres puedes venir;
 * sino quédate en casa.
 */
let nombre = "John Doe";
//let edad = 23;
//let edad = 67;
let edad = 15;
let permiso = true;

if (edad >= 18 && edad < 65) {
  console.log(`${nombre} puedes venir a la fiesta`);
} else if (permiso === true && edad < 18) {
  console.log(`${nombre} puedes venir, tienes permiso`);
} else {
  console.log(`${nombre} no puedes venir a la fiesta, quédate en casa`);
}

/**
 * ¿Qué personaje de DragonBall Z eres?
 *
 * Si eres fuerte y comelón eres Gokú.
 * Si eres veloz y egoíste eres Vegeta
 * Si eres pequeño y débil eres Krilin
 * Si eres travieso y juguetón eres Trunks
 * Si no eres ninguno, eres una sabandija.
 */

let personalidad = "Pequeño y débil";

switch (personalidad) {
  case "Fuerte y comelón":
    console.log("Eres Gokú");
    break;

  case "Veloz y egoísta":
    console.log("Eres Vegeta");
    break;

  case "Pequeño y débil":
    console.log("Eres Krilin");
    break;

  case "Travieso y juguetón":
    console.log("Eres Trunks");
    break;

  default:
    console.log("Eres una sabandija");
}
