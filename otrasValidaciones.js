
function iniciar() {
    document.informacion.addEventListener("invalid", validacion)
    document.getElementById("enviar").addEventListener("click", enviar)
    document.informacion.addEventListener("input", controlar)
}

function validacion(e) {
    var elemento=e.target
    elemento.style.background='#FFDDDD'
}

function enviar() {
    var valido=document.informacion.checkValidity()
    if(valido) {
        document.informacion.submit()
    } 
}

function controlar(e) {
    var elemento=e.target
    if (elemento.validity.valid) {
    elemento.style.background='#FFFFFF';
    } else {
    elemento.style.background='#FFDDDD';
    } 
}
    
window.addEventListener("load", iniciar);