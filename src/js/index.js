let abrir = document.querySelector("#abrirMenu");
let fecha = document.querySelector("#fechaMenu");
let menu = document.querySelector("#menu");

abrir.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';

    setTimeout(()=>{
        menu.style.opacity = "1"
        menu.style.right = '0'
    },20)
})
fecha.addEventListener('click', () =>{
 
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    menu.style.opacity = "0"
    setTimeout(() => {

        menu.removeAttribute('style');
    }, 200)
})


const cuecaLink = document.getElementById("cueca");
const camisaLink = document.getElementById("camisa");
const shortsLink = document.getElementById("shorts");
const conteudoCueca = document.getElementById("conteudo-cueca");
const conteudoCamisa = document.getElementById("conteudo-camisa");
const conteudoShorts = document.getElementById("conteudo-shorts");

cuecaLink.addEventListener("click", function () {
    conteudoCueca.style.display = "block";
    conteudoCamisa.style.display = "none";
    conteudoShorts.style.display = "none";
});

camisaLink.addEventListener("click", function () {
    conteudoCueca.style.display = "none";
    conteudoCamisa.style.display = "block";
    conteudoShorts.style.display = "none";
});

shortsLink.addEventListener("click", function () {
    conteudoCueca.style.display = "none";
    conteudoCamisa.style.display = "none";
    conteudoShorts.style.display = "block";
});
