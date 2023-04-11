
/**
 * Confere se os campos foram preenchidos corretamente e chama a função para gerar o objeto conta.
 * @returns Retorna um erro se os campos estiverem incorretos e um objeto usuário se as contas estiverem corretas
 */
function confirmarCriacao() {
    const email1 = document.getElementById("emailCriar1");
    const email2 = document.getElementById("emailCriar2");
    const senha1 = document.getElementById("senhaCriar1");
    const senha2 = document.getElementById("senhaCriar2");
    const labelEmail = document.getElementById("labelConfirmEmail");
    const labelSenha = document.getElementById("labelConfirmSenha");

    TesteOk = true;

    if (email1.value != email2.value) {
        console.log("E-mails não conferem");
        labelEmail.innerHTML = `<div class="error-message">Os e-mails não coincidem.</div>`;
        labelEmail.classList.add('has-error');
        TesteOk = false;
    }
    else if (email1.value != '' && email2.value != '') {
        console.log("E-mails conferem");
        labelEmail.innerHTML = "E-mails conferem";
        labelEmail.classList.remove('has-error');
    }
    if (senha1.value != senha2.value) {
        console.log("Senhas não conferem");
        labelSenha.innerHTML = `<div class="error-message">As senhas não coincidem.</div>`;
        labelSenha.classList.add('has-error');
        TesteOk = false;
    }
    else if (senha1.value != '' && senha2.value != '') {
        labelSenha.innerHTML = "Senhas conferem";
        labelSenha.classList.remove('has-error');
        console.log("Senhas conferem");

    }
    if (TesteOk) {
        cadastrarUsuario();
    }

    email2.addEventListener("input", confirmarCriacao);
    senha2.addEventListener("input", confirmarCriacao);

}
/**
 * 
 * @returns Retorna um objeto conta conta a ser inserida no banco de dados
 */
function gerarConta() {
    var nome = document.getElementById("nomeCriar").value;
    var email = document.getElementById("emailCriar2").value;
    var senha = document.getElementById("senhaCriar2").value;
    //var foto = "";
    var type = document.querySelector('input[name=flexRadioDefault]:checked').value;
    var novaConta = {
        "email": email,
        "name": nome,
        "password": senha,
        "type": type
    };
    console.log('Gerou conta!')
    return novaConta;
}

function cadastrarUsuario() {
    var httpRequest = new XMLHttpRequest();
    var url = 'http://localhost:3333/users/users'
    httpRequest.open('POST', url, true)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.onload = () => {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText)
        } else {
            console.log('Erro:' + httpRequest.status)
        }
    }
    data = JSON.stringify(gerarConta())
    httpRequest.send(data)
}
function dadosLogin(){
    var email = document.getElementById("EmailEntrar").value;
    var password = document.getElementById("SenhaEntrar").value;
    var dadosLogin = {
        "email": email,
        "password": password
    }
    return dadosLogin

}

function buscarUsuario(){
    var httpRequest = new XMLHttpRequest();
    var url = 'http://localhost:3333/users/login'
    httpRequest.open('POST', url, true)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.onload = () =>{
       if(httpRequest.status == 200){
         return true
         
       }
       else {
        return false
       }
    }
    data = JSON.stringify(dadosLogin())
    httpRequest.send(data);
}
