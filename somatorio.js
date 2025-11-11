const fs = require('fs');

const source = process.argv[2]; 
if (!source) {
    console.log(" passar um arquivo de entrada");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
let soma = 0;

for (let i = 1; i <= n; i++) {  // loop para contagem dos números até o valor da quantidade n
    soma += parseInt(input[i]);
}

console.log("A soma dos números é:", soma);

// para lembrar e explicar professor**
// o primeiro valor do arquivo de entrada fica a quantidade de números n
// as outras linhas vão ser os valores da soma

// para rodar o codigo no terminal : node somatorio.js input.txt  