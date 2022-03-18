/*CHAMADA DO BANNER CARRINHO*/

document.getElementById("icone-cart").addEventListener("click"
,()=>{
  document.querySelector(".itens-car").classList.toggle("car-div")
})

/*CARRINHO DE COMPRAS*/

const carrinho = []
const tbody = document.querySelector(".tbody-table")
const BtnProductor = document.querySelectorAll(".btn-car")

BtnProductor.forEach((element)=>{
  element.addEventListener("click",addElementCarrinho)
})

function addElementCarrinho(e){  
  const button = e.target
  const item = button.closest(".card")
  const cardTitle = item.querySelector(".title-card").textContent;
  const precoCard = item.querySelector(".value-element").textContent;
  const itemImg = item.querySelector(".img-card").src;
  const newItem = {
    imgcard:itemImg,
    titulocard: cardTitle,
    precoItem:precoCard,
    quantidade:1,
  }
  upgradeCar(newItem)
  
}


function upgradeCar(newItem){
    const valorItem = tbody.getElementsByClassName("valor-item")
  for(let i=0; i<carrinho.length;i++){
    if(carrinho[i].titulocard.trim()=== newItem.titulocard.trim()){
      carrinho[i].quantidade++
      const inputValor = valorItem[i]
      inputValor.value++
      ValorTotalCarrinho()
      return null;
    } }
  carrinho.push(newItem)
  renderCarrinho()
}



function renderCarrinho(){
  tbody.innerHTML=""
  carrinho.map((carrinhoElementos)=>{
    const tr = document.createElement("tr")
    tr.classList.add("ItemCarrinho")
    const content  =`
    <td class="img-item">
    <img src=${carrinhoElementos.imgcard} alt="">
  </td>
  <td class="title-item">${carrinhoElementos.titulocard}</td>
  <td class="preco-item">${carrinhoElementos.precoItem}</td>
  <td class="quantidade-item">
    <input type="number" class="valor-item" min="1" max="1" value=${carrinhoElementos.quantidade}>
    
  </td> 
  <td class="remover-Item">
    <button class="remover">X</button>
  </td>
    `
    tr.innerHTML=content;
    tbody.append(tr)
    tr.querySelector(".remover")
    .addEventListener("click",removerItem)
  })
  ValorTotalCarrinho() 
}

function ValorTotalCarrinho(){
  let total = 0;
  const ItemTotal = document.querySelector(".total-preco")
  carrinho.forEach((item)=>{
    const preco = Number(item.precoItem.replace("$",""))
    total = total + preco*item.quantidade
  })
    ItemTotal.innerHTML = `${total}`
}



function removerItem(e){
  const removerElemento = e.target
  const btnRemover = removerElemento.closest(".ItemCarrinho")
  const title = btnRemover.querySelector(".title").textContent;
  for(let i = 0;i<carrinho.length;i++){
    if(carrinho[i].title.trim()===title.trim()){
      carrinho.splice(i,1)
    }}
  btnRemover.remover();
  ValorTotalCarrinho()
}


