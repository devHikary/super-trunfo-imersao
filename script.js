var carta1 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 4
  }
}
var carta2 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 4
  }
}
var carta3 = {
  nome: "Shiryu",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 4
  }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina;
var cartaJogador;
var elementoResultado = document.getElementById("resultado")

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (const atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo 
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributosSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributosSelecionado();
  if(atributoSelecionado === undefined){
    elementoResultado.innerHTML = "Selecione um atributo"
    return;
  }
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorCartaJogador > valorCartaMaquina){
    elementoResultado.innerHTML = "Você venceu contra "+  cartaMaquina.nome + " de " + valorCartaJogador + " a " + valorCartaMaquina;
  } else if(valorCartaJogador < valorCartaMaquina){
    elementoResultado.innerHTML = "Você perdeu contra "+ cartaMaquina.nome + " de " + valorCartaMaquina + " a " + valorCartaJogador;
  }else{
    elementoResultado.innerHTML = "Empatou contra "+  cartaMaquina.nome
  }

  document.getElementById("btnNovamente").classList.add("show");
}

function novamente(){
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  elementoResultado.innerHTML = ""
  document.getElementById("btnNovamente").classList.remove("show");
  limparSelecao()
}

function limparSelecao(){
  var radioAtributos = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributos.length; i++) {
    radioAtributos[i].checked = false;
  }
}