console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const filteredBreeds = document.querySelector('select#breed-dropdown');
  const allBreeds = document.querySelector('ul#dog-breeds');

  fetchImage();
  fetchBreeds();

  function fetchImage() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(response => addImages(response))
  }

   function addImages(images) {
     let doggies = document.getElementById("dog-image-container");
     for (const image of images.message) {
       new_pic = document.createElement('img');
       new_pic.src = image;
       new_pic.height = "275";
       new_pic.width = "300";
       doggies.appendChild(new_pic);
     }
   }

   function fetchBreeds() {
     fetch(breedUrl)
      .then(function(breeds) {
        return breeds.json();
      }).then(function(json) {
        let all_breeds = Object.keys(json.message)
        addBreeds(all_breeds);
      });
   }

    function addBreeds(breeds) {
      ul = document.getElementById("dog-breeds");
      for (const breed of breeds) {
        li = document.createElement("li");
        li.innerText = breed;
        li.style.cursor = "pointer";
        li.addEventListener('click', changeLiColor);
        ul.appendChild(li);
      }
    }

    function changeLiColor(event) {
       event.target.style.color = "#2FEEA3";
    }

    // FILTER BREEDS BASED ON FILTER//

    //listen for event change, filter based on event
    filteredBreeds.addEventListener("change", filterBreeds);

    function filterBreeds() {
      //const breedChoice = event.target.value;
      const breedChoice = filteredBreeds.value;
      const allChildren = allBreeds.children;
      showNames(allChildren);

      //iterate over all breeds
      //if first letter of breed === value in select tag,
      // display breed, else, set display to none
      for (let breed of allChildren) {
        const firstLetter = breed.textContent[0];
          if (firstLetter !== breedChoice) {
            breed.style.display = "none";
          }
      }
    }

    //display all names of breeds on reload, keeping all breeds in dom
    function showNames(names) {
      for (let name of names) {
        name.style.display = "list-item";
      }
    }
});


/*
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
  fetchImage();
  fetchBreeds();
  show();
});
  //fetches all dog images
  function fetchImage() {
    fetch(imgUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      addImages(json);
    });
  }

  //get all images and add them to dom
  function addImages(images) {
    let dog_container = document.getElementById("dog-image-container");
    for (const image of images.message) {
      let picture = document.createElement('img')
      picture.src = image
      dog_container.appendChild(picture)
    }
  }

  //fetch all breeds and add them to ul
  function fetchBreeds(filter) {
    fetch(breedUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //inspect fetch file. each breed is a key, so we need to get all keys
      let breeds = Object.keys(json.message)
      addBreeds(breeds, filter);

    });
  }

  function show() {
    let dropDown = document.querySelector("#breed-dropdown");
    dropDown.addEventListener("change", function(event) {
      // debugger
      let filter = event.target.value;
      fetchBreeds(filter);
    })
  }

  function addBreeds(breeds, filter) {
    let breed_container = document.getElementById("dog-breeds");
    breed_container.innerHTML = "";
    if (filter) {
      breeds.forEach( breed => {
        if (breed[0] === filter) {
          let li = document.createElement('li')
          li.innerText = breed;
          breed_container.appendChild(li);
        }
      })
    }else {
      breeds.forEach((breed ) => {
        let li = document.createElement('li')
        li.innerText = breed;
        breed_container.appendChild(li);
      });
    }
    let dogColor = document.querySelectorAll("#list-dogs")
      dogColor.forEach(element => {
          element.addEventListener("click", function(event){
            event.preventDefault()
              element.style.color = "red"
          })

      })
    //for (const breed of breeds) {
      //iterate through each breed and create and append an li element to ul in dom
    //  let li = document.createElement('li');
    //  li.innerHTML = breed;
    //  breed_container.appendChild(li);
    //  li.style.cursor = "pointer";
    //  li.addEventListener('click', changeLiColor);
    //  filterBreed(breed);
  //  }
  }
  */

  // add color to li elements in ul functionality

  // function changeLiColor(event) {
  //   event.target.style.color = "#2FEEA3";
  // }

  //letter = document.getElementById('breed-dropdown').value;
  //console.log(letter)
  //function filterBreed(breed) {
  //  let firstLetter = document.getElementById('breed-dropdown').value;
  //  if (firstLetter !== breed.charAt(0) {
  //    breed.remove();
  //  }
  //}


  // function filterBreed(breed) {
  //   select = document.querySelector('select#breed-dropdown');
  //   select.addEventListener('change', deleteBreed())
  //
  //   function deleteBreed() {
  //       if (select.value !== breed.charAt(0)) {
  //         breed.remove();
  //       }
  //   }
  // }


//});
