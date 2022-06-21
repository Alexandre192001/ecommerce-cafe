/*CHAMADA DO BANNER CARRINHO*/
document.getElementById("icone-cart").addEventListener("click"
,()=>{
  document.querySelector(".itens-car").classList.toggle("car-div")
})

/*CARRINHO DE COMPRAS*/
const Clickbutton = document.querySelectorAll('.btn-car')
const tbody = document.querySelector('.tbody-table')
let carinho = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addTocarinhoItem)
})


function addTocarinhoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.title-card').textContent;
  const itempreco = item.querySelector('.value-element').textContent;
  const itemImg = item.querySelector('.img-card').src;
  
  const newItem = {
    title: itemTitle,
    preco: itempreco,
    img: itemImg,
    quantidade: 1
  }

  addItemcarinho(newItem)
}


function addItemcarinho(newItem){

  const elementoInput = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carinho.length ; i++){
    if(carinho[i].title.trim() === newItem.title.trim()){
      carinho[i].quantidade ++;
      const inputValue = elementoInput[i]
      inputValue.value++;
      carinhoTotal()
      return null;
    }
  }
  
  carinho.push(newItem)
  
  rendercarinho()
} 


function rendercarinho(){
  tbody.innerHTML = ''
  carinho.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('Itemcarinho')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.preco},00</p></td>
            <td class="table__quantidade">
              <input type="number" min="1" value=${item.quantidade} class="input__elemento">
              <button class="delete">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemcarinho)

    tr.querySelector(".input__elemento").addEventListener('change', somaquantidade)
  })
  carinhoTotal()
}

function carinhoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.total-preco')
  carinho.forEach((item) => {
    const preco = Number(item.preco.replace("$",''))
    Total = Total + preco*item.quantidade
  })

  itemCartTotal.innerHTML = `Total: ${Total},00`
}

function removeItemcarinho(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".Itemcarinho")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carinho.length ; i++){

    if(carinho[i].title.trim() === title.trim()){
      carinho.splice(i, 1)
    }
  }

  tr.remove()
  carinhoTotal()
}

function somaquantidade(e){
  const somaInput  = e.target
  const tr = somaInput.closest(".Itemcarinho")
  const title = tr.querySelector('.title').textContent;
  carinho.forEach(item => {
    if(item.title.trim() === title){
      somaInput.value < 1 ?  (somaInput.value = 1) : somaInput.value;
      item.quantidade = somaInput.value;
      carinhoTotal()
    }
  })
}
