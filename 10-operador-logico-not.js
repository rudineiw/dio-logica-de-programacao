// NOT ( ! ) nega uma afirmação

let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!resultado) // false

let tempoAgora = "chuva"
let horario = 8
let resultado2 = !((tempo !== "chuva") && (horario > 6))
console.log(resultado) // true