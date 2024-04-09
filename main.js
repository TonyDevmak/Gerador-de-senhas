const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuirTamanho() {
    if (tamanhoSenha > 6) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentarTamanho() {
    if (tamanhoSenha < 18) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);