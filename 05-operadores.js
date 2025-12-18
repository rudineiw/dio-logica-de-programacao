// Exemplos funcionais de operadores em JavaScript

// Operadores aritméticos
const a = 7;
const b = 3;
console.log('a + b =', a + b); // 10
console.log('a - b =', a - b); // 4
console.log('a * b =', a * b); // 21
console.log('a / b =', a / b); // 2.333...
console.log('a % b =', a % b); // 1 (resto)
console.log('a ** b =', a ** b); // 7^3 = 343

// Operadores de comparação
console.log('5 == "5"?', 5 == '5');   // true (coerção de tipo)
console.log('5 === "5"?', 5 === '5'); // false (estritamente igual)
console.log('5 != "5"?', 5 != '5');   // false
console.log('5 !== "5"?', 5 !== '5'); // true
console.log('10 > 7?', 10 > 7);
console.log('10 >= 10?', 10 >= 10);
console.log('3 < 4?', 3 < 4);
console.log('3 <= 2?', 3 <= 2);

// Operadores lógicos
const temCnh = true;
const idade = 20;
console.log('Pode dirigir?', temCnh && idade >= 18); // true
console.log('Tem desconto?', temCnh || idade < 18); // true
console.log('Negação de temCnh:', !temCnh); // false

// Curto-circuito (short-circuit)
function mostrar() { console.log('função mostrar() executada'); return true; }
console.log('false && mostrar() ->', false && mostrar()); // mostrar() NÃO é executada
console.log('true || mostrar() ->', true || mostrar());   // mostrar() NÃO é executada

// Operadores de atribuição
let num = 10;
console.log('num =', num);
num += 5; console.log('num += 5 ->', num);
num -= 3; console.log('num -= 3 ->', num);
num *= 2; console.log('num *= 2 ->', num);
num /= 4; console.log('num /= 4 ->', num);
num %= 3; console.log('num %= 3 ->', num);

// Incremento e decremento (prefixo vs sufixo)
let i = 1;
console.log('i =', i);
console.log('i++ ->', i++); // retorna 1, depois incrementa
console.log('depois de i++ i =', i);
i = 1;
console.log('++i ->', ++i); // incrementa, depois retorna (2)

// Operador ternário
const nota = 85;
const situacao = nota >= 60 ? 'Aprovado' : 'Reprovado';
console.log('Situação (ternário):', situacao);

// Operadores bit a bit
const x = 5; // 0101
const y = 3; // 0011
console.log('x & y =', x & y); // 0001 -> 1
console.log('x | y =', x | y); // 0111 -> 7
console.log('x ^ y =', x ^ y); // 0110 -> 6
console.log('~x =', ~x);        // complemento de 2
console.log('x << 1 =', x << 1); // 1010 -> 10
console.log('x >> 1 =', x >> 1); // 0010 -> 2

// Exemplo de precedência
console.log('1 + 2 * 3 =', 1 + 2 * 3); // 7 (multiplicação antes da adição)
console.log('(1 + 2) * 3 =', (1 + 2) * 3); // 9 (parênteses alteram a precedência)  
