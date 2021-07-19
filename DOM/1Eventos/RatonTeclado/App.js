/* 
Eventos de Ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dbclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseuo - cuando soltamos el botón izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button");
const box = document.getElementById("box");
const input = document.getElementById("input");

/* button.addEventListener("click", () => {
  console.log("Button Clicked");
});
 */

/* button.addEventListener('dblclick', () => {
    console.log('Button double click')
}) */

box.addEventListener("mouseenter", () => box.classList.replace("red", "blue"));
box.addEventListener("mouseleave", () => box.classList.replace("blue", "red"));

box.addEventListener("mousedown", () => console.log("Has pulsado en la caja"));
box.addEventListener("mouseup", () =>  console.log("Dejaste de pulsar en la caja"));

box.addEventListener('mousemove', () => console.log('Estás moviendo el cursor en la caja'))

input.addEventListener('keydown', () => console.log('Tecla pulsada'));
input.addEventListener('keyup', () => console.log('Tecla soltada'));
input.addEventListener('keypress', () => console.log('Estás pulsando una tecla'));