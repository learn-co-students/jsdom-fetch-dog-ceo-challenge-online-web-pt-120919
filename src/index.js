//let breeds; 

//document.addEventListener('DOMContentLoaded', function() {
  //  fetchImages();
  //  fetchBreeds();
//});


//function fetchImages() {
  //  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //fetch(imgUrl)
   // .then(resp => resp.json())
   // .then(results => {
       // results.message.forEach(image => addImage(image))
   // });
   //}

   //function fetchBreeds() {
     //   const breedUrl = "https://dog.ceo/api/breeds/list/all"
      //  fetch(breedUrl)
      //  .then(resp => resp.json())
       // .then(results => {
       //     breeds = Object.keys(results.message);
          //  renderBreeds(breeds);
           // addBreedSelectListener();
       // });
    //}

    
    //function renderBreeds(breeds) {
       // const ul = document.querySelector('#dog-breeds');
       // breeds.forEach(breed => {
           // const li = document.createElement('li')
          //  li.innerHTML = breed.name 
           // ul.appendChild(li)
        //})
    //}
    
    //function selectBreedsStartingWith(letter) {
       // renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
     //}

    //function addBreedSelectListener() { 
        //let breedDropdown = document.querySelector('#breed-dropdown');
        //breedDropdown.addEventListener('submit', function(e) {
          //  selectBreedsStartingWith(e.target.value);
        //});
    //}

    
      //function updateColor(event) {
       // event.target.style.color = 'blue';
     // }

     let breeds;

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => getDogs(json));

fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => getBreeds(json));

function getDogs(json) {
  const imgContainer = document.querySelector("#dog-image-container");
  let arr = json.message;
  arr.forEach(imgUrl => {
    const img = document.createElement("img");
    img.src = imgUrl;
    imgContainer.append(img);
  });
}

function getBreeds(json) {
  const breedContainer = document.querySelector("#dog-breeds");
  breeds = Object.keys(json.message);
  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerText = breed;
    breedContainer.append(li);
    makeBlueOnClick(li);
  });
}

function filterDropdown() {
  const breedContainer = document.querySelector("#dog-breeds");
  const select = document.querySelector("#breed-dropdown");
  const letter = select.value;
  breedContainer.innerHTML = "";
  breeds.forEach(breed => {
    if (breed.startsWith(letter)) {
      const li = document.createElement("li");
      li.innerText = breed;
      breedContainer.append(li);
      makeBlueOnClick(li);
    }
  });
}

function makeBlueOnClick(li) {
  li.addEventListener("click", function(e) {
    li.style.color = "blue";
  });
}


    