function calcularSueldo (costoHora, horasTrabajadas)
{
	alert("Te mereces un sueldo de: " + (costoHora*horasTrabajadas) + " :D");
}

var costoHora = prompt("Hey! ¿Cuánto vale tu hora de trabajo en pesos?");
var horasTrabajadas = prompt("Y... ¿Cuántas horas has trabajado?");
calcularSueldo(costoHora, horasTrabajadas);