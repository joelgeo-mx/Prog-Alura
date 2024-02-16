alert('Hola Mundo');
//Variables
let mensajeDeBienvenida = 'Bienvenido a la aplicacion'
alert (mensajeDeBienvenida);
let diaSemana = prompt("Ingrese el dia de la Semana");
//let finSemanaSab = "Sabado";
//let finSemanaDom = "Domingo";
if (diaSemana === "Sabado" || diaSemana === "Domingo") {
    alert("Feliz Fin de Semana");
}
else {alert("Buena Semana")}
/*Casi se logra: En Ln8  Col 8 estaba poniendo mal las condicionales
en la variable va sin comillas dentro del parentesis
los resultados esperados van entre comillas
cuando delimito a una palabra en especifico se usan 3 signos =
el sistema marca las variables citadas en blanco
para trabajar dos condicionales se separan dentro del parentesis
usando el signo || ||

/*Respuesta correcta:   
let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}*/
