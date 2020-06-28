console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

let filteredBreeds = []
function image() {
    return fetch(imgUrl).then(resp => resp.json()).then(json => renderImage(json));
}

function renderImage(json) {
    let dogImage = document.getElementById("dog-image-container");
    json.message.forEach(image => {
      let newImg = document.createElement('img');
      newImg.src = image;
      dogImage.appendChild(newImg);
    });
  }

  
  function getDogBreed() {
      return fetch(breedUrl).then(resp => resp.json()).then(json => breedArray(json));
  }

  function breedArray(json) {
    allBreeds = Object.keys(json.message)
    renderBreed(allBreeds);
  }

  function renderBreed(breeds) {
    let dogBreedList = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
        let listItem = document.createElement("li");
        listItem.textContent = breed;
        listItem.addEventListener("click", changeColor)
        dogBreedList.appendChild(listItem);

    });
  }

  function changeColor(event) {
    event.target.style.color = "red";
  }

  function dropdownFiltering() {
    const dropdownElem = document.getElementById('breed-dropdown');
    const dogBreedList = document.getElementById("dog-breeds");
    dropdownElem.addEventListener('change', function (){
      while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
      filterBreeds(this.value);
    })
  }
  
  function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    renderBreed(filteredBreeds);
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    image()
    getDogBreed()
    dropdownFiltering()
  })