alert('Hola Mundo');
//Variables
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
alert (mensajeDeBienvenida);
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = 'intento';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    console.log(numeroUsuario);
    /*
    Este codigo realiza la comparacion
    */
   //Acertamos, fue verdadera la condicion
    if(numeroUsuario == numeroSecreto) {
        alert(`acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraIntentos} `);
        //la condicion no se cumplio
    } else{
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es Menor')
        } else {
            alert('El numero secreto es Mayor');
        }
    // alert("Losiento no acertaste el Numero");
    }
    //Incrementamos el contador cuando la persona no acierta
    intentos = intentos + 1;
    palabraIntentos = 'intentos';
}

