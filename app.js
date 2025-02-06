//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;   

    if (nomeDoAmigo == "") {
        alert('Por Favor, insira um nome!');
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        console.log(listaDeAmigos);} 
}

adicionarAmigo();

function atualizarListaDeAmigos() {

}

function sortearAmigo() {

}