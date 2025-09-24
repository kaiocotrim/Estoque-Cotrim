
// const ProdutosSalvos = JSON.parse(localStorage.getItem('meusProdutos'));

let nome = document.querySelector("#nomeL")
let serie = document.querySelector("#serieL")
let data = document.querySelector("#dataL")
let quantidade = document.querySelector("#quantidadeL")

function buscar() {
  const ProdutosSalvos = JSON.parse(localStorage.getItem('meusProdutos'));
  const tbody = document.querySelector('#tabelaProdutos tbody');

  tbody.innerHTML = ''; // Limpa a tabela antes de mostrar

  if (!ProdutosSalvos || ProdutosSalvos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">Nenhum produto salvo.</td></tr>`;
    return;
  }

  ProdutosSalvos.forEach(produto => {
    const linha = `
      <tr>
        <td>${produto.nome}</td>
        <td>${produto.serie}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.data}</td>
      </tr>
    `;
    tbody.innerHTML += linha;
  });
}
    



// function buscar() {
//     nome.innerHTML = `${ProdutosSalvos[0].nome}`
//     serie.innerHTML = `${ProdutosSalvos[0].serie}`
//     data.innerHTML = `${ProdutosSalvos[0].data}`
//     quantidade.innerHTML = `${ProdutosSalvos[0].data}`
// }

console.log(ProdutosSalvos)


function openCard() {
    cardMenu = document.querySelector('.cards')

    if (cardMenu.style.display === 'none' || cardMenu.style.display === ``) {
        cardMenu.style.display = `block`;
    } else {
        cardMenu.style.display = `none`;
    }
}



