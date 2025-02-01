let listaDeAmigosEscolhidos = [];

//textos para tela
function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
      campo.innerHTML = texto;
}

//escolhendo amigo
function adicionarAmigo() {
   let amigoEscolhido = document.querySelector('input').value;
   if (amigoEscolhido == '') {
      exibirTextoNaTela('h2', 'Por favor, insira um nome.');
      limparCampoDeNomes();
   } else if (listaDeAmigosEscolhidos.includes(amigoEscolhido)) {
      exibirTextoNaTela('h2', 'Este nome já foi escolhido!');
      limparCampoDeNomes();
   } else {
      listaDeAmigosEscolhidos.push(amigoEscolhido);
      exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
      console.log(listaDeAmigosEscolhidos);
      limparCampoDeNomes();
      organizarLista();
      return amigoEscolhido;
   }
}

//organizando lista
function organizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = listaDeAmigosEscolhidos;
}

//limpar campos
function limparCampoDeNomes() {
   amigoEscolhido = document.querySelector('input');
   amigoEscolhido.value = '';
}

function limparCampoDeListas() {
   listaDeAmigosEscolhidos = document.querySelector('button');
   listaDeAmigosEscolhidos = [];
   organizarLista();
}

//sorteando amigo
function sortearAmigo() {
   let amigoSorteado = listaDeAmigosEscolhidos[(Math.random() * listaDeAmigosEscolhidos.length) | 0];
   if (listaDeAmigosEscolhidos == '') {
   exibirTextoNaTela('h2', 'Por favor, escolha alguns amigos antes de sortear.');
   } else if (listaDeAmigosEscolhidos <= listaDeAmigosEscolhidos[0] ){
   exibirTextoNaTela('h2', 'Por favor, escolha alguns amigos antes de sortear.');
   } else {
   console.log(amigoSorteado);
   limparCampoDeNomes();
   limparCampoDeListas();
   exibirTextoNaTela('h2', `O seu amigo sorteado foi: ${amigoSorteado}!!`);
   return amigoSorteado;
   }
}