console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => data.message.forEach(function(image){
        const container = document.getElementById("dog-image-container")
        const newImg = document.createElement("img")
        newImg.classList.add("images")
        container.appendChild(newImg)
        newImg.src = image
    
    }))
    //event listener for the sorting button
    document.addEventListener("change", dogGetter)

    //gtting the data on the dog breeds
    function dogGetter() {

    fetch("https://dog.ceo/api/breeds/list/all") 
    .then(response => response.json())
    .then(data => {
        console.log("hey!")
        const breedObject = data.message
        const breedList = document.getElementById("dog-breeds")
        breedList.innerHTML = ""
        for(const breed in breedObject){
            // console.log(breed)
            const option = document.querySelector("select").value
            // const list = document.createElement("ul")
            const newList = document.createElement("li")
            function colorChange() {
                // listItem = document.querySelector("li")
                // listItem.style.color="red"
                event.target.style.color="red"
            }
            if(breed[0] === option){
                newList.innerText = breed
                newList.addEventListener("click", colorChange)
                breedList.appendChild(newList)}  
            }
    })}

})



// document.addEventListener('DOMContentLoaded', function() {
//    dogImg()
//    loadBreeds()
//   })

// function dogImg(){
//  return fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(resp => resp.json())
//     .then(json => {
//     json.message.forEach(image => appImg(image))    
//  });   
// }

// function appImg(dogPic){    
//     let container = document.getElementById('dog-image-container');
//     let newImage = document.createElement('img');
//         newImage.src = dogPic;
//         container.appendChild(newImage);    
// }

// function loadBreeds(){    
//    return fetch('https://dog.ceo/api/breeds/list/all')
//     .then(resp => resp.json())
//     .then(json => addBreeds(json)    
//     );
// }

// function addBreeds(json){  
//     let ul = document.getElementById('dog-breeds');
//     let li = document.createElement('li');
//     let dogObj = json.message 

//     Object.keys(dogObj).forEach(breed => {
//         console.log(breed)
//         ul.innerHTML = breed;
//         // ul.appendChild(li);
//     });
// }