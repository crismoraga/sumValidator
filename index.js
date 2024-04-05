const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];
let sumaObjetivo;

function ingresarNumero() {
    console.log("Bienvenido al mejor programa para validar la suma de dos números")
    console.log("Por favor, ingrese 8 números, todos distintos, y después la suma objetivo")
    if (numeros.length >= 8) {
        rl.question('Se han ingresado el máximo de 8 valores.\nIngrese la suma objetivo: ', (respuesta) => {
          sumaObjetivo = parseInt(respuesta);
          if (!isNaN(sumaObjetivo)) {
            console.log('Números ingresados:', numeros);
            console.log('Suma objetivo:', sumaObjetivo);
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

ingresarNumero();

function twoNumberSum(array, targetSum) { 
array = [];
for(let k=0, k<array.length, k++){
    for(let l=0, l<array.length, l++){
        if(array[k]+array[l]===targetSum){
            array.push(k, l)
    }
}
if(array.length === 0){
    console.log("No hay coincidencias")
}
else{
    console.log("El array resultante es: ", array)
}
}
}

const targetSum = 10
const result = twoNumberSum(array, targetSum)
console.log(result)