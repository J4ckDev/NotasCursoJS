/**
 * Expresiones regulares para los productos del restaurante. Usados para validar información.
 */
let regexCR = /^CR\d{3}$/g; // Para Comidas Rápidas
let regexA = /^A\d{3}$/g; // Para Adicionales
let regexB = /^B\d{3}$/g; // Para Bebidas

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
let productsOrdered = [];

