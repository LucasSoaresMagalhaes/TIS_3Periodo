var db_contato = {
    data: [
        {
            nome: "Maria",
            email: "Maria321@gmail.com",
            senha: "senhaForte",
            foto: "",
            medico: "0"
        },
        {
            nome: "Jao",
            email: "jao321@gmail.com",
            senha: "senhaForte2",
            foto: "",
            medico: "0"
        }],    addContato: function (contato) {
            this.data.push(contato);
        }
}


function logar() {
    for (i = 0; i < db_contato.data.length; i++) {

        if (db_contato.data[i].email == document.querySelector("#EmailEntrar").value && db_contato.data[i].senha == document.querySelector("#SenhaEntrar").value) {
            alert("Bom dia " + db_contato.data[i].nome)
            return true;
        }
    }
    alert("E-mail ou senha incorretos")
    return false;
}

function confirmarDados() {
    for (i = 0; i < db_contato.data.length; i++) {
        if (db_contato.data[i].email == document.querySelector("#EmailEntrar").value && db_contato.data[i].senha == document.querySelector("#SenhaEntrar").value) {
            alert("Bom dia " + db_contato.data[i].nome)
            return true;
        }
    }
    alert("E-mail ou senha incorretos")
    return false;
}

function confirmarCriacao() {

    email1 = document.querySelector("#emailCriar1").value;
    email2 = document.querySelector("#emailCriar2").value;
    senha1 = document.querySelector("#senhaCriar1").value;
    senha2 = document.querySelector("#senhaCriar2").value;
    TesteOk = true;

    if (!confirmarDados(email1, email2)) {
        alert("E-mails não conferem")
        TesteOk = false;
    }

    for (i = 0; i < db_contato.data.length; i++) {

        if (email1 == db_contato.data[i].email) {
            alert("E-mail já existente")
            TesteOk = false;
        }

    }
    if (!confirmarDados(senha1, senha2)) {
        alert("Senhas não conferem")
        TesteOk = false;

    }

    return TesteOk;

}

function confirmarDados(elemento1, elemento2) {

    if (elemento1 == elemento2) {
        return true;
    }
    return false;

}

function criarContato() {
    var nome = document.getElementById("nomeCriar").value;
    var email = document.getElementById("emailCriar2").value;
    var senha = document.getElementById("senhaCriar2").value;
    var foto = ""
    var medico = "";
    var novoContato = { nome: nome, email: email, senha: senha, foto: foto, medico: medico };
    db_contato.addContato(novoContato);
    alert("Contato criado com sucesso!");
}