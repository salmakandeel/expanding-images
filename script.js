const images=document.querySelectorAll(".sub_containear")
images.forEach(image=>{
  image.addEventListener("mouseover",function(){
    images.forEach(image=>{image.classList.remove("active")})
    image.classList.add("active")
    
}) 
})

