const products = document.querySelector('.products');
const choseProductInput = document.querySelector('.choseProduct input')
const faInstagram = document.querySelector('.fa-instagram')
const faFacebook = document.querySelector('.fa-facebook')
const faIfood = document.querySelector('#ifood')
let cont = 0;
const prods = [
    './assets/images/enroladinho.png',
    './assets/images/risole.jpg',
    './assets/images/coxinha.jpg',
    './assets/images/pastel.png',
    './assets/images/cento-salgado.jpg',
    './assets/images/Cento_Pastelzinho.jpg'
];

const frozenProds = [
    './assets/images/enroladinho-Congelado.jpg',
    './assets/images/coxinha-Congelada.jpeg',
    './assets/images/risole-Congelado.jpg',
    './assets/images/cento-disco-congelado.jpeg',
    './assets/images/cento-pastelzinho-congelado.jpg',
    './assets/images/cento-variados.jpg',
]

function creationDivsWithImagesDinamic(prods, products, classImage){
    for(i = 0; i < prods.length; i++){
        const div = document.createElement('div');
        const img = document.createElement('img');
    
        div.classList.add(classImage);
        img.src = prods[i];
    
        div.appendChild(img);
        products.appendChild(div);
    }
}


function x(){
    cont++;
    document.querySelector('header').style.backgroundPosition=cont+"px";
}

function navMobile() {
    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('.navbar');
        const mobileNavbar = document.querySelector('.navbar__mobile');
        const button = document.querySelector('.burguer');
      
        button.addEventListener('click', function () {
          mobileNavbar.classList.toggle('active');
        });
      
        window.addEventListener('scroll', function () {
          if (window.pageYOffset > 0) {
            navbar.classList.add('active');
          } else {
            navbar.classList.remove('active');
          }
        });
      });
}

function init(){
    setInterval(x, 15);
    faInstagram.addEventListener('click', () => {
        window.location.href = 'https://www.instagram.com/luerosalgados/?igshid=NTc4MTIwNjQ2YQ%3D%3D'
    })
    faFacebook.addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/luerosalgados?mibextid=ZbWKwL'
    })
    faIfood.addEventListener('click', () => {
        window.location.href = 'https://www.ifood.com.br/delivery/porto-velho-ro/luro-salgados-costa-e-silva/da31c9bc-c68b-428a-9429-e706d2f178c2?UTM_Medium=share'
    })
    navMobile()
    creationDivsWithImagesDinamic(prods, products, 'product');
    choseProductInput.addEventListener("click", event => {
        const friedProducts = products.querySelectorAll('.product')
        const frozenProduct = products.querySelectorAll('.FrozenProduct')
        if(event.target.checked){
            creationDivsWithImagesDinamic(frozenProds, products, 'FrozenProduct')
            showFrozen();
            friedProducts.forEach((fried) => {
                fried.style.display = 'none'
            })
        } else {
            creationDivsWithImagesDinamic(prods, products, 'product')
            showFried();
            frozenProduct.forEach((frozen) => {
                frozen.style.display = 'none'
            })
        }
    })
}

init();
