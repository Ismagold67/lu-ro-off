const products = document.querySelector('.products');
const choseProductInput = document.querySelector('.choseProduct input')
const faInstagram = document.querySelector('.fa-instagram')
const faFacebook = document.querySelector('.fa-facebook')
const faIfood = document.querySelector('#ifood')
let cont = 0;

//Lista contendo os caminhos para as imagens de salgados fritos
const prods = [
    './assets/images/enroladinho.png',
    './assets/images/risole.jpg',
    './assets/images/coxinha.jpg',
    './assets/images/pastel.png',
    './assets/images/cento-salgado.jpg',
    './assets/images/Cento_Pastelzinho.jpg'
];

// Lista contendo os caminhos para as imagens de salgados congelados crus
const frozenProds = [
    './assets/images/enroladinho-Congelado.jpg',
    './assets/images/coxinha-Congelada.jpeg',
    './assets/images/risole-Congelado.jpg',
    './assets/images/cento-disco-congelado.jpeg',
    './assets/images/cento-pastelzinho-congelado.jpg',
    './assets/images/cento-variados.jpg',
]

// Função para criar dinamicamente os elementos de produto (div + img)
function creationDivsWithImagesDinamic(prods, classImage) {
    products.innerHTML = ''; // Limpa os produtos já existentes no container

    prods.forEach(src => {
        const div = document.createElement('div'); // Cria um contêiner para cada produto
        const img = document.createElement('img'); // Cria a imagem do produto
        img.src = src; // Define o caminho da imagem
        img.alt = classImage; // Adiciona uma descrição alternativa (boa prática de acessibilidade)

        div.classList.add(classImage); // Adiciona a classe (usada para identificar o tipo)
        div.appendChild(img); // Coloca a imagem dentro da div
        products.appendChild(div); // Adiciona a div ao container principal
    });
}

// Função que anima o plano de fundo do header com deslocamento constante
function animateHeaderBackground() {
    cont++; // Incrementa a posição
    document.querySelector('header').style.backgroundPosition = `${cont}px`; // Aplica a posição
}

// Função para ativar o menu mobile e trocar a classe da navbar ao rolar a página
function setupNavMobile() {
    const navbar = document.querySelector('.navbar');
    const mobileNavbar = document.querySelector('.navbar__mobile');
    const button = document.querySelector('.burguer');

    // Ativa/desativa o menu mobile ao clicar no botão do hambúrguer
    button.addEventListener('click', () => {
        mobileNavbar.classList.toggle('active');
    });

    // Adiciona/remover classe na navbar ao rolar a página
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('active', window.pageYOffset > 0);
    });
}

// Função que define o comportamento dos ícones de redes sociais
function setupSocialLinks() {
    faInstagram.onclick = () => window.location.href = 'https://www.instagram.com/luerosalgados/?igshid=NTc4MTIwNjQ2YQ%3D%3D';
    faFacebook.onclick = () => window.location.href = 'https://www.facebook.com/luerosalgados?mibextid=ZbWKwL';
    faIfood.onclick = () => window.location.href = 'https://www.ifood.com.br/delivery/porto-velho-ro/luro-salgados-costa-e-silva/da31c9bc-c68b-428a-9429-e706d2f178c2?UTM_Medium=share';
}

// Função principal que inicializa toda a lógica da página
function init() {
    setInterval(animateHeaderBackground, 15); // Inicia a animação do background do header
    setupSocialLinks(); // Ativa os links das redes sociais
    setupNavMobile();   // Ativa a navegação responsiva

    creationDivsWithImagesDinamic(prods, 'product'); // Carrega os produtos fritos inicialmente

    // Evento para alternar entre produtos fritos e congelados ao clicar no input
    choseProductInput.addEventListener("click", (event) => {
        if (event.target.checked) {
            // Se marcado, mostra os congelados
            creationDivsWithImagesDinamic(frozenProds, 'FrozenProduct');
        } else {
            // Se desmarcado, volta a mostrar os fritos
            creationDivsWithImagesDinamic(prods, 'product');
        }
    });
}

// Chamada da função principal para iniciar tudo
init();
