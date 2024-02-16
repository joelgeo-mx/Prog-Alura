alert('Hola Mundo');
//Variables
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
alert (mensajeDeBienvenida);
let qtdNumeros = 0
let numeroUsuario = prompt('Digite la cantidad de números para el cálculo del promedio:');
//let = /*0*/ 1 
//alert('qtdNumeros');

while(numeroUsuario != qtdNumeros){
    alert(qtdNumeros);
    qtdNumeros = qtdNumeros + 1;
    if (qtdNumeros == numeroUsuario) {
        alert (`Porfin llegamos al ${numeroUsuario}`)
    }
}

/*
Notas: Lo logre bien a la primera basandome en el contador pasado
Use dos variables comparandolas hasta igualarse
recuerda que el contador es mas facil contador++
Respuesta correcta:
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}"
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
