/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos
        Libreria indexedDB
            https://dexie.org/
*/

const idDb = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

//Confirmar que el navegador soporte indexedDB y exista un formulario.
if (idDb && form) {
    // Borrar base de datos
    // idDb.deleteDatabase('tasksList')

    let db
    const request = indexedDB.open('tasksList', 1) //Nombre de la base de datos y versiòn de la base de datos

    // Solo es ejecutado al abrir la base de datos por primera vez
    request.onsuccess = () => {
        db = request.result
        console.log('TasksList opened', db)
        readData()
    }

    // Una vez abierta, para el crud se debe usar este método.
    request.onupgradeneeded = () => {
        db = request.result
        console.log('TaskList created', db)
        // Crear un almacén de datos y definir que la llave será el título de la tarea
        db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        })
        // Crear un almacén de datos y definir que la llave será autoincremental
        // db.createObjectStore('tasks', {
        //     autoIncrement: true
        // })
    }
    request.onerror = (error) => {
        console.log('Error', error)
    }

    // Para agregar datos se utilizan transacciones. para esto es encesario definir el almacén de datos y el modo
    // de la transacción.
    const addData = (data) => {
        // Aquí se configura la transacción con cual almacén de datos vamos a trabajar y el modo de operación
        // Por defecto es de solo lectura, pero en nuestro caso será de lectura y escritura
        const transaction = db.transaction(['tasks'], 'readwrite')
        // Aquí se ejecuta realmente la transacción especificando el almacén con el que se va a trabajar
        const objectStore = transaction.objectStore('tasks')
        // Agregar los datos
        objectStore.add(data)
        readData()
    }

    // Para obtener la información de una tarea en específico se usa una estructura similar a la función de añadir tarea
    // con la diferencia que se usa get() en lugar de add() y se usa onsuccess
    const getData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(data)
        request.onsuccess = () => {
            form.task.value = request.result.taskTitle
            form.priority.value = request.result.taskPriority
            form.button.dataset.action = 'update'
            form.button.textContent = 'Update task'
        }
    }

    // Para actualizar la tarea se utliza lo mismo de la función de agregar, con la diferencia que se usa el método
    // put() para actualizar los datos
    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        // Es necesario tener cuidado con put() ya que si no existe el dato lo adiciona
        const request = objectStore.put(data)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add task'
            readData()
        }
    }

    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.delete(key)
        request.onsuccess = () => {
            console.log('Task deleted')
            readData()
        }
    }

    const readData = () => {
        // Aquí se configura la transacción que en nuestro caso será de solo lectura.
        const transaction = db.transaction(['tasks'], 'readonly')

        const objectStore = transaction.objectStore('tasks')
        // Obtener los datos usando un cursor
        const request = objectStore.openCursor()

        // Como es un ciclo, aquí se define un fragmento que vaya guardando las tareas cargadas
        const fragment = document.createDocumentFragment()

        let countData = 0

        request.onsuccess = (e) => {
            const cursor = e.target.result
            // Este condicional es porque al momento de que el cursor termine de leer los datos o si no hay
            // retorna un null como result
            if (cursor) {
                // console.log(cursor.value)
                const taskTitle = document.createElement('p')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)

                const taskPriority = document.createElement('p')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                const taskUpdate = document.createElement('button')
                //dataset adiciona el atributo data-
                //En este caso se uso dataset.action, por lo que en el lemento html aparecerá data-action
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('button')
                taskDelete.textContent = 'Delete'
                taskDelete.dataset.type = 'delete'
                taskDelete.dataset.key = cursor.key
                fragment.appendChild(taskDelete)
                countData += 1
                // El cursor solo lee un registro a la vez, por lo que hay que decirle que siga leyendo mientras
                // hayan más registros
                cursor.continue()
            } else if (countData > 0) {
                console.log('Todas las tareas leídas correctamente.')
                // console.dir(fragment) // Ver el contenido de un fragment
                tasks.textContent = ''
                tasks.appendChild(fragment)
            } else {
                console.log('No existen tareas creadas.')
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        console.log(data)

        const actionToExecute = e.target.button.dataset.action

        if (actionToExecute == 'add') {
            addData(data)
        } else if (actionToExecute == 'update') {
            updateData(data)
        }

        form.reset()

    })

    tasks.addEventListener('click', (event) => {
        if (event.target.dataset.type == 'update') {
            getData(event.target.dataset.key)
        } else if (event.target.dataset.type == 'delete') {
            deleteData(event.target.dataset.key)
        }
    })
}