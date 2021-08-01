/**
 * Recorrer el DOM (DOM Traversing)
 *
 * Padre - parent (Nodo del que desciende)
 *  > parentNode - Devuelve el nodo padre (Que puede no ser un elemento)
 *  > parentElement - Lo mismo que el anterior, la diferencia es que cuando el nodo padre no es un elemento retorna NULL
 *
 *  NOTA: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.
 *
 * Hijos - child (nodo que desciende de un padre)
 *  > childNodes - Devuelve todos los nodos hijos
 *  > children - Devuelve todos los nodos elementoos hijos
 *  > firstChild - Devuelve el primer nodo hijo
 *  > firstElementChild - Devuelve el primer nodo elemento hijo
 *  > lastChild - Devuelve el último nodo hijo
 *  > lastElementChild - Devuelve el  último nodo elemento hijo
 *  > hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene
 *
 * Hermanos - siblings (Nodo al mismo nivel)
 *  > nextSibling - Devuelve el siguiente nodo hermano
 *  > nextElementSibling
 *  > previousSibling
 *  > previousElementSibling
 *
 * Cercano
 *  > closest(selector) - Selecciona el nodo más cercano que cumpla con el selector.
 */

const parent = document.getElementById("parent");
console.log(parent.parentNode); //Devuelve el padre del elemento con ID parent (nav)
console.log(parent.parentNode.parentNode); //Devuelve al abuelo del elemento con ID parent (body)
console.log(parent.childNodes); //Devuelve a los hijos del elemento con ID parent (Incluye no elementos)
console.log(parent.children); // Devuelve a los elementos hijos
console.log(parent.firstChild); // Devuelve al primer hijo (Incluye no elementos)
console.log(parent.firstElementChild); // Devuelve el primer elemento hijo
console.log(parent.hasChildNodes());
console.log(parent.firstChild.hasChildNodes());
console.log(parent.nextSibling);
console.log(parent.nextElementSibling);
console.log(parent.parentElement.previousElementSibling);
console.log(parent.parentElement.nextElementSibling);
console.log(parent.lastElementChild.closest(':not(ul)'));