let listaDeAmigos = [];

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
   } else if (listaDeAmigos.includes(amigoEscolhido)) {
      exibirTextoNaTela('h2', 'Este nome já foi escolhido!');
      limparCampoDeNomes();
   } else {
      listaDeAmigos.push(amigoEscolhido);
      exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
      console.log(listaDeAmigos);
      limparCampoDeNomes();
      organizarLista();
      return amigoEscolhido;
   }
}

//organizando lista
function organizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = listaDeAmigos;
   }

//limpar campos
function limparCampoDeNomes() {
   amigoEscolhido = document.querySelector('input');
   amigoEscolhido.value = '';
}

function limparCampoDeListas() {
   listaDeAmigos = document.querySelector('button');
   listaDeAmigos = [];
   organizarLista();
}

//sorteando amigo
function sortearAmigo() {
   let amigoSorteado = listaDeAmigos[(Math.random() * listaDeAmigos.length) | 0];
   if (listaDeAmigos == '') {
   exibirTextoNaTela('h2', 'Por favor, escolha alguns amigos antes de sortear.');
   } else if (listaDeAmigos <= listaDeAmigos[0] ){
   exibirTextoNaTela('h2', 'Por favor, escolha alguns amigos antes de sortear.');
   } else {
   console.log(amigoSorteado);
   limparCampoDeNomes();
   limparCampoDeListas();
   exibirTextoNaTela('h2', `O seu amigo sorteado foi: ${amigoSorteado}!!`);
   return amigoSorteado;
   }
}