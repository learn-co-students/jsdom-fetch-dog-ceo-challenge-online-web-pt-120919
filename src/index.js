console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []
let filteredBreeds = []

document.addEventListener('DOMContentLoaded', function () {
  fetchImage()
  fetchDogBreed()
  dropdownFiltering()
});


function fetchImage() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImage(json));
}

function renderImage(json) {
    let dogImage = document.getElementById("dog-image-container");
    json.message.forEach(image => {
      let newImg = document.createElement('img');
      newImg.src = image;
      dogImage.appendChild(newImg);
    });
  }

  function fecthDogBreed() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => breedArray(json));
}

function breedArray(json) {
  breeds = Object.keys(json.message)
  renderBreed(breeds);
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
  const dropdown = document.getElementById('breed-dropdown');
  const dogBreedList = document.getElementById("dog-breeds");
  dropdown.addEventListener('change', () => {
    while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
    filterBreeds(this.value);
  })
}

function filterBreeds(letter) {
  filteredBreeds = [];
  filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
  renderBreed(filteredBreeds);
}

