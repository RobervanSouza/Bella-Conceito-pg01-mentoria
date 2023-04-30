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

//3 ##################### CONTEUDO PLUS #################################
//3 plus size navegação
const todasPlus = [...document.querySelectorAll(".plus")]
//3 cards plus size
const todoConteudos = [ ...document.querySelectorAll(".plus-conteudo")]
//3 logica
// Define as constantes com os elementos de navegação e de conteúdo
const navegacaoPlus = todasPlus;
const conteudoPlus = todoConteudos;

//5 ##################### CONTEUDO MASCULINO #################################
//5 navegação masculino
const navegacaoMasculino = [ ...document.querySelectorAll(".navegaMasculino") ]
//5 cards plus size
const cardsMasculino = [ ...document.querySelectorAll(".cardsMasculino") ]
//5 logica
// Define as constantes com os elementos de navegação e de conteúdo
const navegaMaculino = navegacaoMasculino;
const cardsMasculinoTodos = cardsMasculino;

// 4 ##################### CONTEUDO FEMININO #################################
// 4 feminino navegação
const navegacaoFeminina = [ ...document.querySelectorAll(".feminino") ];
// 4 feminino main cards
const cardsFeminina = [ ...document.querySelectorAll(".cardsFeminino") ];
// 4 feminino logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosDeNavegacao = navegacaoFeminina;
const elementosDeConteudo = cardsFeminina;

//6 ##################### CONTEUDO INFANTIL BEBE #################################
// 4 bebe navegação
const navegacaoInfantil = [ ...document.querySelectorAll(".navegacaoInfantil") ];
// 4 bebe main cards
const cardsInfantil = [ ...document.querySelectorAll(".bebe") ];
// 4 bebe logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosInfantil = navegacaoInfantil;
const ConteudoInfantil = cardsInfantil;

//5 ##################### CONTEUDO INFANTIL MENINO #################################
// 4 menino navegação
const navegacaoMenino = [ ...document.querySelectorAll(".navegacaoMenino") ];
// 4 menino main cards
const cardsInfantilMasculino = [ ...document.querySelectorAll(".menino") ];
// 4 menino logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosInfantilMasculino = navegacaoMenino;
const ConteudoInfantilMasculino = cardsInfantilMasculino;

//5 ##################### CONTEUDO INFANTIL MENIMNA  #################################
// 4 menina navegação
const navegacaoMenina = [ ...document.querySelectorAll(".navegacaoMenina") ];
// 4 menina main cards
const cardsInfantilMenina= [ ...document.querySelectorAll(".menina") ];
// 4 manina logica 
// Define as constantes com os elementos de navegação e de conteúdo
const elementosInfantilMenina = navegacaoMenina;
const ConteudoInfantilMenina = cardsInfantilMenina;


// Chama a função para adicionar clique aos elementos de navegação


adicionarCliquePlus(elementosInfantilMasculino, ConteudoInfantilMasculino,);
adicionarCliquePlus(elementosInfantil, ConteudoInfantil,);
adicionarCliquePlus(elementosInfantilMenina, ConteudoInfantilMenina,);
adicionarCliquePlus(elementosDeNavegacao, elementosDeConteudo,);

adicionarCliquePlus(navegacaoPlus, conteudoPlus);
adicionarCliquePlus(navegaMaculino, cardsMasculinoTodos);

function mostrarConteudoplus(conteudoAtivoPlus, conteudoPlus) {
    // Percorre todos os elementos de conteudoPlus
    for (let i = 0; i < conteudoPlus.length; i++) {
        // Verifica se o índice i é igual ao índice do conteúdo ativo
        if (i === conteudoAtivoPlus) {
            // Se for igual, exibe o conteúdo correspondente
            conteudoPlus[ i ].style.display = "block";
        } else {
            // Se não for igual, esconde o conteúdo correspondente
            conteudoPlus[ i ].style.display = "none";
        }
    }
}

function adicionarCliquePlus(navegacaoPlus, conteudoPlus) {
    // Percorre todos os elementos de navegacaoPlus
    for (let i = 0; i < navegacaoPlus.length; i++) {
        // Adiciona um ouvinte de eventos de clique a cada elemento
        navegacaoPlus[ i ].addEventListener("click", function () {
            // Chama a função para mostrar o conteúdo ativo, passando o índice do elemento clicado
            mostrarConteudoplus(i, conteudoPlus);
        });
    }
}

//3 terminna ok ######################################################
// Essa linha cria uma constante chamada "bebeSubmenu" e a associa ao elemento com id "bebe-submenu"
const bebeSubmenu = document.getElementById('bebe-submenu');

// Essa linha cria uma constante chamada "bebeLink" e a associa ao elemento com id "bebe"
const bebeLink = document.getElementById('bebe');

// Essa linha cria uma constante chamada "masculinoSubmenu" e a associa ao elemento com id "masculino-submenu"
const masculinoSubmenu = document.getElementById('masculino-submenu');

// Essa linha cria uma constante chamada "masculinoLink" e a associa ao elemento com id "masculino"
const masculinoLink = document.getElementById('masculino');

// Essa linha cria uma constante chamada "meninaSubmenu" e a associa ao elemento com id "menina-submenu"
const meninaSubmenu = document.getElementById('menina-submenu');

// Essa linha cria uma constante chamada "meninaLink" e a associa ao elemento com id "menina"
const meninaLink = document.getElementById('menina');


