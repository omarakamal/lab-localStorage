

function seeListing(title , price, picture){
console.log(title , price, picture)

//save to local storage

localStorage.setItem('listing',JSON.stringify({title,price,picture}))

//take the product to see-listing page 

window.location.href = '../listing-page/listingPage.html'

}