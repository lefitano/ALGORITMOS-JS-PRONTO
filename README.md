----->> TODOS OS ALGORITMOS SEGUEM O PADRÃO QUE COLOQUEI PARA LER OS DADOS DO ARQUIVO
// const fs = require('fs');
// const source = process.argv[2];
// if (!source) {
//     console.log("Por favor, passe um arquivo de entrada como argumento!");
//     process.exit(1);
// }
// const input = fs.readFileSync(source, 'utf8').trim().split('\n');
// ```



 1 - fs.require('fs') - vai importar o sistema de arquivo do node.js
 2 - process.argv[2] - pega o nome do arquivo passado como argumento no terminal que vai ser o segundo (input.txt)
 3 -  coloquei uma validação para se caso o arquivo for fornecido, se não, pede o arquivo
 4 - fs.readFileSync() - vai ler o conteúdo do arquivo 
 5 - .trim().split('\n') - vai remover os espaços extras e divide o conteúdo em um array, onde cada linha vira um elemento


COMO USAR OS ALGORIRTMOS --->>> NODE NOMEDOARQUIVO.JS INPUT.TXT NO TERMINAL