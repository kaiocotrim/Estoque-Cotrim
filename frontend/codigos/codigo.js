let infoProdutos = [];

function openCard() {
    cardMenu = document.querySelector('.cards')

    if (cardMenu.style.display === 'none' || cardMenu.style.display === ``) {
        cardMenu.style.display = `block`;
    } else {
        cardMenu.style.display = `none`;
    }
}

function salvarValor() {
  const nomes = document.querySelector('#nomeP').value;
  const quantidade = Number(document.querySelector('#quantidadeI').value);
  const datas = document.querySelector('#dataI').value;
  const serie = document.querySelector('#serie').value;
  const msg = document.querySelector('.informações2');

  if (nomes === '' || quantidade === 0 || datas === '' || serie === '') {
    msg.innerHTML = `Preencha todos os campos!`;
    return; // Para aqui se tiver campo vazio
  }

  msg.innerHTML = `Produto salvo: ${nomes}`;

  let dadosP = {
    nome: nomes,
    quantidade: quantidade,
    data: datas,
    serie: serie
  };

  // Pega produtos já salvos, ou cria array vazio
  let infoProdutos = JSON.parse(localStorage.getItem('meusProdutos')) || [];

  // Adiciona novo produto
  infoProdutos.push(dadosP);

  // Salva de novo no localStorage
  localStorage.setItem('meusProdutos', JSON.stringify(infoProdutos));

  // Atualiza a tabela
  buscar();

  // Aqui pode limpar os campos do formulário, se quiser
}



console.log(`${infoProdutos} teste`)

const bntSave = document.querySelector("#btnSave")

function btnClick() {



    if (infoProdutos.length === 0) {
        alert('Cadastro incompleto!')
    }
    else (
        alert(`Cadastro concluído! Produto inserido no estoque. Série: ${infoProdutos[0].serie}`)
    )
}




function limpar() {
    const msg = document.querySelector('.informações2')
    msg.innerHTML = ``

}














