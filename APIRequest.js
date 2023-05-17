var request = new XMLHttpRequest();
request.open('GET', 'https://www.consultacrm.com.br/api/index.php?tipo=TIPO&q=BUSCA&chave=7279695826&destino=json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = request.responseText;
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
    console.error("Error: request status code is " + request.status);
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.error("Error: connection error");
};

request.send();
