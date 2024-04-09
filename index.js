const readline = require('readline'); //función sacada de internet

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = []; //se cambió array por numeros
let targetSum;

function ingresarNumero() {
    if (numeros.length >= 8) {
        rl.question('Se han ingresado el máximo de 8 valores.\n Ingrese la suma objetivo: ', (respuesta) => {
            targetSum = parseInt(respuesta);
            if (!isNaN(targetSum)) {
                console.log('\nNúmeros ingresados: ', numeros);
                console.log('\nSuma objetivo:', targetSum);
                const result = twoNumberSum(numeros, targetSum);
                console.log(result);
            } else {
                console.log('Error: Por favor, ingrese un valor entero para la suma objetivo.');
            }
            rl.close();
        });
    } else {
        rl.question(`Ingrese el valor ${numeros.length + 1}: `, (respuesta) => {
            const numero = parseFloat(respuesta);
            if (!isNaN(numero)) {
                    if(numeros.includes(numero) ==  false){
                        numeros.push(numero);
                        ingresarNumero(); 
                    }
                    else {
                        console.log('Error: Por favor, ingrese un número que no haya ingresado antes.');
                        ingresarNumero(); 
                    }
            } else {
                console.log('Error: Por favor, ingrese un número válido.');
                ingresarNumero(); 
            }
        }); 
    }
}

console.log("Bienvenido al mejor programa para verificar sumas en un arreglo. Por favor, ingrese 8 números y finalmente ingrese la suma que busca");

ingresarNumero();

function twoNumberSum(array, targetSum) {
    const resultado = [];
    for (let k = 0; k < array.length; k++) {
        for (let l = 0; l < array.length; l++) {
            if (array[k] + array[l] === targetSum) {
                resultado.push(array[k], array[l]);
                if(resultado.length === 2){
                    return console.log("El array resultante es: ", resultado);
                }
            }
        }
    }
    if (resultado.length === 0) {
        return console.log("No hay coincidencias");
    }
}

//Para recibir por pantalla valores, se buscó la función por internet. El resto fue todo hecho a mano.