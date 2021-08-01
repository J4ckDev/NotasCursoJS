// DOM - Crear e insertar elementos
/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent=texto
Escribir HTML en un elemento: element.innerHTML = códigoHTML

Añadir un elmento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");
const fragmentList = document.createDocumentFragment();
const fragmentSelect = document.createDocumentFragment();

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

// Al usar fragment se ahorra que el navegador esté redibujando el DOM por cada vuelta de bucle y los elementos agregados en el
// fragment se insertan en el DOM en una sola operación.
days.forEach((day) => {
  const itemList = document.createElement("LI");
  itemList.textContent = day;
  fragmentList.appendChild(itemList);
  const optionItem = document.createElement("OPTION");
  optionItem.textContent = day;
  //otra forma de agregar el atributo value es optionItem.setAttribute("value", day.toLowerCase());
  optionItem.value = day.toLowerCase();
  fragmentSelect.appendChild(optionItem);
});

daysList.appendChild(fragmentList);
selectDays.appendChild(fragmentSelect);