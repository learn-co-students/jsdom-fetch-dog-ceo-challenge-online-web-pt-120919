console.log('%c HI', 'color: firebrick')

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

  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
  })