const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')

const nameTxt = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

nameTxt.addEventListener('change', (event) => {
    if (event.target.value.trim().length > 0) {
        formIsValid.name = true
    } else {
        formIsValid.name = false
    }
})

email.addEventListener('change', (event) => {
    if (event.target.value.trim().length > 0) {
        formIsValid.email = true
    } else {
        formIsValid.name = false
    }
})

gender.addEventListener('change', (event) => {
    formIsValid.gender = event.target.checked
})

terms.addEventListener('change', (event) => {
    formIsValid.terms = event.target.checked
    event.target.checked ? submitBtn.removeAttribute('disabled') : submitBtn.setAttribute('disabled', true)

})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => !value) // !value es equivalente a value == false
    if (valid == -1) {
        form.submit()
    } else {
        alert('Form invalid')
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault() // Evitar que se actualice la página al enviar el formulario
    validateForm()
})