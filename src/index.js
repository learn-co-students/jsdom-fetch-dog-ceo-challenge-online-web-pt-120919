console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', e => {
    fetchDogs();
    fetchDogBreeds();
});

let dogImageContainer;
let dogImageTag;
let dogBreedsUl;
let breedLiTag;
let allBreeds;
let selectBoxTag;

function fetchDogs(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => {
        return res.json();
    })
    .then(json => {
        addImages(json);
    })
    .catch(err => console.log(err));

    function addImages(json){
        dogImageContainer = document.querySelector('div#dog-image-container');
        json.message.forEach(image_url => {
            dogImageTag = document.createElement('img');
            dogImageTag.setAttribute('src', `${image_url}`);
            dogImageContainer.appendChild(dogImageTag);
        });
    }
}

function fetchDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => {
        return res.json();
    })
    .then(json => {
        addBreeds(json);
        filterBreeds();
        console.log(json);
    })
    .catch(err => console.log(err));

    dogBreedsUl = document.querySelector('ul#dog-breeds');

    function addBreeds(json){
        for (let value of Object.keys(json.message)){
            breedLiTag = document.createElement('li');
            breedLiTag.addEventListener('click', textColorChange);
            breedLiTag.textContent = value;
            if (breedLiTag.textContent === ''){
                continue;
            } else {
                dogBreedsUl.appendChild(breedLiTag);
            }
        }
        function textColorChange(){
            this.style.color = '#037bfc'
        }
    }

    function filterBreeds(){
        allBreeds = dogBreedsUl.querySelectorAll('li');
        selectBoxTag = document.querySelector('select#breed-dropdown');

        selectBoxTag.addEventListener('change', setFilter);

        function setFilter(e){
            let option = e.target.value;
            let i = 0;
            while (i < allBreeds.length) {
                let thisLi = allBreeds[i];
                if (option === 'all') {
                    showBreedIn(thisLi);
                } else if (thisLi.textContent[0] === option){
                    showBreedIn(thisLi);
                } else {
                    hideBreedIn(thisLi);
                }
                i++;
            }
            function showBreedIn(arg){
                arg.style.display = 'block';
            }

            function hideBreedIn(arg){
                arg.style.display = 'none';
            }
        }
    }
}