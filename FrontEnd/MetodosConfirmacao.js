
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
        labelEmail.innerHTML = '<div class="error-message">Os e-mails não coincidem.</div>';
        labelEmail.classList.add('has-error');
        TesteOk = false;
    }
    else if (email1.value != '' && email2.value != ''){
        console.log("E-mails conferem");
        labelEmail.innerHTML = "E-mails conferem";
        labelEmail.classList.remove('has-error');
    }

    if (senha1.value != senha2.value) {
        console.log("Senhas não conferem");
        labelSenha.innerHTML = '<div class="error-message">As senhas não coincidem.</div>';
        labelSenha.classList.add('has-error');
        TesteOk = false;
    }
    else if (senha1.value != '' && senha2.value != '') {
        labelSenha.innerHTML = "Senhas conferem";
        labelSenha.classList.remove('has-error');
        console.log("Senhas conferem");

    }

    if (TesteOk) {
        gerarConta();
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
    var foto = "";
    var type = "";
    var novaConta = { nome: nome, email: email, senha: senha, foto: foto, type: type };

    return novaConta;
}

