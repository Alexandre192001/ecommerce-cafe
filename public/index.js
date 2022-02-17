document.querySelector(".btn-form-contato")
.addEventListener("click",()=>{
  event.preventDefault();
})

document.querySelector(".fa-bars")
.addEventListener("click",()=>{
  document.querySelector(".links-menu")
  .classList.toggle("menu-animation")
})