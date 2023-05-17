
function request() {
    var request = new XMLHttpRequest();
    const key = 7279695826;
    const UF = document.getElementById("UFmedico").value;
    const Nome = document.getElementById("nomeMedico").value;

    request.open('GET', 'https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=' + UF + '&q=' + Nome + '&chave=' + key + '&destino=xml', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var xmlDoc = request.responseXML;

            // Transforma em uma lista de itens
            var itemList = xmlDoc.getElementsByTagName("item");
            if (itemList.length > 0) {
                // Loop entre todos os elementos
                for (var i = 0; i < itemList.length; i++) {
                    var item = itemList[i];
                    adicionarCard(item);
                }
                var data = request.responseText;
                console.log(data);
            }
            else{
                alert("Não foram encontrados médicos com o nome " + Nome + " e UF " + UF)
            }
        } else {
            // PROBLEMA NO SERVIDOR
            console.error("Error: request status code is " + request.status);
        }
    };

    request.onerror = function () {
        // ERRO DE CONEXÃO
        console.error("Error: connection error");
    };

    request.send();
}



function adicionarCard(item) {


    // Conteudo do campo tipo
    var tipo = item.getElementsByTagName("tipo")[0].textContent;

    // Conteudo do campo numero
    var numero = item.getElementsByTagName("numero")[0].textContent;

    // Conteudo do campo nome
    var nome = item.getElementsByTagName("nome")[0].textContent;

    // Conteudo do campo uf
    var uf = item.getElementsByTagName("uf")[0].textContent;

    // Conteudo do campo profissao
    var profissao = item.getElementsByTagName("profissao")[0].textContent;

    // Conteudo do campo situacao
    var situacao = item.getElementsByTagName("situacao")[0].textContent;

    var paginaBusca = document.getElementById("paginaBusca");

    paginaBusca.innerHTML += `<div class="cardmedico">
    <div class="card" style="width: 18rem;">
        <i id="ICONE_IMAGEM" class="fa-solid fa-comments"></i>
        <p>UF:` + uf + `</p>
        <p>CRM: `+ numero + ` </p>
        <p>NOME: `+ nome + ` </p>
        <p>PROFISSÃO: `+ profissao + ` </p>
        <p>SITUAÇÃO: `+ situacao + ` </p>
    </div>
</div>`

}