// Operadores Relacionais ou de Comparação

// = é atribuição
// == é para comparar valor
// === é para comparar valor e o tipo de dado
// !== é diferente ?

let numero = "1"
console.log(numero == 1) // true
console.log(numero === 1) // false

let marca = "Apple"
console.log(marca === "Apple") // true
console.log(marca !== "Apple") // false
console.log(marca === "Samsung") // false
console.log(marca === "apple") // false pois também é case sensitive

// Gardar o valor em uma variavel de resultado true?false
let carro = "Gol"
let resultado = carro !== "Uno"
console.log(resultado) // true

// Verificar se um cpf está bloqueado
let cpfBloqueado = "123.456.789-10"
let cpfUsuario = "111.222.333-44"
let ehBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuário está bloqueado? " + ehBloqueado) // false

// Verificar se o usuário pode embarcar
let cpfPermitido = "222.333.444.55"
let cpfPassageiro = "222.333.444.66"
let ehDiferente = cpfPassageiro !== cpfPermitido
console.log("O passageiro é diferente? " + ehDiferente) // true

// > maior que
let idadeMinima = 18
let idadeUsuario = 17
console.log(idadeUsuario > idadeMinima) // false

// >= maior ou igual que
idadeMinima = 18
idadeUsuario = 18
console.log(idadeUsuario >= idadeMinima) // true

// < menor que
let terceiraIdade = 60
let idadeUser = 55
console.log(terceiraIdade < idadeUser) // false

// <= menor que
terceiraIdade = 60
idadeUser = 60
console.log(terceiraIdade <= idadeUser) // true