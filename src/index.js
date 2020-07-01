console.log('%c HI', 'color: firebrick')

// on page load
document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedOptions();
  });

// fetch the images using the url above
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res => res.json())
      .then(json => {
        json.message.forEach(image => addImage(image))
      });
    }
    
      function addImage(dogPicUrl) {
        let imgContainer = document.querySelector('#dog-image-container');
        let newImageEl = document.createElement('img');
        newImageEl.src = dogPicUrl;
        imgContainer.appendChild(newImageEl);
      }
      
      function loadBreedOptions() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
          .then(res => res.json())
          .then(json => {
      
            breeds = Object.keys(json.message);
            updateBreedList(breeds);
            addBreedSelectListener();
          });
      }

// parse the response as JSON
// add image elements to the DOM for each image in the array
