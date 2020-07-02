console.log('%c HI', 'color: firebrick')


function fetchDogImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogImages(json.message))
}

function renderDogImages(json) {
  let container = document.getElementById('dog-image-container')
  json.forEach(image => {
    let img = document.createElement('img')
    img.src = image
    container.appendChild(img)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages()
  fetchDogBreeds()
})

function fetchDogBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
   .then(resp => resp.json())
   .then(json => renderDogBreeds(Object.keys(json.message)))
}

function renderDogBreeds(breeds) {

  let breedLetter = document.getElementById("breed-dropdown").value
  document.getElementById("breed-dropdown").addEventListener('change', fetchDogBreeds)
  let letterBreeds = breeds.filter(breed => breed.charAt(0) == breedLetter)

  let breedList = document.getElementById('dog-breeds')
  breedList.innerHTML = ''

  letterBreeds.forEach(breed => {
    let li = document.createElement('li')
    li.innerHTML = breed
    li.addEventListener('click', coloredBreed)
    function coloredBreed() {
      this.style.color = '#be0009'
    }
    breedList.appendChild(li)
  })

}
