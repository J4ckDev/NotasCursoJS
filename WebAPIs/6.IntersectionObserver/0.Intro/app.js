
const boxes = document.querySelectorAll('.box')

const watchBoxes = (boxes) => {
    // console.log(boxes)
    boxes.forEach(box => {
        if (box.isIntersecting) {
            console.log(box.target.id + ' is intersecting')
        }
    })
}

// Opciones para configurar la observación
// - En la clave root se coloca lo que queremos tener como referencia de observación, por defecto es el viewport
// - En la clave rootMargin colocamos tamaño adicional a lo que estemos observando con root. Si en este caso como
//   estamos con el viewport adicionamos 200px en todas las direcciones a dicha ventana de observación, 
//   aunque no vemos la caja siguiente a la que estamos viendo en pantalla, esta aparece como si la estuvieramos viendo.
// - En la clave threshold definimos valores entre 0 y 1 para indicarle al observador que porcentaje del
//   elemento debe aparecer en pantalla para aparecer como intersectado. Por defecto es 0% y por eso antes
//   de que aparezca la siguiente a la que estamos viendo pero estamos cerca, aparece como intersectada. Por
//   lo que podemos colocar que aparezca como intersectada cuando tenga un 25% de la caja en pantalla. Este
//   porcentaje también aplica si el elemento ya estaba oculto y se vuelve a subir con el scroll para volverlo a ver.

const options = {
    //root: 
    //rootMargin: '200px'
    threshold: 0.25
}

// instanciar el observer
const observer = new IntersectionObserver(watchBoxes, options)
// Colocar el observer
boxes.forEach(box => observer.observe(box))