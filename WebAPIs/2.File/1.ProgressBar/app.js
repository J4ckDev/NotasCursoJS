const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

// fileInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e) => {
//         // // Carga actual del archivo
//         // console.log(e.loaded)

//         // // Tamaño total del archivo
//         // console.log(e.total)

//         // // Porcentaje actual de carga
//         // console.log(e.loaded * 100/ e.total)

//         const percentage = Number.parseInt(e.loaded * 100/ e.total)

//         progress.style.width = `${percentage}%`
//     })

//     fileReader.addEventListener('loadend', ()=>{
//         // console.log('File uploaded')
//         progress.style.width = '100%'
//     })
// })

const root = document.documentElement

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        const percentage = Number.parseInt(e.loaded * 100/ e.total)
        root.style.setProperty('--bar-width', `${percentage}%`)
    })

    fileReader.addEventListener('loadend', ()=>{
        root.style.setProperty('100%')
    })
})