const fs = require('fs');

const source = process.argv[2]; 
if (!source) {
    console.log("Passa um arquivo de entrada");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
let numeros = input.slice(1, n + 1).map(Number);

// Função QuickSort Simples
function quickSortSimples(arr) {
    //  array com 0 ou 1 elemento já está ordenado
    if (arr.length <= 1) {
        return arr;
    }
    
    // Escolhendo o elemento do meio
    const pivo = arr[Math.floor(arr.length / 2)];
    
    // Separa em 3 grupos
    const menores = [];
    const iguais = [];
    const maiores = [];
    
    // Distribui os elementos nos grupos
    for (let numero of arr) {
        if (numero < pivo) {
            menores.push(numero);
        } else if (numero > pivo) {
            maiores.push(numero);
        } else {
            iguais.push(numero);
        }
    }
    
    // Junta tudo ordenado recursivamente
    return [
        ...quickSortSimples(menores),
        ...iguais,
        ...quickSortSimples(maiores)
    ];
}

// Ordena os números
numeros = quickSortSimples(numeros);

// Exibe os números ordenados
console.log("Números ordenados:");
for (let numero of numeros) {
    console.log(numero);
}

// para lembrar e explicar professor**
// o primeiro valor do arquivo de entrada é a quantidade de números n
// as outras linhas são os números a serem ordenados
// o QuickSort divide o array em menores, iguais e maiores que o pivô
// depois junta tudo ordenado de forma recursiva

// para rodar o codigo no terminal: node ordenacao.js input.txt
