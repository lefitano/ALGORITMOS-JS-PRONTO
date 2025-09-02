const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Por favor, passe um arquivo de entrada como argumento!");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const numero = parseInt(input[0]);

function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

if (ehPrimo(numero)) {
    console.log(numero + " é primo!");
} else {
    console.log(numero + " não é primo!");
}

// node numeroprimo.js input.txt  para rodar no terminal (CMD)