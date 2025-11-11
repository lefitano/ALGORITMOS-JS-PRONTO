const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Falta um arquivo de entrada");
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

console.log("O maior divisor comum é:", calcularMDC(a, b));


// para explicar o prof :
//-- > lê dois números, o da linha 0 sendo X e o da linha 1 sendo Y para calcular o mdc dos dois
// node mdc.js input.txt  PARA RODAR NO TERMINAL 