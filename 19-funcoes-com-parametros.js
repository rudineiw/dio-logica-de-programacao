var nome // variável global (não é recomendado definir fora do escopo)

function torrar(pao) {
    nome = "Fulano" // variável dentro do escopo
    console.log("torrada feita com " + pao)
    console.log(nome)
}

torrar("pão de forma")
torrar("pão integral")

// passando mais de um parâmetro
function torrar2(pao, nome) {
    console.log("torrada feita com " + pao)
    console.log("pedido de " + nome)
}

torrar2("pão de forma", "Ciclano")
torrar2("pão integral", "Beltrana")

// passando parâmetro padrão
function torrar3(pao, valor, nome = "Cliente") {
    console.log("torrada feita com " + pao)
    console.log("pedido de " + nome)
    console.log("valor total " + valor)
}
torrar3("pão integral")
torrar3("pão integral", "John")
torrar3("pão integral", "Mary", 11.9)
torrar3("pão de forma", 14.9)

// exemplo conexão fictícia com banco de dados e interpolação de strings
// usar crase para usar interpolação
stringConection("db_products", "Bob", "98765")

function stringConection(databaseName, user, pass) {
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}