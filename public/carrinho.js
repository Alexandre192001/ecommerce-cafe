/*CHAMADA DO BANNER CARRINHO*/

document.getElementById("icone-cart").addEventListener("click"
,()=>{
  document.querySelector(".itens-car").classList.toggle("car-div")
})



const carrinho = []

const BtnProductor = document.querySelectorAll(".btn-car")
/*ADICIONANDO EVENTO NO BOTAO*/
BtnProductor.forEach((element)=>{
  element.addEventListener("click",addElementCarrinho)
})

/*FUNCAO DE ADICIONAR ELEMENTO NO CARRINHO*/
function addElementCarrinho(e){
  /*FAZ REFERENCIA AO OBJETO*/
  const button = e.target
  const item = button.closest(".card")
  const cardTitle = item.querySelector(".title-card").innerHTML;
  const precoCard = item.querySelector(".value-element").innerHTML;
  const itemImg = item.querySelector(".img-card").src;
  
  const newItem = {
    imgcard:itemImg,
    titulocard: cardTitle,
    precocard:precoCard,
  }

  upgradeCar(newItem)
}

function upgradeCar(newItem){

  carrinho.push(newItem)
  renderCarrinho()
}

function renderCarrinho(){
  carrinho.map((itemElement)=>{
    const elemento = document.createElement("li")
    const containerElement = `
    <div class="card">
    <div class="img-card-gallery">
      <img  class="img-card" src="${itemElement.imgcard}">
    </div>
    <h4 class="title-card">${itemElement.titulocard}</h4>
    <p class="value-element">${itemElement.precocard}</p>
  </div>
    `
    elemento.innerHTML = containerElement
    document.querySelector(".total").appendChild(elemento)
  })


}





