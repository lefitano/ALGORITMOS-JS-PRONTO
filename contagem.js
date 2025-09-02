const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Por favor, passe um arquivo de entrada como argumento!");
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
