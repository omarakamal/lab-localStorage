function showListing(){
   let listing =  localStorage.getItem('listing')


   console.log('listing',listing)
   console.log('listing')

}

window.addEventListener('load',()=>{
    showListing()
})