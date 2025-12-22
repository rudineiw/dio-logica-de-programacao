// estrutura de decisão
// switch/case/break/default

let fruta = "banana"

switch (fruta) {
    case "laranja":
        console.log("suco de " + fruta)
        console.log(" com gelo")
    break
    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
    break
    case "maçã":
        console.log("suco de " + fruta)
    break
    default:
        console.log("suco de " + fruta)
}