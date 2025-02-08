//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;   

    if (nomeDoAmigo == "") {
        alert('Por Favor, insira um nome!');
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        console.log(listaDeAmigos);
        limparCampo();
        atualizarListaDeAmigos()
    } 
}

adicionarAmigo();

function atualizarListaDeAmigos() {
    let listaAtualizada = document.getElementById('listaAmigos');
    listaAtualizada.innerHTML = '';

    listaDeAmigos.forEach(listaDeAmigos => {
        let itenList = document.createElement('li');
        itenList.textContent = listaDeAmigos;
        listaAtualizada.appendChild(itenList);
    });
}  

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
       alert('É necessário adicionar amigos a lista antes do sorteio!');
    } else {
        document.getElementById('Sortear').removeAttribute('disabled');
        let indice = parseInt(Math.random() * listaDeAmigos.length);
        Math.floor(indice);
        let amigoSorteado = listaDeAmigos[indice];
        document.getElementById('resultado').innerHTML = `O amigo secreto é ${amigoSorteado}`;
        listaDeAmigos = [];
    }    
}

sortearAmigo(); 

function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}