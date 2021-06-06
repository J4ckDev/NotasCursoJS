//Reutilizando la clase persona del intro

class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
  
      this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`;
    }
    // En los métodos no se puede usar el formato de función flecha o con la palabra reservada function
    saludar() {
      return `Hola, ${this.datos}.`;
    }
  }

class Profesor extends Persona {
    constructor(nombre, apellido, edad, cursos){
        super(nombre,apellido,edad)
        this.cursos = cursos;
    }
    // Reescribir un método
    saludar() {
        return `Hola, ${this.datos} y enseño ${this.cursos}`
    }
}

const Alex = new Profesor("Alex","Muñoz",30,["HTML","Javascript"]);
console.log(Alex)
console.log(Alex.saludar())