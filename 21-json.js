// JSON = JavaScript Objetc Notaion
// Chave e Valor com o obejtivo de transferi dados

let invoice = {
    name: "Theodor",
    age: "19",
    products: {
        0: ["Mouse XPTO", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor Gamer", 899.00]
    },
    taxes: 98.90
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.nome}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------")
    for(let index in invoice.products){ // for ... in percorre todos itens sem necessidade de um contador
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }
}