const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
let dataOut = document.getElementById('Out');
let color = "";
let condicion = false;
color = prompt('Ingresa un color');

condicion = colores.indexOf(color.toLowerCase()) != -1;

if (condicion) {
    dataOut.textContent = `El color ${color} si está en el array.`
} else {
    dataOut.textContent = `El color ${color} no está en el array.`
}