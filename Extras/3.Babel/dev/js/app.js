// babel se utiliza para permitir que nuestro código con estructuras de Javascript modernas, sea transpilado
// a un javascript más antiguo y que sea soportado por todos los navegadores. 
// https://babeljs.io/docs/

// Pasos para instalar y configurar babel
// 1. Con node.js instalado ejecutar el comando npm init -y en un terminal
// 2. Instalar babel con el comando npm install @babel/cli @babel/core @babel/preset-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev
// 3. Crear un archivo llamado gulfile.babel.js. Este archivo de configuración para gulp, esto nos automatizará la tarea de
//    convertir nuestro código viejo a código nuevo cada vez que nosotros guardamos.
// 4. Crear el archivo de configuración de babel llamado .babelrc. El cuál solo contendrá los presets.
// 5. Por último instalar gulp de forma global con el comando npm install -g gulp y después ejecutar el comando gulp en la
//    taíz del proyecto

const numbers = [1,2,3,4]

const printNumbers = () => {
    console.log(...numbers)
}

const person = {
    name: "J4ckDev",
    email: "j4ckdev@gmail.com"
}

const {name:nombre, email} = person

console.log(nombre)
console.log(email)

console.log('Hola mundo')