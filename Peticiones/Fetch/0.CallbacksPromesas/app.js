/**
 * Los callbacks son funciones que son ejecutadas a través de otra función.
 * Estos callbacks son asíncronos.
 */
/* const getuser = (id, callback) => {
    const user = {
        name: 'J4ckDev',
        id
    }
    // id solo equivale a id:id

    id == 2 ? callback('User not exist') : callback(null, user)
}

getuser(2, (error, user) => error ? console.error(error) : console.log(`Username is ${user.name}`)) */

const users = [
    {
        id: 1,
        name: 'Daniel'
    },
    {
        id: 2,
        name: 'Martha'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'daniel@email.com'
    },
    {
        id: 2,
        email: 'martha@email.com'
    }
]

// const getEmail = (user, renderResult) => {
//     const email = emails.find(email => email.id == user.id)
//     if (!email) renderResult(`${user.name} hasn't an email.`)
//     else renderResult(null, {
//         id: user.id,
//         name: user.name,
//         email: email.email
//     })
// }

// const getUser = (id, renderResult) => {
//     const user = users.find(user => user.id == id)
//     if (!user) renderResult(`User with id ${id} not found.`)
//     else renderResult(null, user)
// }

// getUser(3, (error, user) => {
//     if (error) return console.error(error)
//     getEmail(user, (error, data) => {
//         if (error) return console.error(error)
//         console.table(data)
//     })
// })

/**
 * Una promesa es un objeto que tiene 2 callbacks internos.
 * Estado fulfilled -> Ha terminado la ejecución.
 * 
 * Para leer el contenido de las promesas hay que usar métodos.
 * Si todo sale bien, se usa .then para resolver el contenido de la promesa
 * SI hay un error, se usa .catch para manejar ese error
 */

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return new Promise((resolve, reject) => {
        if (!user) reject(`User with id ${id} not found.`)
        else resolve(user)
    })
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't an email.`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

// getUser(2)
//     .then(user => getEmail(user))
//     .then(result => console.table(result))
//     .catch(error => console.error(error))

getUser(2)
    .then(getEmail)
    .then(console.table)
    .catch(console.error)