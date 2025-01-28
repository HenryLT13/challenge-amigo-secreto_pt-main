let listaDeAmigos = [];

let lista = document.getElementById("listaAmigos");
lista.innerHTML = listaDeAmigos;



//textos para tela
function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
      campo.innerHTML = texto;
}



//escolhendo amigo
function adicionarAmigo() {
   let amigoEscolhido = document.querySelector('input').value;
   if (amigoEscolhido == '') {
      exibirTextoNaTela('h2', 'Por favor, insira um nome.')
      limparCampo
   } else if (listaDeAmigos.includes(amigoEscolhido)) {
      exibirTextoNaTela('h2', 'Este nome já foi escolhido!');
      limparCampo();
   } else {
      listaDeAmigos.push(amigoEscolhido);
      exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
      console.log(listaDeAmigos);
      limparCampo();
      return amigoEscolhido;
   }
}


//limpar campo
function limparCampo() {
   amigoEscolhido = document.querySelector('input');
   amigoEscolhido.value = '';
}


//sorteando amigo
function sortearAmigo() {
   console.log('botão2');
}

//lista de nomes de amigos
function listarAmigos () {

}
