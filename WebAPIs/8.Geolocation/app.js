// https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation
// Free geocoding API https://geocode.maps.co/
// Para más exactitud podría usarse google maps

const button = document.getElementById('button')
const city = document.getElementById('city')
const country = document.getElementById('country')
const state = document.getElementById('state')
const road = document.getElementById('road')

const getPosition = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    
    axios(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
        .then(res => {
            const address = res.data.address
            city.textContent = address.city
            country.textContent = address.country
            state.textContent = address.state
            road.textContent = address.road
        })
}

// Si el usuario ha denegado el acceso a la geoLocalización, en el console log obtendrémos un error
const error = (error) => {
    console.log(error)
}

// enableHighAccuracy por defecto está false. Esto ayuda a que si por ejemplo estamos en un dispositivo móvil
// sean utilizados los diferentes sensores del dispositivo.
// timeout Es el tiempo que le establecemos para que nos devuelva la posición en milisegundos
// maximumAge indica cuanto tiempo estará en caché la información de la posición. Con un valor de 0 obtenemos
// la posición en tiempo real, o cuando se haga clic en el botón como en este caso.
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation
    // Recibe 3 parámetros, el primero es obligatorio y los otros dos opcionales.
    // El primero es la función ausar
    // El segundo es que hacer en caso de error
    // Y la última son opciones adicionales
    geolocation.getCurrentPosition(getPosition, error, options)
})

