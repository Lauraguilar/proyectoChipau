var grupoBanner = []

grupoBanner[0] = ["https://www.facebook.com/chipau.arg/", "banner1.jpg"]
grupoBanner[1] = ["https://www.instagram.com/chipau.arg/", "banner2.jpg"]
grupoBanner[2] = ["https://api.whatsapp.com/send?phone=543794079982", "banner3.jpg"]

var vinculos = document.getElementById('links')
var imagenes = document.getElementById('banner')

vinculos.href = grupoBanner[0][0]
imagenes.src = grupoBanner[0][1]

var indice = 0 
var limite = grupoBanner.length - 1

function cambiarBanner () { 
    indice++
    if (indice > limite) {
        indoce = 0
    }
    vinculos.href = grupoBanner [indice] [0]
    imagenes.src = grupoBanner[indice] [1]
}

setInterval(cambiarBanner, 3000)