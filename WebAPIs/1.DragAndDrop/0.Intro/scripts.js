/*
    API drag & drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

smile.addEventListener('dragstart', () => {
    console.log('Drag start')
})

smile.addEventListener('drag', () => {
    console.log('Drag')
})

smile.addEventListener('dragend', () => {
    console.log('Drag end')
})

dropZone.addEventListener('dragenter', () => {
    console.log('Drag enter')
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault()
    console.log('Drag over')
})

// Para que drop funcione, debe existir la función de dragover y debe estar configurada para evitar el comportamiento
// por defecto, esto permite que dragover reciba eventos del tipo drop.
// Más info en https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
dropZone.addEventListener('drop', () => {
    console.log('Drop')
})

dropZone.addEventListener('dragleave', () => {
    console.log('Drag leave')
})