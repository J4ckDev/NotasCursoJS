/**
 * Antes se hacía así
 * function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años.`;

    this.saludar = () => `Hola, ${this.datos}`;
}

const juan = new Persona("Juan", "García", 25);
const martha = new Persona("Martha", "García", 35);

console.log(juan.saludar())
 */


// Ahora con ES6
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años.`;
  }
  // En los métodos no se puede usar el formato de función flecha o con la palabra reservada function
  saludar() {
    return `Hola, ${this.datos}`;
  }
}

const juan = new Persona("Juan", "García", 25);
const martha = new Persona("Martha", "García", 35);

console.log(juan.saludar());
console.log(martha.saludar());
juan.nombre = "Jonathan";