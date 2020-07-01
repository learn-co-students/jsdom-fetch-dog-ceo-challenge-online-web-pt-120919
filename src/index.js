console.log('%c HI', 'color: firebrick')
// images -----------------------------------
function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const imagesMessage = images.message
    
    for (const image of imagesMessage){
        appendImage(image)
    }
  }

  function appendImage(image){
    const dogPic = document.getElementById('dog-image-container')
    const imageTag = document.createElement('img')
    
    imageTag.src = image
    dogPic.appendChild(imageTag)
  }

  function fetchImage(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}
// breeds ----------------------------------------------
function fetchBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreed(json))
}

function renderBreed(breeds){
    const breedArray = breeds.message
    for (const breed in breedArray){
        appendBreed(breed)
    }
}

function appendBreed(breed){
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerHTML = breed
    ul.appendChild(li)
}

  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchBreed()
  })