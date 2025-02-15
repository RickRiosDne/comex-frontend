"use strict";
class Produto {
    url;
    nome;
    preco;
}
class ListagemDeProdutos {
    url;
    constructor(url) {
        this.url = url;
    }
    async listaProdutos() {
        try {
            const response = await fetch(this.url);
            const produtos = await response.json();
            let html = '';
            produtos.forEach((item) => {
                html += /*html*/
                    `<div class="purchase-item">
                <div class="ms-5 mt-3">
                <img class="imgs-purchase mb-4" src="${item.url ? item.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/498px-Item_sem_imagem.svg.png'}">
                <p>Nome: ${item.nome}<br>
                Preço: ${item.preco}</p>
                <button class="btn-purchase mt-3 mb-3 p-2">Comprar</button>
                </div>
            </div>`;
            });
            const purchase = document.querySelector('.purchase');
            if (purchase) {
                purchase.innerHTML = html;
            }
        }
        catch (err) {
            const purchase = document.querySelector('.purchase');
            if (purchase) {
                purchase.innerHTML = 'Não foi possível recuperar os produtos.';
            }
        }
    }
}
const listagemDeProdutos = new ListagemDeProdutos('http://localhost:3000/produtos');
listagemDeProdutos.listaProdutos();
//# sourceMappingURL=index.js.map