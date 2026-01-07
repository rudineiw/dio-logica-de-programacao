// declarar função
function torrar() {
    console.log("Torrando o pão")
}

// chamar função
torrar()

function torrarPao() {
    console.log("Aguardando inserir o pão")
    torrar()
    console.log("Finalizado")
}

torrarPao()

// Nomes de funções devem seguir as mesmas convenções de nomenclatura adotadas para variáveis
// O nome da função precisa deixar clara a ação que a função executa