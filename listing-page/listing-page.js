
let container = document.getElementById('outer-container');
function showListing(){

    let productObj = JSON.parse(localStorage.getItem('listing'));


   console.log('listing',productObj)

   let productDiv = document.createElement('div');

   let newTitle = document.createElement('h3');
   newTitle.innerHTML = productObj.title;

   let newImg = document.createElement('img');
   newImg.src = productObj.picture;
   newImg.style.width = '30%'
   newImg.style.objectFit = 'contain';

   let newPrice = document.createElement('h3');
   newPrice.innerHTML = productObj.price;

    productDiv.appendChild(newImg);
    productDiv.appendChild(newTitle);
    productDiv.appendChild(newPrice);

    container.appendChild(productDiv);

}

window.addEventListener('load',()=>{
    showListing()
})