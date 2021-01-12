/**
 * Función para mostrar el menú.
 */
function menu() {
  const welcome = ":__-:: Bienvenidos al Restaurante JS ::-__:";
  let ids = Object.keys(products); // Variable que obtiene los Ids existentes
  let comidas = [];
  let adicionales = [];
  let bebidas = [];

  console.log(welcome);
  console.log("");

  ids.forEach((id) => {
    /**
     * Obtener la cantidad de caracteres para completar con puntos los items del menú.
     */
    let prodLength = ` ${id} - ${products[id].nombre}  $${products[id].precio} `
      .length;
    let numDots = welcome.length - prodLength;

    let dots = "";
    for (let index = 0; index < numDots; index++) {
      dots += "."; // Generar el conjunto de puntos
    }

    // template guarda el formato para mostrar los productos del menú
    const template = ` ${id} - ${products[id].nombre} ${dots} $${products[id].precio}`;

    /**
     * Separar los productos para poderlos imprimir en orden.
     */

    if (id.search(regexCR) === 0) {
      comidas.push(template);
    } else if (id.search(regexA) === 0) {
      adicionales.push(template);
    } else {
      bebidas.push(template);
    }
  });

  /**
   * Imprimir el menú con el formato ID - Nombre - Precio
   */

  console.log(":_________-:: Comidas rápidas ::-_________:");
  comidas.forEach((comida) => {
    console.log(comida);
  });
  console.log("");
  console.log(":___________-:: Adicionales ::-___________:");
  adicionales.forEach((adicional) => {
    console.log(adicional);
  });
  console.log("");
  console.log(":_____________-:: Bebidas ::-_____________:");
  bebidas.forEach((bebida) => {
    console.log(bebida);
  });
  console.log("");
  console.log(":__________-:: Vuelve pronto ::-__________:");
}

/**
 * Función para pedir productos. Esta función recibe parámetros ilimitados pero solo
 * acepta arrays con el formato ["IdProducto", Cantidad]. Ej order(["CR001", 2], ["B002", 1]
 * Esto significa que el usuario está pidiendo 2 hamburguesas sencillas y una gaseosa.
 */

let order = (...products) => {
  products.forEach((product) => {
    if (
      typeof product === "object" &&
      product.length === 2 &&
      (product[0].search(regexCR) === 0 ||
        product[0].search(regexA) === 0 ||
        product[0].search(regexB) === 0) &&
      Number.isInteger(product[1])
    ) {
      productsOrdered.push(product);
      console.log(
        `El producto ${product[0]} fue adicionado correctamente a su pedido.`
      );
    } else {
      console.log("Se recibió un producto inexistente o un formato incorrecto");
    }
  });
  return "Operación terminada";
};

/**
 * Función para mostrar el costo total del pedido realizado. 
 */

