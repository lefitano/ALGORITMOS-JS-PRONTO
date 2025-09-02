const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Por favor, passe um arquivo de entrada como argumento!");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

function calcularMDC(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log("O máximo divisor comum é:", calcularMDC(a, b));

// node mdc.js input.txt  PARA RODAR NO TERMINAL (CMD)