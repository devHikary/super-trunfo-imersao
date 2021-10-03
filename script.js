var carta1 = {
  nome: "Darth Vader",
  imagem: "https://upload.wikimedia.org/wikipedia/en/0/0b/Darth_Vader_in_The_Empire_Strikes_Back.jpg",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 4
  }
}
var carta2 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 4
  }
}
var carta3 = {
  nome: "Shiryu",
  imagem: "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
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
var divCartaJogador = document.getElementById("carta-jogador");
var divCartaMaquina = document.getElementById("carta-maquina");

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
  exibirCartaJogador()
}

function obtemAtributosSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributosSelecionado();
  if (atributoSelecionado === undefined) {
    elementoResultado.innerHTML = "Selecione um atributo"
    return;
  }
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'> Venceu </p>"
  } else if (valorCartaJogador < valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'> Perdeu </p>"
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou </p>"
  }
  elementoResultado.innerHTML = htmlResultado

  exibirCartaMaquina()
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovamente").classList.add("show");
}

function novamente() {
  document.getElementById("btnSortear").disabled = false;
  elementoResultado.innerHTML = ""
  document.getElementById("btnNovamente").classList.remove("show");
  limparCard()
}

function limparCard() {
  divCartaJogador.style.backgroundImage = `url()`
  divCartaMaquina.style.backgroundImage = `url()`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.innerHTML = moldura;
  divCartaMaquina.innerHTML = moldura;
}

function exibirCartaJogador() {
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id= 'opcoes' class='carta-status'>"
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " +
      cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}

function exibirCartaMaquina(){
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id= 'opcoes' class='carta-status'>"
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " +
    cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}