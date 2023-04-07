const sendDataBtn = document.getElementById('button')

sendDataBtn.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: 'Aliqua ex consectetur velit fugiat fugiat culpa in est proident mollit est.',
            userId: 1
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})