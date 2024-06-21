

function showListing(){
 
let listing = JSON.parse(localStorage.getItem('listing'))

console.log(listing)

document.getElementById('title').innerHTML = listing.title
document.getElementById('picture').src = listing.picture
document.getElementById('price').innerHTML = '$' + listing.price
}

window.addEventListener('load',()=>{
    showListing()
}) 

function addToCart(){
    let title = document.getElementById('title').innerHTML
    let picture = document.getElementById('picture').src
    let price = document.getElementById('price').innerHTML

    let item = {

        title: title,
        price: price,
        picture: picture
    
    }
    
    
let cartItems = JSON.parse(localStorage.getItem('cart'))

localStorage.setItem('cart', JSON.stringify(cartItems))

window.location.href = '../shopping-cart/shoppingCart.html'

}



