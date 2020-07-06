const endPoint = "https://api.pexels.com/v1/search?query=people"


document.addEventListener('DOMContentLoaded', () =>{
  console.log("here!")
  getPhotos();


  })


function getPhotos(){
  fetch(endPoint)
  .then(response => console.log(response))
 
}