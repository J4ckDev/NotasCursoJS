// https://developer.mozilla.org/es/docs/Web/API/notification


const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
    // Existen tre estados para el tipo de permiso
    // - default la configuración del navegador por defecto
    // - denied bloqueado por el usuario
    // - granted permitido por el usuario
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    // Pedir permiso para permitir notificaciones
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(res => console.log(res))

}

const notify = () => {
    // Recibe 2 parámetros. El primero es el título y es obligatorio. 
    // El segundo parámetro recibe opciones para personalizar la notificación.
    const options = {
        body: 'Esta es mi primera notificación',
        icon: 'campana.png',
        data: 'info extra',
        lang: 'es',
        tag: 'notificación demo'
    }
    const notification = new Notification('hola mundo', options)

    notification.addEventListener('close', () => console.log('Notificación cerrada'))
    notification.addEventListener('show', () => console.log('Notificación abierta'))

    console.log(notification)
}