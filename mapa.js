function buscarHospital() {

    busca = document.getElementById("BuscaHospital").value;
    mapa = document.getElementById("mapaGoogle");


    if (busca !== "")
        mapa.src = "https://maps.google.com/maps?q=" + busca + "&t=&z=10&ie=UTF8&iwloc=&output=embed"


}