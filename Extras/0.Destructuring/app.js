// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

// la forma clásica para extraer datos
// const name = person.name
// const age = person.age
// const email = person.email

// Forma de extraer datos con destructuring
// Es importante que los nombres del objeto a deestructurar sean los mismos, si se quiere otro nombre, 
// especificar como clave, el valor de como se llama la propiedad del objeto, y como valor se
// coloca el nombre de la variable.
const {name: nombre, age, email} = person

// console.log(nombre)
// console.log(age)
// console.log(email)


// En el caso de los arrays sería así
// const numbers = [1, 2, 3, 4]
// const [uno, dos, tres, cuatro] = numbers

// console.log(uno)
// console.log(dos)
// console.log(tres)
// console.log(cuatro)

// otro uso que tiene es en las funciones
// const printPerson = ({name}) => {
//     console.log(name)
// }

// const printPerson = ({name:nombre}) => {
//     console.log(nombre)
// }

// printPerson(person)

const getUsers = async () => {
    const {data:users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}

getUsers()