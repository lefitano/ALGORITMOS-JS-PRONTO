const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Passar arquivo de entrada");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const quantidade = parseInt(input[0]);
const numeros = input.slice(1, quantidade + 1).map(Number);
const N = parseInt(input[quantidade + 1]);

let count = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= numeros[0] && numeros[i] <= N) {
        count++;
    }
}

console.log(`Quantidade de números entre ${numeros[0]} e ${N}:`, count);

// ---> EXPLICAÇÃO PARA DAR AO PROF
//coloco no input.txt (arquivo de entrada) os valores
//linha 1 a quantidade de números

//nas linhas de 2 a 6 os 5 números referentes a contagem
// na linha 7 coloco o limite, que é o valor  de N

//rodo no terminal o node nomedoarquivo.js e o arquivodeentrada.txt