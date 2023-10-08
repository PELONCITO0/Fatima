
const navegacion = document.querySelectorAll(".navegacion");
const contenidopestañas = document.querySelectorAll(".contenidopestañas");
const menu  = document.querySelector(".nav");
const header = document.querySelector(".header")
const botmostrar = document.querySelector(".menu");
const btnsobremi = document.querySelector("#btnsobremi");
const btnhablame = document.querySelector("#btnhablame");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const BtnFront = document.querySelectorAll(".btn-front");
const BtnBack = document.querySelectorAll(".btn-back");

BtnFront.forEach((btncarta,i)=>{
    BtnFront[i].addEventListener('click',()=>{
        front[i].style.transform = 'rotateY(180deg)';
        back[i].style.transform = 'rotateY(360deg)'; 
        
        
    })

    BtnBack[i].addEventListener('click',()=>{
        front[i].style.transform = 'rotateY(360deg)';
        back[i].style.transform = 'rotateY(180deg)'; 
    })
})


botmostrar.addEventListener('click',()=>{
    menu.classList.toggle('mostrar')
    header.classList.toggle('act')
    navegacion.forEach((nav,i)=>{
    navegacion[i].addEventListener('click',()=>{
        header.classList.remove('act')
    })
   })
}
)

btnsobremi.addEventListener('click',()=>{
    navegacion.forEach((nav,i)=>{
        navegacion[i].classList.remove('activo')
        contenidopestañas[i].classList.remove('activo')
       
        
    })
    navegacion[1].classList.add('activo')
        contenidopestañas[1].classList.add('activo')
        menu.classList.remove('mostrar')
        header.classList.remove('act')
})

btnhablame.addEventListener('click',()=>{
    navegacion.forEach((nav,i)=>{
        navegacion[i].classList.remove('activo')
        contenidopestañas[i].classList.remove('activo')
        menu.classList.remove('mostrar')
        header.classList.remove('act')
    })
    navegacion[3].classList.add('activo')
        contenidopestañas[3].classList.add('activo')

})

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

