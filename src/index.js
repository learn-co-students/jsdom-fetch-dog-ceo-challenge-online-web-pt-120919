document.addEventListener('DOMContentLoaded', function() {
    
    function fetchImages() {
        fetch('https://dog.ceo/api/breeds/image/random/4').then(resp => resp.json()).then(json => renderImages(json));
    }
    
    function renderImages(images) {
        const div = document.getElementById('dog-image-container');
        
        for (const imageUrl of images.message) {
            const img = document.createElement('img');
            img.setAttribute('src', imageUrl);
            div.appendChild(img);
        }
    }
    
    document.getElementById('breed-dropdown').addEventListener("change", fetchBreeds);

    function fetchBreeds() {
        fetch('https://dog.ceo/api/breeds/list/all').then(resp => resp.json()).then(json => renderBreeds(json));
    }
    
    function renderBreeds(breeds){
        document.querySelectorAll("ul#dog-breeds li").forEach(node => node.remove());
        const letter = document.getElementById('breed-dropdown').value;
        const ul = document.getElementById('dog-breeds');
    
        for (const breed in breeds.message){
            if (breed.charAt(0) == letter){
                const li = document.createElement('li');
                li.innerText = breed;
                ul.appendChild(li);
            }
        }
    
    }
    
    fetchImages();
    fetchBreeds();

  });
