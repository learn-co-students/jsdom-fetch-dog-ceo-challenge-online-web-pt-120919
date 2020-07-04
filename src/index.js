//Challenge 1
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json.message))
}

function renderImages(images) {
   //console.log(JSON.stringify(images))
    const container = document.getElementById('dog-image-container')

    for (let image of images) { 
        var img = document.createElement('img');
        img.src = image 
        container.appendChild(img);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
    document.getElementById("breed-dropdown").addEventListener('change', fetchBreeds)
})

//Challenge 2, 3 & 4
function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(Object.keys(json.message))) //need keys 
}

function renderBreeds(breeds) {
    //console.log(JSON.stringify(breeds))
    let filterLetter = document.getElementById("breed-dropdown").value

    let filteredBreeds = breeds.filter(breed => breed.charAt(0) == filterLetter)

    let ul = document.getElementById('dog-breeds');
    ul.innerHTML = '';

    for (let breed of filteredBreeds) { 
        let li = document.createElement("li");
        li.innerHTML = breed
        li.addEventListener("click", highlightBreed);
        ul.appendChild(li)
    }
}

function highlightBreed(){
    this.style.color = "blue"
}