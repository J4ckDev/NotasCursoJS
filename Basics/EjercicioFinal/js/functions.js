/**
 * Función para mostrar el menú.
 */
function menu() {
    const welcome = ":__-:: Bienvenidos al Restaurante JS ::-__:";
    let ids = Object.keys(products);
    let regexCR = /^H\d{3}$/g; // Regex para comidas rápidas
    let regexA = /^A\d{3}$/g; // Regex para Adicionales
    let comidas = [];
    let adicionales = [];
    let bebidas = [];
  
    console.log(welcome);
    console.log("")
  
    ids.forEach((id) => {
      /**
       * Obtener la cantidad de caracteres para completar con puntos los items del menú.
       */
      let prodLength = ` ${id} - ${products[id].nombre}  $${products[id].precio} `.length;
      let numDots = welcome.length - prodLength; 
  
      let dots = "";
      for (let index = 0; index < numDots; index++) {
          dots += "."; // Generar el conjunto de puntos
      }
      
      /**
       * Separar los productos para poderlos imprimir en orden.
       */

      if (id.search(regexCR) === 0) {
        comidas.push(` ${id} - ${products[id].nombre} ${dots} $${products[id].precio}`);
      } else if (id.search(regexA) === 0) {
        adicionales.push(` ${id} - ${products[id].nombre} ${dots} $${products[id].precio}`);
      } else {
        bebidas.push(` ${id} - ${products[id].nombre} ${dots} $${products[id].precio}`);
      }
    }); 
  
    /**
     * Imprimir el menú con el formato ID - Nombre - Precio
     */

    console.log(":_________-:: Comidas rápidas ::-_________:");
    comidas.forEach(comida =>{
        console.log(comida);
    });
    console.log("");
    console.log(":___________-:: Adicionales ::-___________:");
    adicionales.forEach(adicional => {
        console.log(adicional);
    });
    console.log("");
    console.log(":_____________-:: Bebidas ::-_____________:");
    bebidas.forEach(bebida => {
        console.log(bebida);
    });
    console.log("");
    console.log(":__________-:: Vuelve pronto ::-__________:");
};