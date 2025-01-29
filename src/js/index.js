// OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo
//cartão da lista

// Passo 1 - Dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// Passo 2 - Dar um jeito de indentificar o clique do usuário na seta avancar
    btnAvancar.addEventListener("click", function () {

    if(cartaoAtual === cartoes.length - 1) {return};

    //Passo 4 - Buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Passo 3 - Fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) {return};

    //Passo 4 - Buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Passo 3 - Fazer aparecer o próximo cartão da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

