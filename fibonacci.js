const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("passa um arquivo de entrada!");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const n = parseInt(input[0]);

let a = 0, b = 1;
let sequencia = [];

for (let i = 0; i < n; i++) {
    sequencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
}

console.log("Sequência de Fibonacci:", sequencia.join(", "));

// lê a primeira linha para saber a quantidade de números que serão somados na sequencia
//node fibonacci.js input.txt  PARA RODAR NO TERMINAL (CMD)