const products = document.querySelector('.products');
const choseProductInput = document.querySelector('.choseProduct input')
let cont = 0;
const prods = [
    './assets/images/enroladinho.png',
    './assets/images/risole.jpg',
    './assets/images/coxinha.jpg',
    './assets/images/pastel.png',
    './assets/images/cento-salgado.jpg',
    './assets/images/pastelzinho.jpeg'
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

function init(){
    setInterval(x, 15);
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
