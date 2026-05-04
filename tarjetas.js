
let desde = document.getElementById("txtDesde")

let salto = document.getElementById("txtSalto")

let hasta = document.getElementById("txtHasta")

function generar(){
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas")

    let inicio = parseInt(desde.value);
    let intervalo = parseInt(salto.value);
    let fin = parseInt(hasta.value);

    for (let i = inicio; i <= fin; i = i+intervalo){
        contenido += "<div class='item'>" + i + "</div>";
    }

    divTarjetas.innerHTML = contenido;
}

