const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];
let targetSum;

function ingresarNumero() {
    if (numeros.length >= 8) {
        rl.question('Se han ingresado el máximo de 8 valores.\n Ingrese la suma objetivo: ', (respuesta) => {
          targetSum = parseInt(respuesta);
          if (!isNaN(targetSum)) {
            console.log('Números ingresados:', numeros);
            console.log('Suma objetivo:', targetSum);
          } else {
            console.log('Error: Por favor, ingrese un valor entero para la suma objetivo.');
          }
          rl.close();
        });
    } else {
        rl.question(`Ingrese el valor ${numeros.length + 1}: `, (respuesta) => {
            const numero = parseFloat(respuesta);
            if (!isNaN(numero)) {
              numeros.push(numero);
            } else {
              console.log('Error: Por favor, ingrese un número válido.');
            }
            ingresarNumero();
          });
        }
    }

console.log("Bienvenido al mejor programa para verificar sumas en un arreglo. Por favor, ingrese 8 números y finalmente ingrese la suma que busca")

ingresarNumero();

function twoNumberSum(array, targetSum) { 
array = [];
for(let k=0; k<array.length; k++){
    for(let l=0; l<array.length; l++){
        if(array[k]+array[l]===targetSum){
            array.push(k, l)
    }
}
if(array.length === 0){
    return console.log("No hay coincidencias")
}
else{
    return console.log("El array resultante es: ", array)
}
}
}
const result = twoNumberSum(numeros, targetSum)
console.log(result)