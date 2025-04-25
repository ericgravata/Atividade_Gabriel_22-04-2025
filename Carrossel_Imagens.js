//carrega as imagens
//A variável imagens contém o caminho das imagens que serão exibidas no carrossel.
let imagens = [
        "images/sea-turtle.jpg",
        "images/nemo.jpg",
        "images/caranguejo.jpg"
];

//A variável imagem contém o elemento HTML onde a imagem será exibida. A variável i é usada para controlar qual imagem está sendo exibida atualmente.
let imagem = document.getElementById("imagem");
let i = 0;
function exibirImagem() {
    imagem.src = imagens[i];
}
//Retornar a imagem
function retornarImagem() {
    i--;
    if (i < 0) {
        i = imagens.length - 1;
    }
    exibirImagem();
}
//Avançar a imagem
function avancarImagem() {
    i++;
    if (i >= imagens.length) {
        i = 0;
    }
    exibirImagem();
}

//Adicionar os eventos de clique aos botões
document.getElementById("btAnterior").addEventListener("click", retornarImagem);
document.getElementById("btAvancar").addEventListener("click", avancarImagem);

//Exibir a primeira imagem ao carregar a página
window.onload = function() {
    exibirImagem();
};