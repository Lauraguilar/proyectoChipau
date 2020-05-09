var nombre = document.getElementById('nombre')
var direccion = document.getElementById('direccion')
var pizza = document.getElementById('pizza')

function validarDatos(){
    nombre.addEventListener("input", validarNombre)
    direccion.addEventListener("input", validarDireccion)
    pizza.addEventListener("input", validarPizza)

    validarNombre()
    validarDireccion()
    validarPizza()
}

function validarNombre(){
    if (nombre.value=='') {
        nombre.setCustomValidity('Ingrese su nombre')
        nombre.style.backgroundColor='#d67c7c'
    } else  { 
        nombre.setCustomValidity('')
        nombre.style.backgroundColor='#a5e6a8'
    }
}

function validarDireccion(){
    if (direccion.value=='') {
        direccion.setCustomValidity('Ingrese su direccion de envio')
        direccion.style.backgroundColor='#d67c7c'
    } else  { 
        direccion.setCustomValidity('')
        direccion.style.backgroundColor='#a5e6a8'
    }
}

function validarPizza(){
    if (pizza.value=='') {
        pizza.setCustomValidity('Ingrese la pizza que desea probar!')
        pizza.style.backgroundColor='#d67c7c'
    } else  { 
        pizza.setCustomValidity('')
        pizza.style.backgroundColor='#a5e6a8'
    }
}



window.addEventListener("load", validarDatos)