function iniciar() {
  maximo = 500;
  medio = document.getElementById("medio");
  reproducir = document.getElementById("reproducir");
  parar = document.getElementById("parar");
  barra = document.getElementById("barra");
  progreso = document.getElementById("progreso");
  avanzar = document.getElementById("avanzar");
  retroceder = document.getElementById("retroceder");

  parar.addEventListener("click", frenar);
  reproducir.addEventListener("click", presionar);
  barra.addEventListener("click", mover);
}

function frenar() {
  medio.pause();
  reproducir.innerHTML = '<span class="icon-play"></span>';
  medio.currentTime = 0;
  estado();
}

function saltar(valor) {
  medio.currentTime += valor;
  estado();
}

function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.innerHTML = '<span class="icon-play"></span>';
    window.clearInterval(bucle);
  } else {
    medio.play();
    reproducir.innerHTML = '<span class="icon-pause"></span>';
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (!medio.ended) {
    var total = parseInt((medio.currentTime * maximo) / medio.duration);
    progreso.style.width = total + "px";
  } else {
    progreso.style.width = "0px";
    reproducir.innerHTML = "Reproducir";
    window.clearInterval(bucle);
  }
}

function mover(e) {
  var ratonX = e.pageX - barra.offsetLeft;
  var nuevoTiempo = (ratonX * medio.duration) / maximo;
  medio.currentTime = nuevoTiempo;
  progreso.style.width = ratonX + "px";
}

window.addEventListener("load", iniciar);
