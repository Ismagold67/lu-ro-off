
function showFried(){
    const Prods = document.querySelectorAll('.product');
    fetch("./js/dados.json").then((response) => {
        response.json().then((datas) => {
            datas.friedProducts.map((prod) => {
                Prods.forEach(element => {
                    const img = element.querySelector('img');
                    let path = img.getAttribute('src');
                    if(path.includes(prod.nome)){
                        creationDinamicContent(prod, element);
                    };
                });
            });
        });
    });
}

function showFrozen(){
    const Prods = document.querySelectorAll('.FrozenProduct');
    fetch("./js/dados.json").then((response) => {
        response.json().then((datas) => {
            datas.frozenProducts.map((prod) => {
                Prods.forEach(element => {
                    const img = element.querySelector('img');
                    let path = img.getAttribute('src');
                    if(path.includes(prod.nome)){
                        creationDinamicContent(prod, element);
                    };
                });
            });
        });
    });
}

function creationDinamicContent(prod, element){
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const priceInt = parseFloat(JSON.parse(prod.price)).toFixed(2);
    const nome = prod.nome[0].toUpperCase();
    h3.textContent = prod.nome.replace(prod.nome[0], nome).replace('-', ' ');
    p.textContent = prod.description;
    span.id = 'price';
    span.innerHTML = `R$ ${priceInt.replace('.', ',')}`;
    element.appendChild(h3);
    element.appendChild(p);
    element.appendChild(span);
}
showFried();