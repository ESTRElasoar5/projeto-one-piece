
const personagem = document.querySelectorAll(".personagem");

const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        botao.classList.add("selecionado");
        desselecionarPersonagem();
        personagem[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

