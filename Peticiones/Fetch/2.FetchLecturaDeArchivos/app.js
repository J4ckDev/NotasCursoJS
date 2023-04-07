const btnImg = document.getElementById('btnImg')
const btnPdf = document.getElementById('btnPdf')

btnImg.addEventListener('click', () => {
    fetch('./sample.jpeg')
        .then(response => response.blob())
        .then(img => document.getElementById('img').src = URL.createObjectURL(img))
})

btnPdf.addEventListener('click', () => {
    fetch('./sample.pdf')
        .then(response => response.blob())
        .then(pdf => {
            const downloadPdfButton = document.getElementById('pdf')
            downloadPdfButton.href = URL.createObjectURL(pdf)
            downloadPdfButton.style.display = 'inline'
        })
})