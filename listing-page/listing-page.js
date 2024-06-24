function showListing(){
    let listingItem = JSON.parse(localStorage.getItem('listing'))

    let h1    = document.createElement("h1")
    let img   = document.createElement("img")
    let p     = document.createElement("p")
    let newDiv = document.getElementById("one-item-container")

    h1.innerHTML= listingItem.title
    img.src     = listingItem.picture
    img.alt     = listingItem.title
    p.innerHTML = `$ ${listingItem.price}`
    console.log(img)
    newDiv.appendChild(h1)
    newDiv.appendChild(img)
    newDiv.appendChild(p)
    
    console.log(newDiv)
}

window.addEventListener('load',()=>{
    showListing()
})