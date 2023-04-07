// const getName = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('J4ckDev')   
//         }, 1500)
//     })
// }

// const sayHello = async () => {
//     const name = await getName()
//     return `Hello ${name}`
// }

// sayHello().then(response => console.log(response))

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

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    if (!user) { throw new Error(`User with id ${id} not found.`) }
    else { return user }
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) { throw new Error(`${user.name} hasn't an email.`) }
    else {
        return {
            id: user.id,
            name: user.name,
            email: email.email
        }
    }
}

const getInfo = async (id) => {
    const user = await getUser(id)
    const response = await getEmail(user)
    return `${user.name} email is ${response.email}`
}

getInfo(2)
    .then(result => console.log(result))
    .catch(error => console.log(error.message))