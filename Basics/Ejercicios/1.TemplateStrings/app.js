let nombre;
let edad;
let dataOut = document.getElementById("Out");

nombre = prompt('Introduzca su nombre: ');
edad = parseInt(prompt('Introduzca su edad: '));

dataOut.textContent = `Hola ${nombre}, tienes ${edad} y 
                       el año que viene tendrás ${edad + 1} años`