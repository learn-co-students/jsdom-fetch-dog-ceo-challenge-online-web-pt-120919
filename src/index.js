console.log('%c HI', 'color: firebrick')

const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// images -----------------------------------


function fetchImage(){
    return fetch(imageUrl)
    .then(resp => resp.json())
    .then(json => 
      renderImages(json))
}

function renderImages(images) {
  // console.log(images) images array is under messages
    const imagesMessage = images.message
    // console.log(imagesMessage)
    for (const image of imagesMessage){
        appendImage(image)
    }
  }

  function appendImage(image){
    const dogPic = document.getElementById('dog-image-container')
    const imageTag = document.createElement('img')
    
    imageTag.src = image 
    // image is where image is located
    dogPic.appendChild(imageTag) 
    // puts the image on the DOM
  }


// breeds ----------------------------------------------
// on page load, fetch all the dog breeds using the url
function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(json => {
        // the return value is an Array containing all of the keys at the top level of the Object

        console.log(json)
        breeds = Object.keys(json.message)
        // display all dog breeds on page
        renderDogBreeds(breeds)
        // filter breeds that start with a particular letter
        addBreedSelectListener()
      })
  }
  
  // add the breeds to the page in an <ul> (take a look at the included index.html)
  function renderDogBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
  
    for (breed of breeds) {
      const li = document.createElement('li')
  
      li.innerText = breed
      ul.appendChild(li)
      li.addEventListener('click', changeColor)
    }
  }
  
  // add JavaScript so that the font color of a particular <li> changes on click.
  // This can be a color of your choosing.
  // When the user clicks any of the dog breed list items, the color the text should change.
  function changeColor(event) {
    event.target.style.color = 'Red'
  }
  
  // Once we are able to load all of the dog breeds onto the page,
  // add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
  function addBreedSelectListener() {
    const dropDown = document.getElementById('breed-dropdown')
  
    dropDown.addEventListener('change', updateBreedList)
  }
  
  // For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a.
  function updateBreedList(event) {
    // get the <ul>
    const breedsList = document.getElementById('dog-breeds')
    // remove existing <li>
    breedsList.querySelectorAll('li').forEach(n => n.remove());
    // update <ul> with breeds that start with event.target.value
    renderDogBreeds(breeds.filter(breed => breed.startsWith(event.target.value)));
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchDogBreeds()
    
    
  })