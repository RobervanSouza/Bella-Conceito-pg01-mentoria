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
//4//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 feminino navegação
const calca = document.getElementById("calca");
const shorts = document.getElementById("shorts");
const blusas = document.getElementById("blusas");
const conjuntos= document.getElementById("conjuntos");
const calcinhas = document.getElementById("calcinhas");
const cropped = document.getElementById("cropped");
// 3 feminino main cards
const conteudoCalca = document.getElementById("conteudo-calca");
const conteudoShorts = document.getElementById("conteudo-shorts");
const conteudoBlusas = document.getElementById("conteudo-blusas");
const conteudoConjuntos = document.getElementById("conteudo-conjuntos");
const conteudoCalcinhas = document.getElementById("conteudo-calcinhas");
const conteudoCropped = document.getElementById("conteudo-cropped");
// 3 feminino logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosDeNavegacao = [ calca, shorts, blusas, conjuntos, calcinhas, cropped ];
const elementosDeConteudo = [ conteudoCalca, conteudoShorts, conteudoBlusas, conteudoConjuntos, conteudoCalcinhas, conteudoCropped ];
// Chama a função para adicionar listeners de clique aos elementos de navegação
adicionarCliqueFeminino(elementosDeNavegacao, elementosDeConteudo);
// Função para mostrar o conteúdo ativo e esconder os demais
function mostrarConteudoFeminino(conteudoAtivoIndex, elementosDeConteudo) {
    for (let i = 0; i < elementosDeConteudo.length; i++) {
        if (i === conteudoAtivoIndex) {
            // Mostra o elemento de conteúdo ativo
            elementosDeConteudo[ i ].style.display = "block";
        } else {
            // Esconde os demais elementos de conteúdo
            elementosDeConteudo[ i ].style.display = "none";
        }
    }
}
function adicionarCliqueFeminino(elementosDeNavegacao, elementosDeConteudo) {
    for (let i = 0; i < elementosDeNavegacao.length; i++) {
        elementosDeNavegacao[ i ].addEventListener("click", function () {
            // Chama a função para mostrar o conteúdo ativo
            mostrarConteudoFeminino(i, elementosDeConteudo);
        });
    }
}
//4////////////////////////////////////////////////////////////////////
//3 plus size navegação
const bluasPlus = document.getElementById("blusasPlusSize");
const calcaPlus = document.getElementById("calcaPlusSize");
const shortsPlus= document.getElementById("shortsPlusSize");
const vestidoPlus = document.getElementById("vestidoPlusSize");
const lingeriePlus = document.getElementById("lingeriePlusSize");
//3 cards plus size
const plusBlusas = document.getElementById("plus-blusas");
const plusCalca = document.getElementById("plus-calca");
const plusShorts = document.getElementById("plus-shorts");
const plusVestidos = document.getElementById("plus-vestidos");
const plusLingerie= document.getElementById("plus-lingerie");
//3 logica
// Define as constantes com os elementos de navegação e de conteúdo
const navegacaoPlus = [ bluasPlus, calcaPlus, shortsPlus, vestidoPlus, lingeriePlus ];
const conteudoPlus = [ plusBlusas, plusCalca, plusShorts, plusVestidos, plusLingerie];
adicionarCliquePlus(navegacaoPlus, conteudoPlus);
function mostrarConteudoplus(conteudoAtivoPlus, conteudoPlus) {
    for (let p = 0; p < conteudoPlus.length; p++) {
        if (p === conteudoAtivoPlus) {
            
         conteudoPlus[ p ].style.display = "block";
        } else {
            
         conteudoPlus[ p ].style.display = "none";
        }
    }
}
function adicionarCliquePlus(navegacaoPlus, conteudoPlus) {
    for (let p = 0; p < navegacaoPlus.length; p++) {
        navegacaoPlus[ p ].addEventListener("click", function () {
            // Chama a função para mostrar o conteúdo ativo
            mostrarConteudoplus(p, conteudoPlus);
        });
    }
}
