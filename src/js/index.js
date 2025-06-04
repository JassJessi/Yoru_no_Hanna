const botaoMostrarProdutos = document.querySelector('.btn-mostrar-produtos');
const produtosInativos = document.querySelectorAll('.produto:not(.ativo)');

console.log(botaoMostrarProdutos);
console.log(produtosInativos);

botaoMostrarProdutos.addEventListener('click', () => {
    mostrarMaisProdutos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProdutos.classList.add("remover");
}

function mostrarMaisProdutos() {
    produtosInativos.forEach(produtosInativo => {
        produtosInativo.classList.add('ativo');
    });
}