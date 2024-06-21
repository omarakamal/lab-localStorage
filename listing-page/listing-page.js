function showListing(){

   let listing = JSON.parse(localStorage.getItem('listing'))
   console.log('listing',listing)
   console.log('listing')

   let itemListedDiv = document.getElementById('one-item-container')

   titleElement = document.createElement('h2')
   priceElement = document.createElement('p')
   pictureElement = document.createElement('img')

   titleElement.innerHTML = listing.title
   priceElement.innerHTML = listing.price
   pictureElement.src = listing.picture

   itemListedDiv.appendChild(pictureElement)
   itemListedDiv.appendChild(titleElement)
   itemListedDiv.appendChild(priceElement)

}

window.addEventListener('load',()=>{
    showListing()
})