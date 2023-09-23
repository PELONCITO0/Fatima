
const navegacion = document.querySelectorAll(".navegacion");
const contenidopestañas = document.querySelectorAll(".contenidopestañas");
const menu  = document.querySelector(".nav");
const botmostrar = document.querySelector(".menu")

botmostrar.addEventListener('click',()=>{
    menu.classList.toggle('mostrar')
}
)
navegacion.forEach((cadanavegacion, i)=>{
    navegacion[i].addEventListener('click',()=>{
        
        navegacion.forEach ((cadanavegacion, i)=>{
            navegacion[i].classList.remove('activo')
            contenidopestañas[i].classList.remove('activo')
            
        })
        
        navegacion[i].classList.add('activo')
        contenidopestañas[i].classList.add('activo')
        
    })
    navegacion[i].addEventListener('click',()=>{
        menu.classList.remove('mostrar')
    }
    )
})

