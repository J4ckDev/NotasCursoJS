/**
 *  Las expresiones regulares permiten buscar patrones en un texto. Esto permite identificar los fragmentos de un
 *  texto para validar su existencia o para realizar alguna sustitución.
 * 
 *  Sintaxis:
 *  /caracteres, comodines, delimitadores, cantidad o todos/Banderas
 *  
 *  Comodínes:
 *      1. Susticución: El punto representa cualquier caracter en el patron. Ej. Si se usa un regex /./g, este va a coincidir 
 *                   con todos y cada uno de los caracteres en un texto.
 *      2. Listado de caracteres válidos: Entre corchetes es posible colocar la lista de los caracteres válidos. Ej. Si usamos 
*                    el regex /[aeiou]/g, esta expresión va a coincidir con todas las vocales que encuentra en el texto.
 *      3. Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango en los símbolos ASCII (https://ascii.cl/). 
 *              Ej. El regex /[a-z]/g obtiene todas las letras minúsculas de un texto.
 *      4. Mezcla entre rangos y listas: Es posible unir lo presentado en el punto 2 y 3 en un solo par de corchetes. 
 *                                       Ej. Con el regex /[0-5aeiou]/g estaríamos identificando los números de 0 al 5 
 *                                       y las vocales.
 *      5. Cadenas completas: Entre paréntesis colocaremos las palabras completas o los grupos de caracteres que
 *                            deseamos coincidir, separandolas por un pipe. Ej. Con el regex /([1-5]|Lorem)/g 
 *                            obtenemos los números del 1 al 5 y la palabra Lorem.
 * 
 *  Delimitadores:
 *      ^ Antes de este símbolo no puede haber nada
 *      $ después de este símbolo no puede haber nada
 * 
 *  Cantidad:
 *      - llaves: Lo que esté antes de la llave de apertura debe aparecer una cantidad exacta de veces. las combinaciones
 *                posibles son:
 *                {n} Debe repetirse n veces.
 *                {n,m} Debe repetirse entre n y m veces
 *                {n,} Debe repetírse como mínimo n veces y sin máximo
 *      - Asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir
 *      - Interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
 *      - Operador +: Lo que está antes del + tiene que estar una vez como mínimo. 
 * 
 *  Caracteres especiales:
 *      \s: Coincide con cualquier tipo de caracter de espacio como un espacio, tabulación, salto de línea, etc.
 *      \S: Coinicide con todo menos con caracteres de espacio.
 *      \d: Coincide con un caracter de número. Equivale a [0-9].
 *      \D: Coincide con cualquier caracter no numérico. Equivale a [^0-9]
 *      \w: Coincide con cualquier caracter alfanumeríco, incluyendo el guión bajo. Equivale a [A-Za-z0-9_]
 *      \W: Coincide con todo menos caracteres de palabra.
 * 
 *  Banderas:
 *      i: Ignore case. Ignora la validación de mayúsculas y minúsculas
 *      g: Global. Busca todas las coincidencias en un texto
 *      m: Multi line. Cuando son usados los delimitadores, los aplica ignorando el salgo de línea al final.
 * 
 *  Bibliografía:
 *      - https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */

const text = document.getElementById('text').textContent
const regEx = /lorem/gi
// Otra forma de definir expresiones regulares en JS es la siguiente
const regEx2 = new RegExp('lorem', 'gi')
const regEx3 = new RegExp('/lorem/', 'gi')

// Aquí con la bandera i puede encontrar lorem en minúscula o mayúscula
console.log(regEx.test(text))

// Tocaría colocar exactamente la palabra a buscar
console.log(text.includes('Lorem')) 
