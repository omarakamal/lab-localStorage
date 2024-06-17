

function seeListing(title , price, picture){
console.log(title , price, picture)

localStorage.setItem('listing',JSON.stringify({title,price,picture}))


window.location.href = '../listing-page/listingPage.html';


}