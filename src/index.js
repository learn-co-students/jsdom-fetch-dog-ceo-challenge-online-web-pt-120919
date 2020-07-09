console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breeds = [];

function fetchDogs() {
    fetch(imgUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(dogs) {
        const dog = dogs["message"]
        addDog(dog)
    })
};

function addDog(dog) {
    for (const d of dog) {
        appendDog(d)
    }
};

function appendDog(d) {
    const container = document.querySelector("#dog-image-container");
    const img = document.createElement("IMG");

    img.src = d;
    container.appendChild(img);
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(breeds) {
        const breed = breeds["message"]
        addBreed(breed)
    })
};

function addBreed(breed) {
    for (const b in breed) {
        appendBreed(b)
        breeds.push(b)
    }
};

function appendBreed(b) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = b
    ul.appendChild(li)

    li.addEventListener("click", function(e) {
        e.target.style.color = "springgreen";
    })
};

function filterBreeds() {
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", function(e) {
        breedsStartWith(e.target.value)
    })
};

function breedsStartWith(letter) {
    const filteredArray = breeds.filter(breed => breed.startsWith(letter));
    const allBreeds = document.querySelector("#dog-breeds")
    allBreeds.innerHTML = ""
    for (const element of filteredArray) {
        appendBreed(element)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs(), fetchBreeds(), filterBreeds()
  })