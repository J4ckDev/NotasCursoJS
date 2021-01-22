/**
 * Función para mostrar el menú.
 */
function menu() {
  const welcome = ":__-:: Bienvenidos al Restaurante JS ::-__:";
  let ids = Object.keys(allProducts); // Variable que obtiene los Ids existentes
  const comidas = [];
  const adicionales = [];
  const bebidas = [];

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
 * Función que recibe parámetros ilimitados para pedir productos.
 * Ej order(["CR001", 2], ["B002", 1]), Esto significa que el usuario está pidiendo 2 hamburguesas sencillas y una gaseosa.
 * @param {Array} products Escribir arrays con el formato ["IdProducto", Cantidad] - La cantidad permitida es de máximo 999 productos.
 * @returns {String} Operación terminada
 */

const order = (...products) => {
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
          if (product[1] > 0 && product[1] <= 999) {            
            productsOrdered.push(product);
            console.log(`El producto ${product[0]} fue adicionado correctamente a su pedido.`);
          } else if (product > 999) {
            product[1] = 999;
            productsOrdered.push(product)
            console.log(`El producto ${product[0]} fue adicionado correctamente a su pedido con el máximo permitido de 999`)
          } else {
            console.error("No se pueden agregar cantidades negativas o iguales a cero.");
          }
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
 * productsOrdered = [["B001", 7],["B002", 2]] - Si la suma supera 999, se devuelve esa cantidad.
 */

const groupProductsOrdered = function() {
  if (productsOrdered.length !== 0) {
    let productsGrouped = {};
    productsOrdered.forEach(product => {
      productsGrouped[product[0]] = (productsGrouped[product[0]] || 0) + product[1];
    }); 
    // Limpiar la variable productsOrdered
    let numberOfProducts = productsOrdered.length;
    productsOrdered.splice(0, numberOfProducts);

    // Obtener los ids de los productos
    let ids = Object.keys(productsGrouped);

    // Crear de nuevo el array productsOrdered con todos los productos agrupados y validar que la cantidad por producto no supere 999
    ids.forEach(id => {
      if (productsGrouped[id] <= 999) {
        productsOrdered.push([id, productsGrouped[id]]);
      } else {
        productsOrdered.push([id, 999]);
      }      
    }); 
  } else {
    console.error("No ha realizado el pedido. Use menu() para obtener el menú y use order() para agregar productos. \n Ej. order([\"CR001\", 5], [\"B002\", 5])");
  }  
  return "Operación terminada";
}

/**
 * Función para mostrar el detalle de la orden actual.
 */

const orderDetail = () => {
  if (productsOrdered.length !== 0) {
    
    //Variables iniciales para procesar la información
    let mainTitle = "";    
    let detailTitle = "";
    const titleQuantity = "Cantidad";
    const titleDescription = "Descripción";
    const titleUnitPrice = "V. Unidad";
    const titleTotalPrice = "V. Total";
    const lengthDescription = titleDescription.length;

    // Variables para guardar cada cosa del producto por separado
    let quantity = [];
    let description = [];
    let unitPrice = [];
    let totalUnitPrice = [];

    // Agrupar productos pedidos en caso de estar distribuidos en varios arrays
    groupProductsOrdered();

    // Obtener datos
    productsOrdered.forEach((product) => {
      quantity.push(product[1]);
      description.push(allProducts[product[0]].nombre);
      unitPrice.push(allProducts[product[0]].precio);
      totalUnitPrice.push(allProducts[product[0]].precio * product[1]);
    });
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

    // Variables para la construcción de las filas 
    let rows = [];

    // Variables usadas en la adaptación de la descripción
    let counter = 0; // Contador para saber en que posición va del array descripción 
    let actualLength =0; // Guarda el tamaño del producto actual del array description
    let missingLength = 0; // Guarda el valor del espaciado faltante
    let missingSpacing = ""; // Guarda los espacios que se adicionan dependiendo del valor de missingLength

    // Construcción de la tabla responsive 

    // Iniciar la creación de filas y agregar espaciado para la columna cantidad
    quantity.forEach(item => {
      let temp = String(item)
      switch (temp.length) {
        case 1:
          rows.push(`:__-::        ${temp} :-: `)
          break;

        case 2:
          rows.push(`:__-::       ${temp} :-: `)
          break;

        default:
          rows.push(`:__-::      ${temp} :-: `)
          break;
        }
    });

    if ((maxDescriptionLength - lengthDescription) > 0){      
      // Guiones para los separadores
      for (let i = 0; i < maxDescriptionLength; i++) {
        hypens += "-" 
      }

      // Agregar la descripción y el espaciado faltante
      description.forEach(product => {
        actualLength = product.length;        
        missingLength = maxDescriptionLength - actualLength;
        for (let i = 0; i < missingLength; i++) {
          missingSpacing += " ";
        }        
        rows[counter] += (product + missingSpacing + " :-: ");
        counter += 1;
        missingSpacing = "";
      });

      if ((maxDescriptionLength - lengthDescription) % 2 === 0){
        missingDescriptionSpacing = (maxDescriptionLength - lengthDescription) / 2;
        letfDescriptionSpacing = missingDescriptionSpacing;
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
      // Agregar la descripción y el espaciado faltante
      description.forEach(product => {
        actualLength = product.length;        
        missingLength = lengthDescription - actualLength;
        for (let i = 0; i < missingLength; i++) {
          missingSpacing += " ";
        }
        rows[counter] += (product + missingSpacing + " :-: ");
        counter += 1;
        missingSpacing = "";
      });

      mainTitle = ":_____________________-:: Restaurante JS ::-____________________:";
      detailTitle = ":___________________-:: Detalle del pedido ::-__________________:";
      separator = ":__-::----------:-:-------------:-:-----------:-:----------::-__:";
      titles = `:__-:: ${titleQuantity} :-: ${titleDescription} :-: ${titleUnitPrice} :-: ${titleTotalPrice} ::-__:`;
      bottomSeparator = ":__-::----------:-:---------------------------:-:----------::-__:";
    }

    // Agregar valor unidad
    counter = 0;// Reiniciar contador
    unitPrice.forEach(item => {
      let temp = String(item)
      switch (temp.length) {
        case 1:
          rows[counter] += `       $${item} :-: `; 
          break;

        default:
          rows[counter] += `      $${temp} :-: `;
          break;
        }
        counter += 1;
    });

    // Agregar valor total por producto y obtener el valor total del pedido
    let totalPrice = 0;
    counter = 0;// Reiniciar contador
    totalUnitPrice.forEach(item => {
      totalPrice += item;
      let temp = String(item)
      switch (temp.length) {
        case 1:
          rows[counter] += `      $${item} ::-__:`; 
          break;

        case 2:
          rows[counter] += `     $${item} ::-__:`; 
          break;

        case 3:
          rows[counter] += `    $${item} ::-__:`; 
          break;

        case 4:
          rows[counter] += `   $${item} ::-__:`; 
          break;

        default:
          rows[counter] += `  $${temp} ::-__:`;
          break;
        }
        counter += 1;
    });
    user.deuda = totalPrice;

    // Creación de la fila que contiene el valor total de la orden
    let totalText = `:__-::----------:-: Total a pagar $${totalPrice} :-:----------::-__:`;
    let finalLength = rows[0].length; // Obtener el tamaño final de la fila
    /* 
    Reutilizando las variables missingDescriptionSpacing, letfDescriptionSpacing, rightDescriptionSpacing, 
    leftDescriptionTextSpacing y rightDescriptionTextSpacing para formar el texto responsive y mostrar el total
    */
    // Limpiar variables
    leftDescriptionTextSpacing = "";  
    rightDescriptionTextSpacing = "";  

    missingDescriptionSpacing = finalLength - totalText.length;

    if (missingDescriptionSpacing % 2 === 0) {
      letfDescriptionSpacing = rightDescriptionSpacing = missingDescriptionSpacing / 2;
    } else {
      missingDescriptionSpacing = Math.round(missingDescriptionSpacing / 2)
      letfDescriptionSpacing = missingDescriptionSpacing;
      rightDescriptionSpacing = missingDescriptionSpacing - 1;
    }
    for (let i = 0; i < letfDescriptionSpacing; i++) {
      leftDescriptionTextSpacing += " ";      
    }
    for (let i = 0; i < rightDescriptionSpacing; i++) {
      rightDescriptionTextSpacing += " ";      
    }
    totalText = `:__-::----------:-: ${leftDescriptionTextSpacing}Total a pagar $${totalPrice}${rightDescriptionTextSpacing} :-:----------::-__:`;
    
    // Imprimir la orden
    console.log(mainTitle);
    console.log(detailTitle);
    console.log(separator);
    console.log(titles);
    console.log(separator);     
    rows.forEach(product => {
      console.log(product);
    });
    console.log(separator);
    console.log(totalText);
    console.log(bottomSeparator);
  } else {
    console.error("Aún no ha realizado ningún pedido. \n Adicione productos y la cantidad a su pedido con la función order()");    
  }
  return "Operación terminada";
};

// Limpieza de variables
const cleanVars = () => {
  user.nombre = "";
  user.deuda = 0;
  let numberOfProducts = productsOrdered.length;
  productsOrdered.splice(0, numberOfProducts);
} 

// Guardar productos en el historial
const saveHistory = (nombre) => {
  const actualDate = new Date();
  const productStrings = productsOrdered.map((product) => {
    if (product[1] === 1) {
      return `Una unidad de ${allProducts[product[0]].nombre}.`;      
    } else {
      return `${product[1]} unidades de ${allProducts[product[0]].nombre}.`;
    }
  });
  let data = {
    cliente: nombre,
    productos: productStrings,
    total: user.deuda,
    fecha: actualDate
  };
  orderHistory.push(data);
}

/**
 * Función para pagar la orden. * 
 * @param {string} nombre Escribir el nombre de la persona que va a pagar la orden
 * @param {number} montoPagado Escribir el monto para pagar el total de la orden.
 */

const payOrder = function (nombre,montoPagado) {
  if (productsOrdered.length !== 0 && user.deuda !== 0) {
    if (typeof nombre === "string") {
      user.nombre = nombre;
      if (typeof montoPagado === "number") {
        if (montoPagado < user.deuda) {
          console.error(`${nombre}, no te alcanza para pagar el pedido.`);
        } else if (montoPagado === user.deuda) {
          saveHistory(nombre);
          console.log(`${nombre} tu pago fue realizado correctamente.`);
          cleanVars();
        } else {
          saveHistory(nombre);
          console.log(`${nombre} tu pago fue realizado correctamente y tu cambio es de $${montoPagado - user.deuda}.`);
          cleanVars();
        }
      } else {
        console.error(`Escriba un monto válido, escribió un valor del tipo ${typeof monto}`);
      }
    } else {
      console.error(`Escriba un nombre válido, escribió un valor del tipo ${typeof nombre}`);
    }
  } else {
    console.error("Aún no ha realizado ningún pedido o no ha obtenido el detalle de la orden.");
  } 
};

/**
 * Mostrar el historial de las ventas realizadas.
 */

const showOrderHistory = () => {
  if (orderHistory.length !== 0 ) {    
    orderHistory.forEach(item => {
      console.log(`${item.fecha} - ${item.cliente} pagó un total de $${item.total} por los siguientes productos:`);
      item.productos.forEach(product => console.log(`- ${product}`));
  });
  } else {
    console.error("Aún no se ha realizado ninguna venta.");
  }
}


/**
 * Mostrar el valor total de las ventas realizadas.
 */
const totalSales = function () {  
  if (orderHistory.length !== 0) {
    let total = 0;
    orderHistory.forEach(item => {
      total += item.total;
    });
    console.log(`El monto total recaudado por todas las ventas fue de $${total}.`);
  } else {
    console.error("Aún no se ha realizado ninguna venta.");
  }
}