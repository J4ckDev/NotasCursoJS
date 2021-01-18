/**
 * Función para mostrar el menú.
 */
function menu() {
  const welcome = ":__-:: Bienvenidos al Restaurante JS ::-__:";
  let ids = Object.keys(allProducts); // Variable que obtiene los Ids existentes
  let comidas = [];
  let adicionales = [];
  let bebidas = [];

  console.log(welcome);
  console.log("");

  ids.forEach((id) => {
    /**
     * Obtener la cantidad de caracteres para completar con puntos los items del menú.
     */
    let prodLength = ` ${id} - ${allProducts[id].nombre}  $${allProducts[id].precio} `
      .length;
    let numDots = welcome.length - prodLength;

    let dots = "";
    for (let index = 0; index < numDots; index++) {
      dots += "."; // Generar el conjunto de puntos
    }

    // template guarda el formato para mostrar los productos del menú
    const template = ` ${id} - ${allProducts[id].nombre} ${dots} $${allProducts[id].precio}`;

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
 * acepta arrays con el formato ["IdProducto", Cantidad]. Ej order(["CR001", 2], ["B002", 1])
 * Esto significa que el usuario está pidiendo 2 hamburguesas sencillas y una gaseosa.
 */

let order = (...products) => {
  if (products.length !== 0){
    products.forEach((product) => {
      if (
        typeof product === "object" &&
        product.length === 2 &&
        typeof product[0] === "string" &&
        Number.isInteger(product[1])
      ) {
        if (
          product[0].search(regexCR) === 0 ||
          product[0].search(regexA) === 0 ||
          product[0].search(regexB) === 0
        ) {
          productsOrdered.push(product);
          console.log(
            `El producto ${product[0]} fue adicionado correctamente a su pedido.`
          );
        } else {
          console.error(`Se recibió el id ${product[0]}. \n Ejecute menu() para ver de nuevo los id válidos.`);
        }
      } else {
        console.error(`Se recibió el formato [${product}]. \n Revise que siga el formato ["idProducto", cantidad]. \n Ej. ["CR001", 5] `);
      }
    });
  } else {
    console.error(
      "No se ingresaron productos para ordenar. \n Ingrese productos con el formato [\"idProducto1\", cantidad\"]. \n Ej. order([\"CR001\", 5], [\"B002\", 5]) ");
  }  
  return "Operación terminada";
};

/**
 * Función para agrupar productos que posiblemente estén separados. 
 * Ej. Si la variable productsOrdered = [["B001", 2],["B002", 2],["B001", 5]]. La salida de la función será
 * productsOrdered = [["B001", 7],["B002", 2]]
 */

let groupProductsOrdered = function() {
  if (productsOrdered.length !== 0) {
    let productsGrouped = {};
    productsOrdered.forEach(product => {
      productsGrouped[product[0]] = (productsGrouped[product[0]] || 0) + product[1];
    });
    // Limpiar la variable productsOrdered
    productsOrdered = [];

    // Obtener los ids de los productos
    let ids = Object.keys(productsGrouped);

    // Crear de nuevo el array productsOrdered con todos los productos agrupados
    ids.forEach(id => {
      productsOrdered.push([id, productsGrouped[id]]);
    }); 
  } else {
    console.error("No ha realizado el pedido. Use menu() para obtener el menú y use order() para agregar productos. \n Ej. order([\"CR001\", 5], [\"B002\", 5])");
  }  
  return "Operación terminada";
}

/**
 * Función para mostrar el detalle de la orden actual.
 */

let orderDetail = () => {
  if (productsOrdered.length !== 0) {
    
    //Variables iniciales para procesar la información
    let mainTitle = "";    
    let detailTitle = "";
    const titleQuantity = "Cantidad";
    const titleDescription = "Descripción";
    const titleUnitPrice = "V. Unidad";
    const titleTotalPrice = "V. Total";
    const lenghtQuantity = titleQuantity.length;
    const lengthDescription = titleDescription.length;
    const lengthUnitPrice = titleUnitPrice.length;
    const lenghtTotalPrice = titleTotalPrice.length;
    const maxWidthPrint = 74;
    const minWidthPrint = 65;

    // Variables para guardar cada cosa del producto por separado
    let quantity = [];
    let description = [];
    let unitPrice = [];
    let totalPrice = [];

    // Agrupar productos pedidos en caso de estar distribuidos en varios arrays
    groupProductsOrdered();

    // Obtener datos
    productsOrdered.forEach((product) => {
      quantity.push(product[1]);
      description.push(allProducts[product[0]].nombre);
      unitPrice.push(allProducts[product[0]].precio);
      totalPrice.push(allProducts[product[0]].precio * product[1]);
    });

    console.log(description);

    // Preparar impresión de datos

    // Títulos iniciales
    let leftUnderscores = ""
    let rightUnderscores = ""

    // Separadores
    let hypens = ""
    let separator = ""
    let bottomSeparator = ""

    // Títulos
    const maxDescriptionLength = Math.max.apply(null, description.map(item => item.length));
    let missingDescriptionSpacing = 0;
    let letfDescriptionSpacing = 0;
    let rightDescriptionSpacing = 0;
    let leftDescriptionTextSpacing = "";
    let rightDescriptionTextSpacing = "";
    let titles = "";

    if ((maxDescriptionLength - lengthDescription) > 0){      
      for (let i = 0; i < maxDescriptionLength; i++) {
        hypens += "-" 
      }
      if ((maxDescriptionLength - lengthDescription) % 2 === 0){
        missingDescriptionSpacing = (maxDescriptionLength - lengthDescription) / 2;
        letfDescriptionSpacing = missingDescriptionSpacing + 1
        rightDescriptionSpacing = missingDescriptionSpacing;
      } else {
        missingDescriptionSpacing = Math.round((maxDescriptionLength - lengthDescription) / 2);
        letfDescriptionSpacing = missingDescriptionSpacing;
        rightDescriptionSpacing = missingDescriptionSpacing - 1;
      }
      for (let i = 0; i < letfDescriptionSpacing; i++) {
        leftDescriptionTextSpacing += " ";
        leftUnderscores += "_"
      }
      for (let i = 0; i < rightDescriptionSpacing; i++) {
        rightDescriptionTextSpacing += " ";
        rightUnderscores += "_"
      }
      mainTitle = `:__________${leftUnderscores}___________-:: Restaurante JS ::-________${rightUnderscores}____________:`;
      detailTitle = `:__________${leftUnderscores}_________-:: Detalle del pedido ::-________${rightUnderscores}__________:`;
      separator = `:__-::----------:-:-${hypens}-:-:-----------:-:----------::-__:`;
      titles = `:__-:: ${titleQuantity} :-: ${leftDescriptionTextSpacing}${titleDescription}${rightDescriptionTextSpacing} :-: ${titleUnitPrice} :-: ${titleTotalPrice} ::-__:`;
      bottomSeparator = `:__-::----------:-:-------${hypens}---------:-:----------::-__:`;
    } else {
      mainTitle = ":_____________________-:: Restaurante JS ::-____________________:";
      detailTitle = ":___________________-:: Detalle del pedido ::-__________________:";
      separator = ":__-::----------:-:-------------:-:-----------:-:----------::-__:";
      titles = `:__-:: ${titleQuantity} :-: ${titleDescription} :-: ${titleUnitPrice} :-: ${titleTotalPrice} ::-__:`;
      bottomSeparator = ":__-::----------:-:---------------------------:-:----------::-__:";
    }

    // Imprimir la orden
    console.log(mainTitle);
    console.log(detailTitle);
    console.log(separator);
    console.log(titles);
    console.log(separator);
    console.log(":__-::      999 :-: Hamburguesa sencilla :-:        $7 :-:    $9999 ::-__:");
    console.log(":__-::      999 :-: Hamburguesa doble    :-:       $14 :-:     $999 ::-__:");
    console.log(":__-::       99 :-: Gaseosa              :-:        $3 :-:      $99 ::-__:");
    console.log(":__-::        9 :-: Limonada natural     :-:        $5 :-:       $9 ::-__:");
    console.log(separator);
    console.log(":__-::----------:-:  El valor total a pagar es $99999  :-:----------::-__:");
    console.log(bottomSeparator);
  } else {
    console.error("Aún no ha realizado ningún pedido. \n Adicione productos y la cantidad a su pedido con la función order()");    
  }
  return "Operación terminada";
};

/**
 * Función para pagar el pedido.
 */
