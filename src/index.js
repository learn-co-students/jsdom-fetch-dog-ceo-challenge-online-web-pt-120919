console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", fetchdogs(), fetchAlldogs())

function fetchdogs(){

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(dogs => {
        const dogdiv = document.getElementById("dog-image-container")
for(let dog of dogs.message){
dogdiv.innerHTML += `<img src="${dog}">` }
})}

function fetchAlldogs(){

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(dogs => {
            const dogdiv2 = document.getElementById("dog-breeds")
            
    dogBreed = Object.keys(dogs.message) //grabbing promise response object and grabbing the keys
    dogdiv2.innerHTML += list(dogBreed) // appending this list using a function that outputs as list
    })}

    function list(array){
        const dogarray = array.map(function(breed){
            return `<li onClick= "changeColors()" >${breed} </li>`
        })
        return dogarray.join('')
    }


    function changeColors(){
   event.target.style.color = 'blue'
    }

    function filter(){
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(dogs => {
              const dogdiv2 = document.getElementById("dog-breeds")
              let e = document.getElementById("breed-dropdown")

      dogBreed = Object.keys(dogs.message)
     let newarray = dogBreed.filter(x => x.startsWith(e.value))
     dogdiv2.innerHTML = newarray
    

      })}
    
