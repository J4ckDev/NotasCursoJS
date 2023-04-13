
const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

pendingTasks.addEventListener('dragstart', (e) => {
    //dataTransfer. Contiene toda la información del evento a arrastrar
    //setData: Establece la información que queremos compartir
    //getData: Establece la información que queremos obtener
    e.dataTransfer.setData('text/plain', e.target.id) //Especificamos que vamos a compartir el id en texto plano
    // console.log(e.dataTransfer.getData('text')) //Obtenemos el id
})


pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e)=>{
    e.target.classList.remove('active')
})

// Obligatorio para que funcione drop
finishedTasks.addEventListener('dragover', (e)=>e.preventDefault())

finishedTasks.addEventListener('drop', (e)=>{
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    element.classList.add('ended')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})

finishedTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
    e.target.classList.remove('ended')
})

finishedTasks.addEventListener('dragend', (e)=>{
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e)=>e.preventDefault())

pendingTasks.addEventListener('drop', (e)=>{
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    element.classList.remove('ended')
    pendingTasks.appendChild(finishedTasks.removeChild(element))
})
