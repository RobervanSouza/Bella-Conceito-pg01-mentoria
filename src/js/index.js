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



/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS
let imgFoto = document.querySelector('#foto')
let nome = document.querySelector('#nome')
let tamanho = document.querySelector('#tamanho')


// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = '/src/json/data.json'

function pegarDados(i) {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                console.log("Erro ao acessar o JSON")
                return
            }
            // console.log(dados)
            // Quantidade de lutadores
            let plus = (dados.blusas.length)
            console.log("Quant. de Lutadores " + plus)
            // passe o valor de i no parametro
            atribuirDados2(dados, i)
        })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
    imgFoto.setAttribute('src', "../assets/img/imagemPlus" + dados.blusas[ i ].foto)
    nome.textContent = dados.blusas[ i ].nome
    nacionalidade.textContent = dados.blusas[ i ].nacionalidade
    idade.textContent = dados.blusas[ i ].idade + " anos"
    peso.textContent = (dados.blusas[ i ].peso).toString(2) + " Kg"
    altura.textContent = (dados.blusas[ i ].altura).toString(2) + " m"
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesLutadores = document.getElementsByClassName('nome')
let nacionalidadeLutadores = document.getElementsByClassName('nacionalidade')
let idadeLutadores = document.getElementsByClassName('idade')
let pesoLutadores = document.getElementsByClassName('peso')
let alturaLutadores = document.getElementsByClassName('altura')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    imgsFoto[ i ].setAttribute('src', "../assets/img/imagemPlus/" + dados.blusas[ i ].foto)
    nomesLutadores[ i ].textContent = dados.lutadores[ i ].nome
    nacionalidadeLutadores[ i ].textContent = dados.lutadores[ i ].nacionalidade
    idadeLutadores[ i ].textContent = dados.lutadores[ i ].idade + " anos"
    pesoLutadores[ i ].textContent = dados.lutadores[ i ].peso + " Kg"
    alturaLutadores[ i ].textContent = dados.lutadores[ i ].altura + " m"
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', '../assets/img/imagemPlus/alistair_overeem.jpg')

    // NOME DO LUTADOR
    let nomeLutador = document.createElement("h2")
    nomeLutador.setAttribute('class', 'nome')
    carta.appendChild(nomeLutador)
    nomeLutador.textContent = "Nome"

    // NACIONALIDADE DO LUTADOR
    let nacionalidadeLutador = document.createElement("h3")
    nacionalidadeLutador.setAttribute('class', 'nacionalidade')
    carta.appendChild(nacionalidadeLutador)
    nacionalidadeLutador.textContent = "Nacinalidade"

    // IDADE DO LUTADOR
    let idadeLutador = document.createElement("h3")
    idadeLutador.setAttribute('class', 'idade')
    carta.appendChild(idadeLutador)
    idadeLutador.textContent = "idade anos"

    // PESO DO LUTADOR
    let pesoLutador = document.createElement("h3")
    pesoLutador.setAttribute('class', 'peso')
    carta.appendChild(pesoLutador)
    pesoLutador.textContent = "peso Kg"

    // ALTURA DO LUTADOR
    let alturaLutador = document.createElement("h3")
    alturaLutador.setAttribute('class', 'altura')
    carta.appendChild(alturaLutador)
    alturaLutador.textContent = "altura m"

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(3)
desenharCarta(3)
