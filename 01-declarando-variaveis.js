// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
*/

// saída
console.log("digite seu nome");

// declarar variável com var
var nickname = "Rudi DEV 2";
var nickname = "Rudi DEV 3"; // redeclaração com var é permitida
nickname = "Rudi DEV 4"; // reatribuição é permitida
// saída
console.log(nickname);

// declarar variável com let
let nickname2 = "Rudi DEV"; 
// let nickname2 = "Rudi DEV 1"; // não é possível redeclarar variavel com let
nickname2 = "Rudi DEV 1"; // reatribuição é permitida
// saída
console.log("Bem-vindo, " + nickname2 + "!");

// declarar constante
const notificacao = "Pokemon Go diz: ";
// const notificacao = "Pokemon Go fala: "; // não é possível redeclarar constante
// notificacao = "teste"; // não é possível reatribuir valor a uma constante
// saída
console.log(notificacao + " nova atualização disponivel!");

// Nomes válidos (sintaxe básica)
// Devem começar com letra, _ (underscore) ou $.
// Não podem começar com número.
// Podem conter números após o primeiro caractere.
// Não podem usar palavras reservadas (ex.: class, return, function).

// exemplos corretos
let fruta
let _usuario
let $token
let idade2

// exemplos errados
// let 2nome;
// let function;

// Evite nomes genéricos como: data, result, info, aux, tmp.
// Use nomes que dizem o quê a variável armazena
let nome
// evite usar a, b, x1.

// Conveções de nomes de variáveis
// Use camelCase para variáveis e funções:
let valorTotal
let nomeCompleto
// Use UPPER_SNAKE_CASE apenas para constantes estáticas:
const API_URL = "..."

// exemplo aplicado
const TAXA_JUROS = 0.05;

let valorProduto = 120;
let nomeCliente = "Rudinei";
let descontoAplicado = calcularDesconto(valorProduto);

function calcularDesconto(valor) {
  const DESCONTO = 10;
  return valor - DESCONTO;
}