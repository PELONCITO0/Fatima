const nav = document.querySelector("#nav");
const abrir = document.querySelector("#mostrar-menu");
const cerrar = document.querySelector("#ocultar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})