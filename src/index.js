console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';



document.addEventListener("DOMContentLoaded", () => {
  let breedDropdown = document.getElementById("breed-dropdown");
  fetchDogImages();
  fetchDogBreeds();
  breedDropdown.addEventListener("change", filterBreeds);
  breedDropdown.addEventListener("click", filterBreeds);
});

function renderImages(images) {
  const div = document.getElementById("dog-image-container");
  images.forEach(image => {
    const img = document.createElement('img')
    img.src = image;
    div.appendChild(img);
  })
}

function renderBreeds(breeds) {
  breeds.forEach(breed => {
    const listItem = document.createElement('li')
    const list = document.getElementById("dog-breeds");
    listItem.innerHTML = breed;
    listItem.addEventListener("click", () => {
      changeColor(listItem);
    });
    list.appendChild(listItem);
  })
}

function fetchDogImages() {
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    renderImages(json.message);
  });
}

function fetchDogBreeds() {
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    renderBreeds(Object.keys(json.message));
  });
}

function changeColor(ele) {
  ele.style.color = 'red';
}

function filterBreeds(event) {
  let breeds = document.getElementById('dog-breeds').children;
  let breedDropdown = document.getElementById("breed-dropdown");
  let letter = breedDropdown.options[breedDropdown.selectedIndex].value;

  for (let i = 0; i < breeds.length; i++) {
    if (breeds[i].innerHTML[0] == letter) {
      breeds[i].style.display = 'list-item';
    } else {
      breeds[i].style.display = 'none';
    }
  }

  if (letter == 'a') { breedDropdown.removeEventListener("click", filterBreeds); }
  
}