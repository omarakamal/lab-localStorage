function showListing(){
   let listing = JSON.parse(localStorage.getItem('listing'))

   console.log('listing',listing)
   console.log('listing')

   DivOne = document.getElementById("one-item-container")


    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    img.src = listing.picture ;
    h2.innerHTML = listing.title;
    p.innerHTML = listing.price;

    DivOne.appendChild(img)
    DivOne.appendChild(h2)
    DivOne.appendChild(p)
}

window.addEventListener('load',()=>{
    showListing()
})




