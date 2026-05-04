let valor = document.getElementById("valorIngresado")

function generar(){
    let contenido = "";
    let tablas = document.getElementById("tablas")

    let dato = parseInt(valor.value);

    for (let i = 1; i <= 10; i++){
        contenido += "<div class='fila'>"+ dato + " x " + i + " = " + (dato * i) + "</div>";
    }

    tablas.innerHTML = contenido;
}