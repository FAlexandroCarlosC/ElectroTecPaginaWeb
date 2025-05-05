let indice = 0;
const imagenes = document.querySelectorAll(".carrusel-imagenes img");
const btnAnterior = document.querySelector(".carrusel-btn.anterior");
const btnSiguiente = document.querySelector(".carrusel-btn.siguiente");

function mostrarImagen(i) {
  imagenes.forEach((img, idx) => {
    img.classList.toggle("activo", idx === i);
  });
}

btnAnterior.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});

btnSiguiente.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});

mostrarImagen(indice);
