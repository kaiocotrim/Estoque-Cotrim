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
    const msg = document.querySelector('.informações2')

    msg.innerHTML = `Nome: ${nomes} <br> Quantidade: ${quantidade}<br> Data: ${datas}<br> Serie: ${serie}`

    let dadosP = {
        nome: nomes,
        quantidade: quantidade,
        data: datas,
        serie: serie
    }

    console.log(dadosP)

    
    infoProdutos.push(dadosP)
    console.log(infoProdutos)



    localStorage.setItem('meusProdutos', JSON.stringify(infoProdutos));
}

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














