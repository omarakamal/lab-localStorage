function seeListing(title , price, picture){

let listing = {
    title:title,
    price: price,
    picture: picture
}

localStorage.setItem('listing',JSON.stringify(listing))

window.location.href = '../listing-page/listingPage.html';


}