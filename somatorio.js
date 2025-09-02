const fs = require('fs');

const source = process.argv[2]; 
if (!source) {
    console.log("Por favor, passe um arquivo de entrada como argumento!");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
let soma = 0;

for (let i = 1; i <= n; i++) {
    soma += parseInt(input[i]);
}

console.log("A soma dos números é:", soma);



// para rodar o codigo no terminal : node somatorio.js input.txt  (CMD)