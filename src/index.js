console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function renderimg(dogs) {
    const imgDiv = document.getElementById("dog-image-container");
    dogs.message.forEach(dog => {
      const img = document.createElement('img');
      img.src = dog;
      imgDiv.appendChild(img);
    }) 
}

function renderBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      ul.appendChild(li);

      //Challenge 3
      li.addEventListener("click", function(e) {
          e.target.style.color = "blue";
      })
    }) 
}

function breedFilter(breeds) {
    const filter = document.getElementById("breed-dropdown");
    filter.addEventListener('change', function (event) {
        
        const ul = document.getElementById("dog-breeds");
        ul.innerHTML = "";

        const filteredBreeds =  breeds.filter(breed =>  {return breed.startsWith(event.target.value); } );
        renderBreeds(filteredBreeds);
      });
}

document.addEventListener('DOMContentLoaded', function() {
    //Challenge 1
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderimg(json));
    //Challenge 2
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            renderBreeds(Object.keys(json.message));
            //Challenge 4
            breedFilter(Object.keys(json.message));
        });
})
  