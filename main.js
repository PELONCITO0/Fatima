
const navegacion = document.querySelectorAll(".navegacion");
const contenidopestañas = document.querySelectorAll(".contenidopestañas");
const menu  = document.querySelector(".nav");
const header = document.querySelector(".header")
const botmostrar = document.querySelector(".menu");
const botcerrar = document.querySelector(".cerrar");
const btnsobremi = document.querySelector("#btnsobremi");
const btnhablame = document.querySelector("#btnhablame");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const BtnFront = document.querySelectorAll(".btn-front");
const BtnBack = document.querySelectorAll(".btn-back");
const principal = document.querySelector('#principal1');
const punto = document.querySelectorAll('#punto1');
const principa2 = document.querySelector('#principal2');
const punto2 = document.querySelectorAll('#punto2');


punto.forEach ( (cadapuntp, i)=>{
    
    punto[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -25;
         
        principal1.style.transform = `translateX(${ operacion }%)`;
        
       
        punto.forEach ( (cadapuntp, i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
})
punto2.forEach ( (cadapuntp, i)=>{
    
    punto2[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -20;
         
        principal2.style.transform = `translateX(${ operacion }%)`;
        
       
        punto2.forEach ( (cadapuntp, i)=>{
            punto2[i].classList.remove('activo');
        })
        punto2[i].classList.add('activo');

    })
})


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
    menu.classList.add('mostrar')
    header.classList.add('act')
    botcerrar.classList.add('mostrar')
    botmostrar.style.display = 'none'
    botcerrar.addEventListener('click',()=>{
        header.classList.add('act')
        botcerrar.classList.remove('mostrar')
        menu.classList.remove('mostrar')
        botmostrar.style.display = 'block'
    })
    navegacion.forEach((nav,i)=>{
    navegacion[i].addEventListener('click',()=>{
        header.classList.remove('act')
        botcerrar.classList.remove('mostrar')
        botmostrar.style.display = 'block'
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

