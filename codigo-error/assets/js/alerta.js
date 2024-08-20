var btnCarrito = document.querySelector("#btn-carrito")
var alerta = document.querySelector(".alert")
var cerrarAlerta = document.querySelector("#btn-cerrar-alerta")

var abrirAlerta = () =>{
    console.log("carrito")
    alerta.style.display = "flex"
    
}
btnCarrito.onclick = abrirAlerta


var funcionCerrarAlerta = () =>{
    alerta.style.display = "none"
}
cerrarAlerta.onclick = funcionCerrarAlerta