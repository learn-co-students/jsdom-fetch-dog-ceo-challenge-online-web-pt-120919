console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImages() {
    fetch(imgUrl).then(resp => resp.json()).then(json => returnImages(json))
}

function returnImages(images) {
    let container = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        img = document.createElement('img')
        img.src = image
        img.width = '250'
        img.height = '200'
        container.appendChild(img)
    })
}

function fetchBreeds() {
    fetch(breedUrl).then(resp => resp.json()).then(json => returnBreeds(json))
}

function returnBreeds(breeds) {
    let list = document.getElementById('dog-breeds')
    let value = document.getElementById('breed-dropdown').value
    Object.keys(breeds.message).forEach(key => {
        let item = document.createElement('li')
        if (value == key[0]) {
            item.innerText = key
            list.appendChild(item)
            item.addEventListener('click', function(){
                item.style.color = '#267EB0'
            })
        }
    })
}

function filterBreeds() {
    let selector = document.getElementById('breed-dropdown')
    let list = document.getElementById('dog-breeds')
    selector.addEventListener('change', function(){
        list.innerHTML = ""
        fetchBreeds()
    })
}

document.addEventListener('DOMContentLoaded', function(){
    fetchImages() 
    fetchBreeds()
    filterBreeds()
})

