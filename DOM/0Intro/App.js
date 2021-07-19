/**
 * document.getElementById('id') - Acceder a un elemento a través de su id
 *
 * document | element .querySelector('selectorCss') - Accede al priemr elemento que coincida con el selector CSS
 *
 * document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
 */

/* const mainTitle = document.getElementById("main-title");
console.log(mainTitle);
mainTitle.textContent = "DOM - Accediendo a nodos"; */

const paragraph = document.querySelector(".paragraph");
console.log(paragraph);
const span = paragraph.querySelector("span");
console.log(span);

// NodeList != Array
const paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs);
paragraphs[0].style.color = "red";

// Convertir nodeList a Array
const paragraphsSpread = [...paragraphs];
paragraphsSpread.map((p) => (p.style.color = "green"));
// otra forma para convertir
const paragraphsFrom = Array.from(paragraphs);
paragraphsSpread.map((p) => (p.style.color = "blue"));

/**
 * Atributos - Valores adicionales que configuran a los elementos o ajustan su comportamiento.
 * Toda la lista de atributos HTML en https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 * Lista de métodos para los atributos en https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
 *  element.getAttribute('attribute')
 *  element.setAttribute('attribute', value)
 *
 * Clases
 *  element.classList.add('class','class',...) - Agregar clases a un elemento
 *  element.classList.remove('class','class',...) - Quitar clases a un elemento
 *  element.classList.toggle('class'[,force]) - Añadir una clase si no existe o quitarla si existe
 *  element.classList.constains('class') - Devuelve true o false si el elemento tiene la clase
 *  element.classList.replace('oldClass', newClass) - Reemplaza la clase oldClass por newClass
 * Atributos directos
 *  id
 *  value
 */

const mainTitle = document.getElementById("main-title");
const name = document.getElementById("name");

console.log(mainTitle);
console.log(name);

console.log(name.getAttribute("type")); // Se obtiene el tipo de input
name.setAttribute("type", "number"); // Se cambia el input a tipo number

mainTitle.classList.add("main-title", "otherTitle");
mainTitle.classList.remove("otherTitle");

mainTitle.classList.contains("main-title")
  ? console.log("Tiene la clase main-title")
  : console.log("No tiene la clase main-title");

mainTitle.classList.replace("main-title", "title");

console.log(mainTitle.id);
console.log(mainTitle.innerHTML); // Se obtiene el contenido del elemento incluyendo etiquetas HTML
console.log(mainTitle.textContent); // Se obtiene el texto del elemento sin etiquetas HTML
name.value = 10;
console.log(name.value.length); // Tamaño del contenido del input
