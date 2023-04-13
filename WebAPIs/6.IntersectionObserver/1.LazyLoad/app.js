// https://developer.mozilla.org/en-US/docs/web/api/intersection_observer_api
// https://latteandcode.medium.com/javascript-intersection-observer-1410b743c991

const images = document.getElementById('images')
let page = 1
const getImages = () => {
    axios(`https://picsum.photos/v2/list?page=${page}&limit=5`)
        .then(res => {
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('img')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            })
            images.appendChild(fragment)
            setObserver()
            page++
        })
}

const watchImg = (imgs, lastObserver) => {
    imgs.forEach(img => {
        if (img.isIntersecting) {
            getImages()
            // Para eliminar el observer de la última imagen
            lastObserver.unobserve(img.target)
        } else {
            //quitar animación
        }
    })
}

const setObserver = () => {
    const options = {
        threshold: 0.25
    }

    const observer = new IntersectionObserver(watchImg, options)
    observer.observe(images.lastElementChild)
}

getImages()