const alertDiv = document.getElementById('alert')

addEventListener('online', ()=>{
    setAlert(1)
})

addEventListener('offline', ()=>{
    setAlert(0)
})

const setAlert = (status) => {
    alertDiv.classList.remove('alert--online')
    alertDiv.classList.remove('alert--offline')

    status === 0 ? 
        setTimeout(() => alertDiv.classList.add('alert--offline'), 100):
        setTimeout(() => {
            alertDiv.textContent = "Great! You're online again"
            alertDiv.classList.add('alert--online')
        }, 100)
}