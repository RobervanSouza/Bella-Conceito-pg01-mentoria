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



abrir.addEventListener('click', () => {
    menu.classList.add('aberto');
    // resto do seu código
});


//4////////////////// PAGINA FEMININO/////////////////////////////////////////////////////////////////////////////////////

//4////////////// PAGINA PLUS//////////////////////////////////////////////////////
//3 plus size navegação
const todasPlus = [...document.querySelectorAll(".plus")]
//3 cards plus size
const todoConteudos = [ ...document.querySelectorAll(".plus-conteudo")]
//3 logica
// Define as constantes com os elementos de navegação e de conteúdo
const navegacaoPlus = todasPlus;
const conteudoPlus = todoConteudos;

//3 navegação masculino
const navegacaoMasculino = [ ...document.querySelectorAll(".navegaMasculino") ]
//3 cards plus size
const cardsMasculino = [ ...document.querySelectorAll(".cardsMasculino") ]
//3 logica
// Define as constantes com os elementos de navegação e de conteúdo
const navegaMaculino = navegacaoMasculino;
const cardsMasculinoTodos = cardsMasculino;
// 3 feminino navegação
const navegacaoFeminina = [ ...document.querySelectorAll(".feminino") ];
// 3 feminino main cards
const cardsFeminina = [ ...document.querySelectorAll(".cardsFeminino") ];
// 3 feminino logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosDeNavegacao = navegacaoFeminina;
const elementosDeConteudo = cardsFeminina;
// Chama a função para adicionar listeners de clique aos elementos de navegação
adicionarCliquePlus(elementosDeNavegacao, elementosDeConteudo,);
// Função para mostrar o conteúdo ativo e esconder os demais
adicionarCliquePlus(navegacaoPlus, conteudoPlus);
adicionarCliquePlus(navegaMaculino, cardsMasculinoTodos);

function mostrarConteudoplus(conteudoAtivoPlus, conteudoPlus) {
    for (let i = 0; i < conteudoPlus.length; i++) {
        if (i === conteudoAtivoPlus) {

            conteudoPlus[ i ].style.display = "block";
        } else {

            conteudoPlus[ i ].style.display = "none";
        }
    }
}
function adicionarCliquePlus(navegacaoPlus, conteudoPlus) {
    for (let i = 0; i < navegacaoPlus.length; i++) {
        navegacaoPlus[ i ].addEventListener("click", function () {
            // Chama a função para mostrar o conteúdo ativo
            mostrarConteudoplus(i, conteudoPlus);
        });
    }
}
