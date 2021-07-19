const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");

input.addEventListener("keyup", (event) => console.log(event.key));

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que se ejecute la configuración por defecto. En este caso evita que se actualice la página.
  console.log("Formulario enviado!!");
});

button.addEventListener("click", () => console.log("Botón pulsado!!"));

//Se puede simular un click llamando al evento.
button.click();

// Ver donde se hizo click de forma global
/* addEventListener("click", (event) => {
  console.log(
    `Has dado click en el elemento ${event.target.nodeName}, en la posición (${event.x},${event.y})`
  );
}); */

// Saber cual de los hijos de gallery fue clickeado. Se invento el atributo key para este ejercicio, NO ES ESTÁNDAR.
const gallery = document.getElementById("gallery");
gallery.addEventListener("click", (event) => {
  const elemento = event.target;
  if (elemento.id != "gallery") {
    console.log(
      `Has dado click en el Div ${elemento.attributes[1].textContent}`
    );
    elemento.classList.toggle("blue");
  } else {
    console.log("Le has dado click al Div padre");
  }
});
