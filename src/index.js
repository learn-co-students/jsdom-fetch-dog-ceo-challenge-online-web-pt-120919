console.log('%c HI', 'color: firebrick')

// on page load
document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    loadBreedOptions(); //on page load, fetch all the dog breeds using the url above
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" //fetch the images using the url above
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => { // parse the response as JSON
            json.message.forEach(image => addImage(image)) // add image elements to the DOM for each image in the array
        });
}

function addImage(dogPicUrl) { // add image elements to the DOM for each image in the array
    let imgContainer = document.querySelector('#dog-image-container');
    let newImageElement = document.createElement('img');
    newImageElement.src = dogPicUrl;
    imgContainer.appendChild(newImageEl);
}
  
  function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(json => {
  
        breeds = Object.keys(json.message);
        updateBreedList(breeds);
        addBreedSelectListener();
      });
  }

  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }
  
  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) { //add the breeds to the page in an <ul>
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor); //Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click
  }
  
  function changeColor(event) {
    event.target.style.color = 'blue'; 
  }

// parse the response as JSON
// add image elements to the DOM for each image in the array