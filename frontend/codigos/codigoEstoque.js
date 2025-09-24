
const ProdutosSalvos = JSON.parse(localStorage.getItem('meusProdutos'));

let nome = document.querySelector("#nomeL")
let serie = document.querySelector("#serieL")
let data = document.querySelector("#dataL")
let quantidade = document.querySelector("#quantidadeL")

function buscar() {
    nome.innerHTML = `${ProdutosSalvos[0].nome}`
    serie.innerHTML = `${ProdutosSalvos[0].serie}`
    data.innerHTML = `${ProdutosSalvos[0].data}`
    quantidade.innerHTML = `${ProdutosSalvos[0].data}`
}


function openCard() {
    cardMenu = document.querySelector('.cards')

    if (cardMenu.style.display === 'none' || cardMenu.style.display === ``) {
        cardMenu.style.display = `block`;
    } else {
        cardMenu.style.display = `none`;
    }
}




