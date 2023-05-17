
function request(tipo, UF, Busca) {
    var request = new XMLHttpRequest();
    const key = 7279695826;
    request.open('GET', 'https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=' + UF + '&q=' + Busca + '&chave=' + key + '&destino=xml', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var xmlDoc = request.responseXML;

            // Get a list of all item elements
            var itemList = xmlDoc.getElementsByTagName("item");

            // Loop through each item element and retrieve its child elements
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];

                // Get the tipo element's text content
                var tipo = item.getElementsByTagName("tipo")[0].textContent;

                // Get the numero element's text content
                var numero = item.getElementsByTagName("numero")[0].textContent;

                // Get the nome element's text content
                var nome = item.getElementsByTagName("nome")[0].textContent;

                // Get the uf element's text content
                var uf = item.getElementsByTagName("uf")[0].textContent;

                // Get the profissao element's text content
                var profissao = item.getElementsByTagName("profissao")[0].textContent;

                // Get the situacao element's text content
                var situacao = item.getElementsByTagName("situacao")[0].textContent;

                // Do something with the retrieved data (e.g. output it to the console)
                console.log("Item #" + i);
                console.log("Tipo: " + tipo);
                console.log("Numero: " + numero);
                console.log("Nome: " + nome);
                console.log("UF: " + uf);
                console.log("Profissão: " + profissao);
                console.log("Situação: " + situacao);
            }
            var data = request.responseText;
            console.log(data);
        } else {
            // We reached our target server, but it returned an error
            console.error("Error: request status code is " + request.status);
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        console.error("Error: connection error");
    };

    request.send();
}