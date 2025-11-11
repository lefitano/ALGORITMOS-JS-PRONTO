const fs = require('fs');

const source = process.argv[2];
if (!source) {
    console.log("Por favor, passe um arquivo de entrada como argumento!");
    process.exit(1);
}

const input = fs.readFileSync(source, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
let numeros = input.slice(1, n + 1).map(Number);

function quickSort(arr, left, right) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

quickSort(numeros, 0, numeros.length - 1);

console.log("Array ordenado:", numeros.join(", "));
// revisao para explicar o prof :
// na linha 1 a quantidade numeros

//na linha 2 a 9 são os numeros que vão ser ordenados
// ------ > executar com node ordenação.js input.txt no terminal 