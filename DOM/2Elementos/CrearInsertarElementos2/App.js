/**
 * Insertar y eliminar elementos II
 *  parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
 *  parent.insertAdjacentElement(position, element)
 *  parent.insertAdjacentText(position, text)
 *  parent.insertAdjacentHTML(position, HTML)
 *
 * positions:
 *  beforebegin - Antes de que empiece (Hermano anterior)
 *  afterbegin - Después de que empience (primer hijo)
 *  beforeend - antes de que acabe (último hijo)
 *  afterend - después de que acabe (hermano siguiente)
 *
 * parent.replaceChild(newChild,oldChild) - Reemplaza un hijo por otro.
 */

const title = document.getElementById("title");
const list = document.getElementById("list");
const newElement = document.createElement("li");
newElement.textContent = "I'm a new element";
const newChild = document.createElement("li");
newChild.textContent = "I'm the new child 2";
const listBrother = document.createElement("ol");
listBrother.innerHTML = "<li>I'm a son of the new list</li>";

// list.insertBefore(newElement, list.children[1]);
//list.insertAdjacentElement('beforebegin',listBrother); // El elemento listBrother queda como hermano anterior de list
//list.children[0].insertAdjacentElement('beforebegin',newElement); // El nuevo elemento queda como primer hijo
//list.insertAdjacentElement('afterbegin',newElement); // El nuevo elemento queda como primer hijo
//list.insertAdjacentElement('beforeend',newElement); // El nuevo elemento queda como último hijo
// list.children[0].insertAdjacentElement("afterend", newElement); // El nuevo elemento se coloca después del primer hermano
// list.insertAdjacentElement("afterend", listBrother); // El elemento listBrother queda como hermano siguiente de list
// title.insertAdjacentHTML("afterend", "<p>I'm a text after the title.</p>");
// list.insertAdjacentText("afterend", "I'm a text before a numbered list");

// list.replaceChild(newChild, list.children[1]);

/**
 * DOM manipulation convenience methods - JQuery Like
 * https://caniuse.com/#search=jQuery-like
 *
 * positions:
 *  parent.before() - Antes de que empiece (hermano anterior)
 *  parent.prepend() - Después de que empiece (primer hijo)
 *  parent.append() - antes de que acabe (último hijo)
 *  parent.after() - Después de que acabe (hermano siguiente)
 *
 *  child.replaceWith(newChild)
 *
 */

// list.before(listBrother); // Listbrother queda como hermano anterior de list
// list.children[0].before(newElement); // El nuevo elemento queda como primer hijo
// list.prepend(newElement); // El nuevo elemento queda como primer hijo
//list.append(newElement); // El nuevo elemento queda como último hijo
list.after(listBrother); // Listbrother queda como hermano siguiente de list
list.children[0].after(newElement); // El nuevo elemento queda como segundo hijo
list.children[2].replaceWith(newChild); 

/** clonar y eliminar elementos
 *  element.cloneNode(true|flase) - Clona el nodo. Si le pasamos true clona
 *  todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos
 *  element.remove() - Elimina el nodo del DOM
 *  element.removeChild(child) - Elimina el nodo hijo del DOM
 */

// list.after(list.cloneNode(true)); //Clona con hijos
list.after(list.cloneNode(false)); //Clona sin hijos
// list.remove(); //Elimina la lista
list.removeChild(list.children[0]); //Elimina el primer hijo de la lista