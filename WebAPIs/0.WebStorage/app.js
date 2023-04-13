/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:
            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras
            dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y 
            restablecimientos).
            localStorage hace lo mismo, pero persiste incluso cuando el navegador es cerrado y sea abierto de nuevo.
        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor 
        y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // sessionStorage.setItem('name', 'Dorian')
    // sessionStorage.setItem('person', JSON.stringify({name: 'J4ckDev', email: 'j4ckdev@gmail.com'}))
    const key = form.key.value
    // sessionStorage.setItem(key, form.value.value)
    localStorage.setItem(key, form.value.value)

    const option = document.createElement('option')
    option.textContent = key

    keys.appendChild(option)

    form.reset()
})

keys.addEventListener('change', () => {
    // document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
    document.getElementById('infoValue').textContent = localStorage.getItem(keys[keys.selectedIndex].textContent)
})

// sessionStorage.clear() //Eliminar todo el contenido
localStorage.clear() //Eliminar todo el contenido
// sessionStorage.removeItem('hola') // Elimina la clave valor especificada
// localStorage.removeItem('hola') // Elimina la clave valor especificada
