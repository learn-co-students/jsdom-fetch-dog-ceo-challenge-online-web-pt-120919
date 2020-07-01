//console.log('%c HI', 'color: firebrick')
//Challenge 1
    function fetchImages(){
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderImages(json.message))
    }

    function renderImages(images) {
       //console.log(JSON.stringify(images))
        const container = document.getElementById('dog-image-container')

        images.forEach(image => { 
            var img = document.createElement('img');
            img.src = image 
            container.appendChild(img);
        });

    // for (let i = 0; i < images.length; i++){
    //     console.log('in loop')
    //     let img = document.createElement('img');
    //     img.src = images[i];
    //     container.appendChild(img)
    // }
    }

    document.addEventListener("DOMContentLoaded", function() {
        fetchImages()
        fetchBreeds()
        document.getElementById("breed-dropdown").addEventListener('change', fetchBreeds)
    })

//Challenge 2 & 3
    function fetchBreeds(){
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreeds(Object.keys(json.message)))
    }

    function renderBreeds(breeds) {
        let filterLetter = document.getElementById("breed-dropdown").value

        let filteredBreeds = breeds.filter(breed => breed.charAt(0) == filterLetter)
 
        let ul = document.getElementById('dog-breeds');
        ul.innerHTML = '';

        filteredBreeds.forEach(breed => { 
            let li = document.createElement("li");
            li.innerHTML = breed
            li.addEventListener("click", highlightBreed);
            ul.appendChild(li)
        });
    }

    function highlightBreed(){
        this.style.color = "blue"
    }


