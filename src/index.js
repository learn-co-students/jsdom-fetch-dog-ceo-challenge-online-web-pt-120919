let breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    fetchImageUrl()
    fetchBreedUrl
})

const fetchImageUrl = () => {
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(results => {
        //add image elements to the DOM for each image in the array
        results.message.forEach(image => addImage(image))
    })
};

const addImage = (dogPicUrl) => {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
}

const fetchBreedUrl = () => {
    fetch(`${breedUrl}`)
    .then(response => response.json())
     .then(results => {

        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    })
}

const removeChildren = (element) => {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
const selectBreedsStartingWith = (letter) => {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
 const addBreedSelectListener = () => {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }  

const renderBreed = (breed) => {
    ul = document.querySelector("#dogbreeds")
    li = document.createElement('li')

    li.innerHTML = breed;

    ul.appendChild(li)
    li.addEventListener('click', updateColor)

}

const updateColor = (e) => {
    e.target.style.color = 'palevioletred';
}