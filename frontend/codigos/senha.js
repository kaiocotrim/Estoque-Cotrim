

function logar() {

    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;
    let msg = document.querySelector('#resp')
    if (login === 'admin' && senha === '1234') {
        window.location.href = 'index.html  ';
    } else {
        msg.innerHTML = 'Acesso negado: credenciais inválidas'
      
    }



}