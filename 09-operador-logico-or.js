// OR ( || ) ao menos uma das condições precisa ser verdadeira

// só pode sair se não estiver chovendo ou usando guarda-chuva
let tempo = "chuva"
let item = "guarda-chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda-chuva")
console.log("pode sair? " + podeSair) // true