// Adiciona um ouvinte de evento de clique ao elemento "bebeLink"
bebeLink.addEventListener('click', () => {
    // Verifica se o estilo de exibição do elemento "bebeSubmenu" é "none"
    if (bebeSubmenu.style.display === 'none') {
        // Se sim, muda o estilo de exibição de "bebeSubmenu" para "block" e oculta os outros submenus
        bebeSubmenu.style.display = 'block';
        masculinoSubmenu.style.display = 'none';
        meninaSubmenu.style.display = 'none';

    } else {
        // Caso contrário, muda o estilo de exibição de "bebeSubmenu" de volta para "none"
        bebeSubmenu.style.display = 'none';
    }
});

// Adiciona um ouvinte de evento de clique ao elemento "masculinoLink"
masculinoLink.addEventListener('click', () => {
    // Verifica se o estilo de exibição do elemento "masculinoSubmenu" é "none"
    if (masculinoSubmenu.style.display === 'none') {
        // Se sim, muda o estilo de exibição de "masculinoSubmenu" para "block" e oculta os outros submenus
        masculinoSubmenu.style.display = 'block';
        bebeSubmenu.style.display = 'none';
        meninaSubmenu.style.display = 'none';


    } else {
        // Caso contrário, muda o estilo de exibição de "masculinoSubmenu" de volta para "none"
        masculinoSubmenu.style.display = 'none';
    }
});

// Adiciona um ouvinte de evento de clique ao elemento "meninaLink"
meninaLink.addEventListener('click', () => {
    // Verifica se o estilo de exibição do elemento "meninaSubmenu" é "none"
    if (meninaSubmenu.style.display === 'none') {
        // Se sim, muda o estilo de exibição de "meninaSubmenu" para "block" e oculta os outros submenus
        meninaSubmenu.style.display = 'block';
        bebeSubmenu.style.display = 'none';
        masculinoSubmenu.style.display = 'none';
    } else {
        // Caso contrário, muda o estilo de exibição de "meninaSubmenu" de volta para "none"
        meninaSubmenu.style.display = 'none';
    }
});

//5 ############### >>>NAVEGAÇÃO ENTRE OS SUBMENUS <<<######################3

// Cria uma constante para selecionar todos os elementos com a classe "navegacaoMenino" e armazena em um NodeList
const navegacaoMeninoLinks = document.querySelectorAll('.navegacaoMenino');

// Cria uma constante para selecionar todos os elementos com a classe "navegacaoMenina" e armazena em um NodeList
const navegacaoMeninaLinks = document.querySelectorAll('.navegacaoMenina');

// Cria uma constante para selecionar todos os elementos com a classe "navegacaoInfantil" e armazena em um NodeList
const navegacaoInfantilLinks = document.querySelectorAll('.navegacaoInfantil');

// Itera sobre cada elemento do NodeList "navegacaoMeninoLinks" usando o método forEach
navegacaoMeninoLinks.forEach(link => {
    // Adiciona um event listener para o evento "click" em cada link da navegação masculina
    link.addEventListener('click', () => {
        // Cria constantes para os elementos que devem ser ocultados quando um link masculino for clicado
        const oculta1 = document.querySelectorAll('.bebe');
        const menina = document.querySelectorAll('.menina');
        const conteudoprincipal = document.querySelectorAll('.conteudo-principal');
        // Utiliza o spread operator para juntar os elementos de ambas as constantes e itera sobre eles
        [ ...oculta1, ...menina, ...conteudoprincipal ].forEach(element => {
            // Define o display dos elementos como "none" para ocultá-los
            element.style.display = 'none';
        });
    });
});

navegacaoMeninaLinks.forEach(link => {
    link.addEventListener('click', () => {
        const oculta1 = document.querySelectorAll('.bebe');
        const menino = document.querySelectorAll('.menino');
        const conteudoprincipal = document.querySelectorAll('.conteudo-principal');
        [ ...oculta1, ...menino, ...conteudoprincipal ].forEach(element => {
            element.style.display = 'none';
        });
    });
});

navegacaoInfantilLinks.forEach(link => {
    
    link.addEventListener('click', () => {      
        const ocultaMenino = document.querySelectorAll('.menino');
        const ocultaMenina = document.querySelectorAll('.menina');
        const conteudoprincipal = document.querySelectorAll('.conteudo-principal');
        [ ...ocultaMenino, ...ocultaMenina, ...conteudoprincipal].forEach(element => {
            
            element.style.display = 'none';
        });
    });
});


// O forEach é um método de arrays que itera sobre cada elemento do array e executa uma função de callback para cada um deles.No caso desse trecho de código, ele está sendo utilizado para iterar sobre cada link na constante navegacaoMeninoLinks e adicionar um event listener para o evento "click".

// Quando o link é clicado, a função de callback é executada.Ela cria duas constantes que contêm os elementos que devem ser ocultados quando um link masculino for clicado: oculta1, que contém os elementos com a classe "bebe", e menina, que contém os elementos com a classe "menina".

// Em seguida, a função utiliza o spread operator para juntar os elementos de ambas as constantes em um único array e itera sobre eles com o forEach.Para cada elemento, o código define o valor da propriedade display como "none", o que faz com que o elemento seja ocultado.Dessa forma, quando um link masculino é clicado, todos os elementos com as classes "bebe" e "menina" são ocultados.


