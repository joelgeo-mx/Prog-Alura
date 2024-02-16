alert('Hola Mundo');
//Variables
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
alert (mensajeDeBienvenida);
let numeroSecreto = Math.floor (Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maximosIntentos = 5;
console.log(typeof(numeroUsuario));
console.log(numeroSecreto);
/*
Este codigo realiza la comparacion
*/
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


