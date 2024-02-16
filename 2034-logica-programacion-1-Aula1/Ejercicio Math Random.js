alert('Hola Mundo');
//Variables
let nombre = 'Joel';
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
let lenguajeProg = prompt ("Oye, cual es tu lenguaje de programacion favorito?");
console.log (lenguajeProg)
alert (`${mensajeDeBienvenida} ${nombre}`);
console.log(`${mensajeDeBienvenida} ${nombre}`);

let valor1 = 25;
let valor2 = 1000;
let resultadoSuma = valor1 + valor2;
let resultadoResta = valor1 - valor2;
console.log(`la suma de ${valor1} + ${valor2} es ${resultadoSuma}`);
console.log(`la suma de ${valor1} - ${valor2} es ${resultadoResta}`);
//me quede en el paso 7 del ejercicio de MAth random

let edadUsuario = parseInt(prompt ("Ingrese su edad aqui"));

if (edadUsuario > 18) {
    alert ("Usted es mayor de edad, puede continuar");
} else {
        alert ("Lo sentimos, debido a su edad no puede continuar.");
        //break;
}

let numero = 1;
while (numero<= 10){
    console.log(numero);
    numero++;
}






/*
let numeroSecreto = Math.floor (Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maximosIntentos = 5;
console.log(typeof(numeroUsuario));
console.log(numeroSecreto);
/*
Este codigo realiza la comparacion
*//*
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));

    if(numeroUsuario == numeroSecreto) {
        //Acertamos la condicion se cumplio
        alert(`acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        //la condicion no se cumplio
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero es menor');
        } else {
                alert ('El numero es Mayor');
            }
        } 
        //Incrementamos el contador cuando "No Acierta"
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraIntentos = 'intentos';
        if (intentos > maximosIntentos) {
            alert (`Llegaste al numero maximo de ${maximosIntentos} intentos.`);
            break;
        }
        //alert("Losiento no acertaste el Numero");
    }
*/


