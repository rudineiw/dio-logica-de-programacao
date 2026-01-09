// retorno com definição de variável
function soma(numA, numB) {
    let somatorio = numA + numB
    return somatorio
}
let resultado = soma(5,5)
console.log("O resultado é " + resultado)


// retorno sem definição de variável
function multiplica(numA, numB) {
    return numA * numB
}
console.log("O resultado é " + multiplica(5,5))


// exemplo mais elaborado
let userName = getFirtsName("João das Coves")
console.log("Olá " + userName)

userName = getFirtsName("Maria-do-Bairro", "-")
console.log("Olá " + userName)

function getFirtsName(name, splitChar = " "){
    let firstName = name.split(splitChar)[0]
    return firstName
}