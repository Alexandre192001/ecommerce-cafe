const elementos = document.querySelectorAll("[data-anime]");

const animeScroll = ()=>{
  const wintop = window.pageYOffset + window.innerHeight * .85
  elementos.forEach((element)=>{
    if(wintop>element.offsetTop){
      element.classList.add("animacao")
    } else{
      element.classList.remove("animacao")
    }
  })
}


window.addEventListener("scroll",()=>{
  animeScroll()
})
