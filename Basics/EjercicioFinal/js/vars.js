/**
 * Expresiones regulares para los productos del restaurante. Usados para validar información.
 */
const regexCR = /^CR00(?:1|2|3)$/g; // Para Comidas Rápidas
const regexA = /^A00(?:1|2)$/g; // Para Adicionales
const regexB = /^B00(?:1|2)$/g; // Para Bebidas

// Constante para contener los datos del cliente
const user = { nombre: "", deuda: 0 };

/**
 * Variable que contiene todos los productos del restaurante.
 */
const allProducts = {
  CR001: {
    nombre: "Hamburguesa sencilla",
    precio: 7,
  },
  CR002: {
    nombre: "Hamburguesa doble",
    precio: 14,
  },
  CR003: {
    nombre: "Perro sencillo",
    precio: 5,
  },
  A001: {
    nombre: "Papas a la francesa",
    precio: 2,
  },
  A002: {
    nombre: "Papas estilo country",
    precio: 4,
  },
  B001: {
    nombre: "Limonada natural",
    precio: 5,
  },
  B002: {
    nombre: "Gaseosa",
    precio: 3,
  },
};

/**
 * Variable que contendrá la información del pedido del usuario.
 */
const productsOrdered = [];

/**
 * Variable que contiene el historial de pedidos o ventas realizadas.
 * Contiene el nombre del cliente, los IDs de los productos pedidos con su cantidad,
 * el valor total del pedido y la fecha que fue realizado el pago.
 */

const orderHistory = [];