let hamburgesa = document.querySelector(".ham");
const navegacion = document.querySelector(".nav");
const enlaces = document.querySelectorAll(".nav a");

document.addEventListener("DOMContentLoaded",()=>{
    mostrarMenu();
    cerrarMenu();
})

function mostrarMenu(){
    hamburgesa.addEventListener("click",()=>{
        navegacion.classList.toggle("ocultar")
    })
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener("click",(e)=>{
            if(e.target.tagName === "A"){
                navegacion.classList.add("ocultar");
            }
        });
    });
}