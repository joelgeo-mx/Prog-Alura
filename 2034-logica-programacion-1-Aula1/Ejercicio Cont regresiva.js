alert('Hola Mundo');
//Variables
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
alert (mensajeDeBienvenida);
let qtdNumeros = numeroUsuario
let numeroUsuario = prompt('Digite la cantidad de números para el cálculo del promedio:');
//let = /*0*/ 1 
//alert('qtdNumeros');

while(numeroUsuario != qtdNumeros){
    alert(qtdNumeros);
    numeroUsuario = numeroUsuario - 1;
    if (qtdNumeros == 0) {
        alert (`Porfin llegamos al ${numeroUsuario}`)
    }
}

/*
Notas: El ejercicio pasado me fue facil pues comparaba 
un numero de usuario vs un 0 pero ahora me cambiaron las variables y no pude
No necesitaba dos variables, ya tenia una variable y la constante 0
con un mayor o igual me hubiera sido mas facil entender

Respuesta correcta:
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}


***
let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
}

let promedio = soma / qtdNumeros;

console.log(promedio);

*/
