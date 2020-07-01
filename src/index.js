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

// parse the response as JSON
// add image elements to the DOM for each image in the array
