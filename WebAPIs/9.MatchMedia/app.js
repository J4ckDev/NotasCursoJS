/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)

    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

// Era lo que antes se usaba para concer el ancho de la página, pero
// Tiene problemas con los dispositivos móviles, por lo que no
// es conveniente de usar para hacer cosas con el ancho de la página.
//console.log(innerWidth)

const title = document.getElementById('title')

// Para solucionar lo de innerWidth, surge matchMedia
// Cualquier media query válida en csss es válida como parámetros en matchMedia

const mql = matchMedia('(min-width:400px) and (orientation: landscape)')
// Si la media query coincide con los especificado en la clave del objeto matches
// retorna un true, en caso contrario un false
// console.log(mql.matches)

const applyMatchMedia = (mql) => {
    // Colocar cosas de css no es recomendable, debería ir en los archivos donde corresponda
    // esto solo se hizo para el ejemplo de como usar esta WebAPI
    // Esto si se puede hacer
    // title.classList.add('nombre de clase definida en archivo css')
    document.body.style.backgroundColor = mql.matches ? 'red' : 'royalblue'
}

// Con este evento se escucha cuando cambia el tamaño del viewport
addEventListener('resize', () => applyMatchMedia(mql))
// Y Aquí se aplican los estilos cuando cargue la página
// applyMatchMedia(mql)
// Pero otra forma para estar seguros es la siguiente
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))